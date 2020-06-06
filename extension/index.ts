// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'

const jsSnippets = require('../snippets/snippets.json')
const tsSnippets = require('../snippets/ts-snippets.json')

type Snippet = {
  body: Array<string> | string
  description: string
  prefix: Array<string> | string
}

const convertSnippetArrayToString = (snippetArray: Array<string>): string =>
  snippetArray.join('\n')

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "snippet-search" is now active!')

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  const disposable = vscode.commands.registerCommand(
    'extension.snippetSearch',
    async () => {
      const javascriptSnippets = Object.entries(jsSnippets as Array<Snippet>)
      const typescriptSnippets = Object.entries(tsSnippets as Array<Snippet>)
      const snippetsArray: Array<[string, Snippet]> = javascriptSnippets.concat(
        typescriptSnippets
      )

      const items = snippetsArray.map(
        ([shortDescription, { prefix, body, description }], index) => {
          const value = typeof prefix === 'string' ? prefix : prefix[0]

          return {
            id: index,
            description: description || shortDescription,
            label: value,
            value,
            body,
          }
        }
      )

      const options = {
        matchOnDescription: true,
        matchOnDetail: true,
        placeHolder: 'Search snippet',
      }

      const snippet = (await vscode.window.showQuickPick(items, options)) || {
        body: '',
      }
      const activeTextEditor = vscode.window.activeTextEditor
      const body =
        typeof snippet.body === 'string'
          ? snippet.body
          : convertSnippetArrayToString(snippet.body)
      activeTextEditor &&
        activeTextEditor.insertSnippet(new vscode.SnippetString(body))
    }
  )

  context.subscriptions.push(disposable)
}

// this method is called when your extension is deactivated
export function deactivate() {}
