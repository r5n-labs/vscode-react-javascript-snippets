import { workspace } from 'vscode';

export type ExtensionSettings = {
  languageScopes: string;
  importReactOnTop: boolean;
  typescript: boolean;
  typescriptPropsStatePrefix: 'type' | 'interface';
};

const extensionConfig = (): ExtensionSettings => {
  const config = workspace.getConfiguration('reactSnippets.settings');

  return {
    languageScopes: config.get<string>(
      'languageScopes',
      'typescript,typescriptreact,javascript,javascriptreact',
    ),
    importReactOnTop: config.get<boolean>('importReactOnTop', false),
    typescript: config.get<boolean>('typescript', true),
    typescriptPropsStatePrefix: config.get<'type' | 'interface'>(
      'typescriptPropsStatePrefix',
      'type',
    ),
  };
};

export default extensionConfig;
