import {
  commands,
  ConfigurationChangeEvent,
  ExtensionContext,
  window,
  workspace,
} from 'vscode';

import generateSnippets from './helpers/generateSnippets';
import snippetSearch from './helpers/snippetSearch';
import generatedSnippets from './snippets/generated.json';

const showRestartMessage = async ({
  affectsConfiguration,
}: ConfigurationChangeEvent) => {
  if (affectsConfiguration('reactSnippets')) {
    await generateSnippets();
    const action = await window.showWarningMessage(
      'React Snippets: Please restart VS Code to apply snippet formatting changes',
      'Restart VS Code',
      'Ignore',
    );
    if (action === 'Restart VS Code') {
      commands.executeCommand('workbench.action.reloadWindow');
    }
  }
};

export async function activate(context: ExtensionContext) {
  workspace.onDidChangeConfiguration(showRestartMessage);
  if (Object.keys(generatedSnippets).length === 0) {
    try {
      await generateSnippets();
    } catch (error) {
      console.error(error);
    }
  }
  const snippetSearchCommand = commands.registerCommand(
    'reactSnippets.search',
    snippetSearch,
  );

  context.subscriptions.push(snippetSearchCommand);
}

export function deactivate() {}
