import { workspace } from 'vscode';

import { DEFAULT_GENERATION_SETTINGS, GenerationSettings } from '../types';

export type ExtensionSettings = GenerationSettings;

const extensionConfig = (): ExtensionSettings => {
  const config = workspace.getConfiguration('reactSnippets.settings');

  return {
    languageScopes: config.get<string>(
      'languageScopes',
      DEFAULT_GENERATION_SETTINGS.languageScopes,
    ),
    importReactOnTop: config.get<boolean>(
      'importReactOnTop',
      DEFAULT_GENERATION_SETTINGS.importReactOnTop,
    ),
    typescript: config.get<boolean>(
      'typescript',
      DEFAULT_GENERATION_SETTINGS.typescript,
    ),
    typescriptPropsStatePrefix: config.get<'type' | 'interface'>(
      'typescriptPropsStatePrefix',
      DEFAULT_GENERATION_SETTINGS.typescriptPropsStatePrefix,
    ),
  };
};

export default extensionConfig;
