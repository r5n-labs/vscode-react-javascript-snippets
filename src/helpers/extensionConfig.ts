import { workspace } from 'vscode';

import {
  ComponentNameSource,
  ComponentWrapper,
  DEFAULT_GENERATION_SETTINGS,
  GenerationSettings,
  TypescriptPropsNaming,
} from '../types';

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
    typescriptPropsNaming: config.get<TypescriptPropsNaming>(
      'typescriptPropsNaming',
      DEFAULT_GENERATION_SETTINGS.typescriptPropsNaming,
    ),
    componentNameSource: config.get<ComponentNameSource>(
      'componentNameSource',
      DEFAULT_GENERATION_SETTINGS.componentNameSource,
    ),
    componentWrapper: config.get<ComponentWrapper>(
      'componentWrapper',
      DEFAULT_GENERATION_SETTINGS.componentWrapper,
    ),
  };
};

export default extensionConfig;
