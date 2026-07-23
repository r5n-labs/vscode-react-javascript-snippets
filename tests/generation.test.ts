import { describe, expect, test } from 'bun:test';
import { mkdtemp, readFile, readdir, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  buildSnippets,
  LanguageScopesError,
  resolveLanguageScopes,
  resolveSnippetScopes,
} from '../src/helpers/buildSnippets';
import { parseSnippet } from '../src/helpers/formatters';
import { persistGeneratedSnippets } from '../src/helpers/persistGeneratedSnippets';
import { replaceOrRemoveReactImport } from '../src/helpers/replaceOrRemoveReactImport';
import {
  isGeneratedSnippetAvailableForLanguage,
  parseGeneratedSnippetCatalog,
  type GeneratedSnippetCatalog,
  type GeneratedSnippet,
} from '../src/snippetTypes';
import {
  DEFAULT_GENERATION_SETTINGS,
  type GenerationSettings,
} from '../src/types';

const generatedSnippetsPath = fileURLToPath(
  new URL('../src/snippets/generated.code-snippets', import.meta.url),
);
const snippetDocumentationPath = fileURLToPath(
  new URL('../docs/Snippets.md', import.meta.url),
);
const packageManifestPath = fileURLToPath(
  new URL('../package.json', import.meta.url),
);

type JsonObject = Readonly<Record<string, unknown>>;

const requireJsonObject = (value: unknown, context: string): JsonObject => {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    throw new Error(`Expected ${context} to be an object`);
  }

  return value as JsonObject;
};

const parseManifestGenerationDefaults = (
  content: string,
): GenerationSettings => {
  const parsed: unknown = JSON.parse(content);
  const manifest = requireJsonObject(parsed, 'package manifest');
  const contributes = requireJsonObject(
    manifest.contributes,
    'package contributes',
  );
  const configuration = requireJsonObject(
    contributes.configuration,
    'contributed configuration',
  );
  const properties = requireJsonObject(
    configuration.properties,
    'contributed configuration properties',
  );
  const readDefault = (setting: keyof GenerationSettings): unknown => {
    const key = `reactSnippets.settings.${setting}`;
    const property = requireJsonObject(properties[key], key);

    if (!Object.hasOwn(property, 'default')) {
      throw new Error(`Expected ${key} to define a default`);
    }

    return property.default;
  };

  const languageScopes = readDefault('languageScopes');
  const importReactOnTop = readDefault('importReactOnTop');
  const typescript = readDefault('typescript');
  const typescriptPropsStatePrefix = readDefault('typescriptPropsStatePrefix');
  const typescriptPropsNaming = readDefault('typescriptPropsNaming');
  const componentWrapper = readDefault('componentWrapper');

  if (
    typeof languageScopes !== 'string' ||
    typeof importReactOnTop !== 'boolean' ||
    typeof typescript !== 'boolean' ||
    (typescriptPropsStatePrefix !== 'type' &&
      typescriptPropsStatePrefix !== 'interface') ||
    (typescriptPropsNaming !== 'generic' &&
      typescriptPropsNaming !== 'component') ||
    (componentWrapper !== 'fragment' && componentWrapper !== 'div')
  ) {
    throw new Error('Package generation defaults have invalid types');
  }

  return {
    languageScopes,
    importReactOnTop,
    typescript,
    typescriptPropsStatePrefix,
    typescriptPropsNaming,
    componentWrapper,
  };
};

const parseDocumentedSnippetPrefixes = (content: string): string[] => {
  const prefixes = new Set<string>();

  for (const line of content.split('\n')) {
    const tableCell = line.match(/^\|\s*`([^`]+)→`\s*\|/);
    const heading = line.match(/^### `([^`]+)`$/);
    const prefix = tableCell?.[1] ?? heading?.[1];

    if (prefix) prefixes.add(prefix);
  }

  return [...prefixes].toSorted();
};

const parseGeneratedSnippets = (content: string): GeneratedSnippetCatalog =>
  parseGeneratedSnippetCatalog(JSON.parse(content));

const defaultSnippets = (): GeneratedSnippetCatalog =>
  parseGeneratedSnippets(buildSnippets(DEFAULT_GENERATION_SETTINGS));

const requireSnippet = (
  snippets: GeneratedSnippetCatalog,
  key: string,
): GeneratedSnippet => {
  const snippet = snippets[key];
  if (!snippet) throw new Error(`Expected generated snippet ${String(key)}`);
  return snippet;
};

describe('snippet compiler', () => {
  test('matches the tracked default artifact', async () => {
    const artifact = await readFile(generatedSnippetsPath, 'utf8');

    expect(buildSnippets(DEFAULT_GENERATION_SETTINGS)).toBe(artifact);
  });

  test('documents exactly the generated artifact prefixes', async () => {
    const [documentation, artifact] = await Promise.all([
      readFile(snippetDocumentationPath, 'utf8'),
      readFile(generatedSnippetsPath, 'utf8'),
    ]);
    const generatedPrefixes = [
      ...new Set(
        Object.values(parseGeneratedSnippets(artifact)).map(
          ({ prefix }) => prefix,
        ),
      ),
    ].toSorted();

    expect(parseDocumentedSnippetPrefixes(documentation)).toEqual(
      generatedPrefixes,
    );
  });

  test('keeps package configuration defaults aligned with generation defaults', async () => {
    const manifest = await readFile(packageManifestPath, 'utf8');

    expect(parseManifestGenerationDefaults(manifest)).toEqual(
      DEFAULT_GENERATION_SETTINGS,
    );
  });

  test('keeps the explicit React import snippet nonempty', () => {
    const importReact = requireSnippet(defaultSnippets(), 'importReact');

    expect(importReact.body).toEqual(["import React from 'react'"]);
  });

  test('keeps generated transforms intact when parsing search results', () => {
    const useState = requireSnippet(defaultSnippets(), 'useState');
    const expectedBody =
      'const [${2:first}, set${2/(.*)/${1:/capitalize}/}] = useState(${3:second})';

    expect(useState.body).toEqual([expectedBody]);
    expect(parseSnippet(useState.body)).toBe(expectedBody);
    expect(parseSnippet(expectedBody)).toBe(expectedBody);
  });

  test('reserves tabstop one for file names without changing rnxf numbering', () => {
    const snippets = defaultSnippets();
    const conflictingBodies = Object.values(snippets).filter((snippet) => {
      const body = snippet.body.join('\n');
      return (
        body.includes('${1:${TM_FILENAME_BASE}}') && body.includes('${1:first}')
      );
    });
    const rnxf = requireSnippet(snippets, 'reactNativeExtendedFunctional');

    expect(conflictingBodies).toEqual([]);
    expect(rnxf.body.join('\n')).toContain(
      'const ${1:${TM_FILENAME_BASE}} = ({ ${2:props} }) => {',
    );
    expect(rnxf.body.join('\n')).toContain(
      'const [${3:state}, ${4:setState}] = useState(${5:initialState})',
    );
  });

  test('emits unique keys and only scope-disjoint duplicate prefixes', () => {
    const entries = Object.entries(defaultSnippets());
    const values = entries.map(([, snippet]) => snippet);
    const prefixes = new Map<string, Set<string>>();

    expect(new Set(entries.map(([key]) => key)).size).toBe(values.length);
    expect(values.every((snippet) => !Object.hasOwn(snippet, 'key'))).toBe(
      true,
    );

    for (const snippet of values) {
      const scopes = new Set(snippet.scope.split(','));
      const existingScopes = prefixes.get(snippet.prefix);
      const overlap = existingScopes
        ? [...scopes].some((scope) => existingScopes.has(scope))
        : false;

      expect(overlap).toBe(false);
      prefixes.set(
        snippet.prefix,
        new Set([...(existingScopes ?? []), ...scopes]),
      );
    }
  });

  test('normalizes valid scopes and reports ignored values', () => {
    const warnings: string[] = [];
    const snippets = parseGeneratedSnippets(
      buildSnippets(
        {
          ...DEFAULT_GENERATION_SETTINGS,
          languageScopes: ' javascript , typescriptreact, javascript, invalid ',
        },
        (warning) => warnings.push(warning),
      ),
    );

    expect(requireSnippet(snippets, 'importReact').scope).toBe(
      'javascript,typescriptreact',
    );
    expect(warnings).toHaveLength(1);
    expect(warnings[0]).toContain('invalid');
  });

  test('applies every generation setting to compiled output', () => {
    const legacyReact = parseGeneratedSnippets(
      buildSnippets({
        ...DEFAULT_GENERATION_SETTINGS,
        importReactOnTop: true,
        languageScopes: 'javascriptreact',
        typescript: false,
      }),
    );
    const interfaces = parseGeneratedSnippets(
      buildSnippets({
        ...DEFAULT_GENERATION_SETTINGS,
        typescriptPropsStatePrefix: 'interface',
      }),
    );
    const divWrappedComponents = parseGeneratedSnippets(
      buildSnippets({
        ...DEFAULT_GENERATION_SETTINGS,
        componentWrapper: 'div',
      }),
    );
    const componentNamedProps = parseGeneratedSnippets(
      buildSnippets({
        ...DEFAULT_GENERATION_SETTINGS,
        typescriptPropsNaming: 'component',
      }),
    );
    const componentNamedInterfaces = parseGeneratedSnippets(
      buildSnippets({
        ...DEFAULT_GENERATION_SETTINGS,
        typescriptPropsNaming: 'component',
        typescriptPropsStatePrefix: 'interface',
      }),
    );

    expect(legacyReact.typescriptReactClassComponent).toBeUndefined();
    expect(
      requireSnippet(legacyReact, 'reactFunctionalComponent').body[0],
    ).toBe("import React from 'react'");
    expect(requireSnippet(legacyReact, 'reactFunctionalComponent').scope).toBe(
      'javascriptreact',
    );
    expect(
      requireSnippet(interfaces, 'typescriptReactClassComponent').body,
    ).toContain('interface Props {}');
    expect(
      requireSnippet(interfaces, 'typescriptReactClassComponent').body,
    ).toContain('interface State {}');
    expect(
      requireSnippet(divWrappedComponents, 'reactFunctionalComponent').body,
    ).toContain('    <div>${2:first}</div>');
    expect(
      requireSnippet(divWrappedComponents, 'typescriptReactClassComponent')
        .body,
    ).toContain('      <div>${2:first}</div>');
    expect(
      requireSnippet(componentNamedProps, 'typescriptReactFunctionalComponent')
        .body,
    ).toContain('type ${1:${TM_FILENAME_BASE}}Props = {}');
    expect(
      requireSnippet(componentNamedProps, 'typescriptReactFunctionalComponent')
        .body,
    ).toContain(
      'export default function ${1:${TM_FILENAME_BASE}}({}: ${1:${TM_FILENAME_BASE}}Props) {',
    );
    expect(
      requireSnippet(
        componentNamedInterfaces,
        'typescriptReactFunctionalComponent',
      ).body,
    ).toContain('interface ${1:${TM_FILENAME_BASE}}Props {}');
  });

  test('uses defaults for empty scopes but rejects nonempty invalid scopes', () => {
    const snippets = parseGeneratedSnippets(
      buildSnippets({
        ...DEFAULT_GENERATION_SETTINGS,
        languageScopes: ' ,  ',
      }),
    );

    expect(requireSnippet(snippets, 'importReact').scope).toBe(
      DEFAULT_GENERATION_SETTINGS.languageScopes,
    );
    expect(() =>
      buildSnippets({
        ...DEFAULT_GENERATION_SETTINGS,
        languageScopes: 'invalid, also-invalid',
      }),
    ).toThrow(LanguageScopesError);
  });

  test('intersects source scopes with configured scopes', () => {
    const configuredScopes = resolveLanguageScopes(
      'javascript, typescriptreact',
    );

    expect(
      resolveSnippetScopes(configuredScopes, {
        key: 'importReact',
        scope: 'typescript, typescriptreact, typescriptreact',
      }),
    ).toEqual(['typescriptreact']);
    expect(
      resolveSnippetScopes(configuredScopes, {
        key: 'importReact',
        scope: 'typescript',
      }),
    ).toEqual([]);
  });

  test('emits usable Redux and language-specific router scaffolds', () => {
    const snippets = defaultSnippets();
    const reduxApi = requireSnippet(snippets, 'reduxApi').body.join('\n');
    const reduxSlice = requireSnippet(
      snippets,
      'reduxSliceWithExtraReducers',
    ).body.join('\n');
    const javascriptRoute = requireSnippet(snippets, 'routeWithLoaderAction');
    const typescriptRoute = requireSnippet(
      snippets,
      'routeWithLoaderActionTypescript',
    );

    expect(reduxApi).toContain(
      'export const { use${4/(.*)/${1:/capitalize}/}Query } = ${2:first}Api',
    );
    expect(reduxSlice).toContain('  ${2:first},\n  status:');
    expect(javascriptRoute.scope).toBe('javascriptreact');
    expect(typescriptRoute.scope).toBe('typescriptreact');
    expect(typescriptRoute.body.join('\n')).toContain(': LoaderFunctionArgs');
    expect(typescriptRoute.body.join('\n')).toContain(': ActionFunctionArgs');
  });

  test('removes only a React import and its adjacent separator', () => {
    const body = [
      "import React from 'react'",
      '',
      'const firstLine = true',
      '',
      'const secondLine = true',
    ];

    expect(replaceOrRemoveReactImport(body)).toEqual([
      'const firstLine = true',
      '',
      'const secondLine = true',
    ]);
    expect(
      replaceOrRemoveReactImport([
        "import React, { useState } from 'react'",
        '',
        'const value = useState()',
      ]),
    ).toEqual([
      "import { useState } from 'react'",
      '',
      'const value = useState()',
    ]);
  });
});

describe('generated snippet persistence', () => {
  test('serializes atomic writes and reports whether content changed', async () => {
    const directory = await mkdtemp(join(tmpdir(), 'snippet-generation-'));
    const filePath = join(directory, 'generated.code-snippets');

    try {
      expect(await persistGeneratedSnippets(filePath, 'initial')).toBe(true);
      expect(await persistGeneratedSnippets(filePath, 'initial')).toBe(false);

      const changes = await Promise.all([
        persistGeneratedSnippets(filePath, 'first'),
        persistGeneratedSnippets(filePath, 'second'),
        persistGeneratedSnippets(filePath, 'third'),
      ]);

      expect(changes).toEqual([true, true, true]);
      expect(await readFile(filePath, 'utf8')).toBe('third');
      expect(await readdir(directory)).toEqual(['generated.code-snippets']);
    } finally {
      await rm(directory, { force: true, recursive: true });
    }
  });
});

describe('generated snippet search scope', () => {
  test('matches complete comma-separated language identifiers', () => {
    const snippet = { scope: ' javascript, typescriptreact ' };

    expect(isGeneratedSnippetAvailableForLanguage(snippet, 'javascript')).toBe(
      true,
    );
    expect(
      isGeneratedSnippetAvailableForLanguage(snippet, 'typescriptreact'),
    ).toBe(true);
    expect(isGeneratedSnippetAvailableForLanguage(snippet, 'typescript')).toBe(
      false,
    );
    expect(isGeneratedSnippetAvailableForLanguage(snippet, '')).toBe(false);
  });

  test('validates the complete generated snippet shape', () => {
    expect(
      parseGeneratedSnippetCatalog({
        valid: {
          prefix: 'valid',
          body: ['const valid = true'],
          description: 'Valid snippet',
          scope: 'javascript',
        },
      }),
    ).toEqual({
      valid: {
        prefix: 'valid',
        body: ['const valid = true'],
        description: 'Valid snippet',
        scope: 'javascript',
      },
    });
    expect(() =>
      parseGeneratedSnippetCatalog({
        invalid: {
          key: 'invalid',
          prefix: 'invalid',
          body: [''],
          scope: 'javascript',
        },
      }),
    ).toThrow('Generated snippet catalog entry');
    expect(() =>
      parseGeneratedSnippetCatalog({
        invalid: {
          prefix: 'invalid',
          body: 'not-an-array',
          scope: 'javascript',
        },
      }),
    ).toThrow('Generated snippet catalog entry');
  });
});
