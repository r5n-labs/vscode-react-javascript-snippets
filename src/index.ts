import {
  commands,
  ConfigurationChangeEvent,
  ExtensionContext,
  window,
  workspace,
} from 'vscode';

import { generateSnippets } from './generateSnippets';
import snippetSearch from './snippetSearch';

const showRestartMessage = async ({
  affectsConfiguration,
}: ConfigurationChangeEvent) => {
  if (affectsConfiguration('reactSnippets')) {
    await generateSnippets();
    setTimeout(() => {
      window
        .showWarningMessage(
          'React Snippets: Please restart VS Code to apply snippet formatting changes',
          'Restart VS Code',
          'Ignore',
        )
        .then((action?: string) => {
          if (action === 'Restart VS Code') {
            commands.executeCommand('workbench.action.reloadWindow');
          }
        });
    }, 1000);
  }
};

export async function activate(context: ExtensionContext) {
  workspace.onDidChangeConfiguration(showRestartMessage);
  const snippetSearchCommand = commands.registerCommand(
    'reactSnippets.search',
    snippetSearch,
  );

  context.subscriptions.push(snippetSearchCommand);

  await generateSnippets();
}

export function deactivate() {}
