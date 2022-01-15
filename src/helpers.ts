import prettier, { Options } from 'prettier';
import { workspace } from 'vscode';

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

export const formatSnippet = (string: string) => {
  const prettierConfig = getPrettierConfig();
  return prettier.format(string, prettierConfig);
};

export const parseSnippet = (body: string | string[]) => {
  const snippetBody = typeof body === 'string' ? body : body.join('\n');

  return replaceSnippetPlaceholders(
    formatSnippet(revertSnippetPlaceholders(snippetBody)),
  );
};
