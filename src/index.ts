import { commands, window, workspace } from 'vscode';
import type { ConfigurationChangeEvent, ExtensionContext } from 'vscode';

import generateSnippets from './helpers/generateSnippets';
import { safeGenerationFailure } from './helpers/safeGenerationFailure';
import snippetSearch from './helpers/snippetSearch';

let reloadPrompt: Promise<void> | undefined;

const showGenerationError = (operation: string, error: unknown): void => {
  void Promise.resolve(
    window.showErrorMessage(
      `React Snippets: ${operation} failed. ${safeGenerationFailure(error)}`,
    ),
  ).catch(() => undefined);
};

const offerReload = (): void => {
  if (reloadPrompt) return;

  reloadPrompt = Promise.resolve(
    window.showWarningMessage(
      'React Snippets: Reload VS Code to apply generated snippet changes.',
      'Reload VS Code',
      'Later',
    ),
  )
    .then(async (action) => {
      if (action !== 'Reload VS Code') return;
      await commands.executeCommand('workbench.action.reloadWindow');
    })
    .catch(() => undefined)
    .finally(() => {
      reloadPrompt = undefined;
    });
};

const handleConfigurationChange = async ({
  affectsConfiguration,
}: ConfigurationChangeEvent): Promise<void> => {
  if (!affectsConfiguration('reactSnippets')) return;

  try {
    const changed = await generateSnippets();
    if (!changed) return;

    offerReload();
  } catch (error) {
    showGenerationError('Regeneration after the configuration change', error);
  }
};

export async function activate(context: ExtensionContext): Promise<void> {
  const configurationListener = workspace.onDidChangeConfiguration(
    handleConfigurationChange,
  );
  const snippetSearchCommand = commands.registerCommand(
    'reactSnippets.search',
    snippetSearch,
  );

  context.subscriptions.push(configurationListener, snippetSearchCommand);

  try {
    const changed = await generateSnippets();
    if (changed) offerReload();
  } catch (error) {
    showGenerationError('Generation during activation', error);
  }
}

export function deactivate(): void {}
