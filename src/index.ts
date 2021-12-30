import { commands, ExtensionContext } from "vscode";

import snippetSearch from "./snippetSearch";
import generateSnippets from "./generateSnippets";

export function activate(context: ExtensionContext) {
  const snippetSearchCommand = commands.registerCommand(
    "esReactSnippets.search",
    snippetSearch,
  );

  generateSnippets();

  context.subscriptions.push(snippetSearchCommand);
}

export function deactivate() {}
