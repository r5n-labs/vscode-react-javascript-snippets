// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const snippets = require('./snippets/snippets.json');
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

const convertSnippetArrayToString = snippetArray => snippetArray.join('\n');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log(
    'Congratulations, your extension "snippet-search" is now active!'
  );

  let disposable = vscode.commands.registerCommand(
    'extension.snippetSearch',
    () => {
      const items = Object.entries(snippets).map(
        ([shortDescription, { prefix, body, description }], id) => ({
          id,
          description: description || shortDescription,
          label: prefix,
          value: prefix,
          body,
        })
      );
      const options = {
        matchOnDescription: true,
        matchOnDetail: true,
        placeHolder: 'Search snippet',
      };
      vscode.window.showQuickPick(items, options).then(({ body }) => {
        const activeTextEditor = vscode.window.activeTextEditor;
        const snippet =
          typeof body === 'string' ? body : convertSnippetArrayToString(body);
        activeTextEditor &&
          activeTextEditor.insertSnippet(new vscode.SnippetString(snippet));
      });
    }
  );
  context.subscriptions.push(disposable);
}
exports.activate = activate;

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
