import prettier, { Options } from 'prettier';
import { workspace } from 'vscode';

import { Snippet } from './generateSnippets';
import { Mappings, Placeholders } from './types';

export type ExtensionSettings = {
  languageScopes: string;
  prettierEnabled: boolean;
  semiColons: boolean;
  importReactOnTop: boolean;
  singleQuote: boolean;
  typescript: boolean;
  tabWidth: number;
  typescriptPropsStatePrefix: 'type' | 'interface';
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

export const replaceSnippetPlaceholders = (snippetString: string) => {
  const { typescriptPropsStatePrefix } = extensionConfig();
  const propsPlaceholder =
    typescriptPropsStatePrefix === 'type'
      ? Mappings.TypeProps
      : Mappings.InterfaceProps;
  const statePlaceholder =
    typescriptPropsStatePrefix === 'type'
      ? Mappings.TypeState
      : Mappings.InterfaceState;

  return String(snippetString)
    .replace(new RegExp(Placeholders.FileName, 'g'), '${1:${TM_FILENAME_BASE}}')
    .replace(new RegExp(Placeholders.FirstTab, 'g'), '${1:first}')
    .replace(new RegExp(Placeholders.SecondTab, 'g'), '${2:second}')
    .replace(new RegExp(Placeholders.ThirdTab, 'g'), '${3:third}')
    .replace(new RegExp(Placeholders.LastTab, 'g'), '$0')
    .replace(
      new RegExp(Placeholders.Capitalize, 'g'),
      '${1/(.*)/${1:/capitalize}/}',
    )
    .replace(new RegExp(Placeholders.TypeProps, 'g'), propsPlaceholder)
    .replace(new RegExp(Placeholders.TypeState, 'g'), statePlaceholder);
};

export const revertSnippetPlaceholders = (snippetString: string) => {
  return String(snippetString)
    .replace(
      new RegExp(/\${1:\${TM_FILENAME_BASE}}/, 'g'),
      Placeholders.FileName,
    )
    .replace(new RegExp(/\${1:first}/, 'g'), Placeholders.FirstTab)
    .replace(new RegExp(/\${2:second}/, 'g'), Placeholders.SecondTab)
    .replace(new RegExp(/\${3:third}/, 'g'), Placeholders.ThirdTab)
    .replace(new RegExp(/\$0/, 'g'), Placeholders.LastTab)
    .replace(
      new RegExp(/\${1\/(.*)\/${1:\/capitalize}\/}/, 'g'),
      Placeholders.Capitalize,
    );
};

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
