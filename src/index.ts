import * as vscode from "vscode";

import jsSnippets from "./snippets/snippets.json";
import tsSnippets from "./snippets/ts-snippets.json";

const convertSnippetArrayToString = (snippetArray: Array<string>) => snippetArray.join("\n");

export function activate(context: vscode.ExtensionContext) {
  const {
    commands: { registerCommand },
    window: { showQuickPick, activeTextEditor },
  } = vscode;

  const disposable = registerCommand("extension.snippetSearch", async () => {
    const javascriptSnippets = Object.entries(jsSnippets);
    const typescriptSnippets = Object.entries(tsSnippets);
    const snippetsArray = javascriptSnippets.concat(typescriptSnippets);

    const items = snippetsArray.map(
      // @ts-expect-error
      ([shortDescription, { prefix, body, description }], index) => {
        const value = typeof prefix === "string" ? prefix : prefix[0];

        return {
          id: index,
          description: description || shortDescription,
          label: value,
          value,
          body,
        };
      },
    );

    const options = {
      matchOnDescription: true,
      matchOnDetail: true,
      placeHolder: "Search snippet",
    };

    const snippet = (await showQuickPick(items, options)) || {
      body: "",
    };

    const body =
      typeof snippet.body === "string" ? snippet.body : convertSnippetArrayToString(snippet.body);

    if (activeTextEditor) {
      activeTextEditor.insertSnippet(new vscode.SnippetString(body));
    }
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
