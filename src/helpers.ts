import prettier, { Options } from 'prettier';
import { workspace } from 'vscode';

import { Snippet } from './generateSnippets';
import { SnippetPlaceholders } from './types';

export type ExtensionSettings = {
  languageScopes: string;
  prettierEnabled: boolean;
  semiColons: boolean;
  importReactOnTop: boolean;
  singleQuote: boolean;
  typescript: boolean;
  tabWidth: number;
  typescriptComponentPropsStatePrefix: 'type' | 'interface';
};

let prettierConfig: prettier.Options | null;
prettier
  .resolveConfig('', { editorconfig: true })
  .then((config) => (prettierConfig = config));

export const extensionConfig = () =>
  workspace.getConfiguration(
    'reactSnippets.settings',
  ) as unknown as ExtensionSettings;

const getPrettierConfig = (): Options => {
  const { semiColons, singleQuote, tabWidth, prettierEnabled } =
    extensionConfig();

  return {
    parser: 'typescript',
    semi: semiColons,
    singleQuote,
    tabWidth,
    ...(prettierEnabled && prettierConfig),
  };
};

const formatSnippet = (string: string) => {
  const prettierConfig = getPrettierConfig();
  return prettier.format(string, prettierConfig);
};

export const replaceSnippetPlaceholders = (snippetString: string) =>
  String(snippetString)
    .replace(
      new RegExp(SnippetPlaceholders.FileName, 'g'),
      '${1:${TM_FILENAME_BASE}}',
    )
    .replace(new RegExp(SnippetPlaceholders.FirstTab, 'g'), '${1:first}')
    .replace(new RegExp(SnippetPlaceholders.SecondTab, 'g'), '${2:second}')
    .replace(new RegExp(SnippetPlaceholders.ThirdTab, 'g'), '${3:third}')
    .replace(new RegExp(SnippetPlaceholders.LastTab, 'g'), '$0');

export const revertSnippetPlaceholders = (snippetString: string) =>
  String(snippetString)
    .replace(
      new RegExp(/\${1:\${TM_FILENAME_BASE}}/, 'g'),
      SnippetPlaceholders.FileName,
    )
    .replace(new RegExp(/\${1:first}/, 'g'), SnippetPlaceholders.FirstTab)
    .replace(new RegExp(/\${2:second}/, 'g'), SnippetPlaceholders.SecondTab)
    .replace(new RegExp(/\${3:third}/, 'g'), SnippetPlaceholders.ThirdTab)
    .replace(new RegExp(/\$0/, 'g'), SnippetPlaceholders.LastTab);

export const parseSnippet = (body: string | string[]) => {
  const snippetBody = typeof body === 'string' ? body : body.join('\n');

  return replaceSnippetPlaceholders(
    formatSnippet(revertSnippetPlaceholders(snippetBody)),
  );
};

// This is array of prefixes which are currently skipped because of syntax format issues
const skippedSnippets = [
  'pge',
  'pse',
  'gdsfp',
  'gsbu',
  'scu',
  'cwun',
  'cdm',
  'cdup',
  'rconst',
];

const withReactImport = [
  'rfce',
  'rfc',
  'rfcp',
  'rafce',
  'rafc',
  'rafcp',
  'rnfe',
  'rnfes',
  'rnf',
  'rnfs',
  'stest',
  'sntest',
  'srtest',
  'snrtest',
  'hocredux',
  'hoc',
];

const replaceOrRemoveReactImport = (snippetBody: string[]) => {
  const reactImportIndex = snippetBody.findIndex((line) =>
    line.match(new RegExp(/import React/, 'g')),
  );

  if (reactImportIndex !== -1) {
    const line = snippetBody[reactImportIndex];
    snippetBody[reactImportIndex] = line
      .replace(new RegExp(/^import React .*$/, 'g'), '')
      .replace(new RegExp(/^import React, /, 'g'), 'import ');
  }

  return snippetBody.join('\n');
};

export const parseSnippetToBody = (snippet: Snippet) => {
  const { importReactOnTop } = extensionConfig();
  const body =
    typeof snippet.body === 'string' ? snippet.body : snippet.body.join('\n');

  const snippetBody = importReactOnTop
    ? body
    : withReactImport.includes(snippet.prefix)
    ? replaceOrRemoveReactImport(snippet.body)
    : body;

  const formattedSnippet = skippedSnippets.includes(snippet.prefix)
    ? snippetBody
    : formatSnippet(snippetBody).split('\n');

  return snippet.body.length === 1 ? formattedSnippet[0] : formattedSnippet;
};
