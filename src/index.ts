import { commands, ExtensionContext } from "vscode";

import snippetSearch from "./snippetSearch";

export function activate(context: ExtensionContext) {
  const snippetSearchCommand = commands.registerCommand("esReactSnippets.search", snippetSearch);

  context.subscriptions.push(snippetSearchCommand);
}

export function deactivate() {}
