import { workspace } from 'vscode';

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

const extensionConfig = () =>
  workspace.getConfiguration(
    'reactSnippets.settings',
  ) as unknown as ExtensionSettings;

export default extensionConfig;
