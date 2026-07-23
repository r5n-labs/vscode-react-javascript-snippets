import componentsSnippets from '../sourceSnippets/components';
import consoleSnippets from '../sourceSnippets/console';
import hooksSnippets from '../sourceSnippets/hooks';
import importsSnippets from '../sourceSnippets/imports';
import othersSnippets from '../sourceSnippets/others';
import propTypesSnippets from '../sourceSnippets/propTypes';
import reactNativeSnippets from '../sourceSnippets/reactNative';
import reduxSnippets from '../sourceSnippets/redux';
import testsSnippets from '../sourceSnippets/tests';
import typescriptSnippets from '../sourceSnippets/typescript';
import {
  GeneratedSnippet,
  GeneratedSnippets,
  Snippet,
  SnippetKeys,
} from '../snippetTypes';
import {
  GenerationSettings,
  LanguageScope,
  VALID_LANGUAGE_SCOPES,
} from '../types';

import { parseSnippetToBody } from './parseSnippetToBody';
import { replaceSnippetPlaceholders } from './snippetPlaceholders';

export type BuildWarningCallback = (message: string) => void;

export class LanguageScopesError extends Error {
  readonly _tag = 'LanguageScopesError';

  constructor(
    readonly operation: string,
    readonly input: string,
  ) {
    super(
      `Cannot ${operation}: language scope input ${JSON.stringify(input)} contains no valid scopes. Valid values: ${VALID_LANGUAGE_SCOPES.join(', ')}`,
    );
    this.name = 'LanguageScopesError';
  }
}

export class SnippetCompilationError extends Error {
  readonly _tag = 'SnippetCompilationError';

  constructor(message: string) {
    super(`Cannot build snippets: ${message}`);
    this.name = 'SnippetCompilationError';
  }
}

const VALID_LANGUAGE_SCOPE_SET: ReadonlySet<string> = new Set(
  VALID_LANGUAGE_SCOPES,
);

const isLanguageScope = (scope: string): scope is LanguageScope =>
  VALID_LANGUAGE_SCOPE_SET.has(scope);

const parseLanguageScopes = (
  rawScopes: string,
  operation: string,
  onWarning?: BuildWarningCallback,
): LanguageScope[] => {
  const requestedScopes = [
    ...new Set(
      rawScopes
        .split(',')
        .map((scope) => scope.trim())
        .filter((scope) => scope.length > 0),
    ),
  ];

  if (requestedScopes.length === 0) return [...VALID_LANGUAGE_SCOPES];

  const validScopes = requestedScopes.filter(isLanguageScope);
  const invalidScopes = requestedScopes.filter(
    (scope) => !isLanguageScope(scope),
  );

  if (invalidScopes.length > 0) {
    onWarning?.(
      `React Snippets: Invalid language scopes ignored while attempting to ${operation}: ${invalidScopes.join(', ')}. Valid values: ${VALID_LANGUAGE_SCOPES.join(', ')}`,
    );
  }

  if (validScopes.length === 0) {
    throw new LanguageScopesError(operation, rawScopes);
  }

  return validScopes;
};

export const resolveLanguageScopes = (
  rawScopes: string,
  onWarning?: BuildWarningCallback,
): LanguageScope[] =>
  parseLanguageScopes(rawScopes, 'build snippets', onWarning);

export const resolveSnippetScopes = (
  configuredScopes: readonly LanguageScope[],
  snippet: Pick<Snippet, 'key' | 'scope'>,
  onWarning?: BuildWarningCallback,
): LanguageScope[] => {
  if (snippet.scope === undefined) return [...configuredScopes];

  const allowedScopes = new Set(
    parseLanguageScopes(
      snippet.scope,
      `compile snippet ${String(snippet.key)}`,
      onWarning,
    ),
  );

  return configuredScopes.filter((scope) => allowedScopes.has(scope));
};

const sharedSnippets: readonly Snippet[] = [
  ...componentsSnippets,
  ...consoleSnippets,
  ...hooksSnippets,
  ...importsSnippets,
  ...propTypesSnippets,
  ...reactNativeSnippets,
  ...reduxSnippets,
  ...testsSnippets,
  ...othersSnippets,
];

const getSourceSnippets = (typescript: boolean): readonly Snippet[] =>
  typescript ? [...typescriptSnippets, ...sharedSnippets] : sharedSnippets;

type SeenPrefix = {
  readonly key: SnippetKeys;
  readonly scopes: readonly LanguageScope[];
};

const assertUniqueSnippet = (
  snippets: GeneratedSnippets,
  seenPrefixes: Map<string, SeenPrefix[]>,
  snippet: Snippet,
  scopes: readonly LanguageScope[],
): void => {
  if (Object.hasOwn(snippets, snippet.key)) {
    throw new SnippetCompilationError(
      `duplicate key ${JSON.stringify(String(snippet.key))}`,
    );
  }

  const matchingPrefixes = seenPrefixes.get(snippet.prefix) ?? [];
  const collision = matchingPrefixes.find((seen) =>
    seen.scopes.some((scope) => scopes.includes(scope)),
  );

  if (collision) {
    throw new SnippetCompilationError(
      `prefix ${JSON.stringify(snippet.prefix)} overlaps between ${String(collision.key)} and ${String(snippet.key)}`,
    );
  }

  matchingPrefixes.push({ key: snippet.key, scopes });
  seenPrefixes.set(snippet.prefix, matchingPrefixes);
};

const compileSnippet = (
  snippet: Snippet,
  scopes: readonly LanguageScope[],
  settings: GenerationSettings,
): GeneratedSnippet => ({
  prefix: snippet.prefix,
  body: parseSnippetToBody(snippet, settings.importReactOnTop).map((line) =>
    replaceSnippetPlaceholders(line, settings),
  ),
  ...(snippet.description === undefined
    ? {}
    : { description: snippet.description }),
  scope: scopes.join(','),
});

export const buildSnippets = (
  settings: GenerationSettings,
  onWarning?: BuildWarningCallback,
): string => {
  const configuredScopes = resolveLanguageScopes(
    settings.languageScopes,
    onWarning,
  );
  const generatedSnippets: GeneratedSnippets = {};
  const seenPrefixes = new Map<string, SeenPrefix[]>();

  for (const snippet of getSourceSnippets(settings.typescript)) {
    const scopes = resolveSnippetScopes(configuredScopes, snippet, onWarning);
    if (scopes.length === 0) continue;

    assertUniqueSnippet(generatedSnippets, seenPrefixes, snippet, scopes);
    generatedSnippets[snippet.key] = compileSnippet(snippet, scopes, settings);
  }

  return `${JSON.stringify(generatedSnippets, null, 2)}\n`;
};
