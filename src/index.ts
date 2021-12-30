import { commands, ExtensionContext } from 'vscode';

import generateSnippets from './generateSnippets';
import snippetSearch from './snippetSearch';

export async function activate(context: ExtensionContext) {
  await generateSnippets();

  const snippetSearchCommand = commands.registerCommand(
    'esReactSnippets.search',
    snippetSearch,
  );

  context.subscriptions.push(snippetSearchCommand);
}

export function deactivate() {}
