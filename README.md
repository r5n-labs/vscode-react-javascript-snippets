# VS Code ES7+ React/Redux/React-Native/JS snippets

JavaScript and React/Redux snippets in ES7+ with Babel plugin features for [VS Code](https://code.visualstudio.com/)

## Installation

### Visual Studio Marketplace

Launch _Quick Open_:

- [_Linux_](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf): `Ctrl+P`
- [_macOS_](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf): `⌘P`
- [_Windows_](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf): `Ctrl+P`

Paste the following command and press `Enter`:

```shell
ext install dsznajder.es7-react-js-snippets
```

## Options

|                  Option | Description                                                                                            |
| ----------------------: | ------------------------------------------------------------------------------------------------------ |
|          languageScopes | Comma-separated list of language scopes where snippets are available (default: `typescript,typescriptreact,javascript,javascriptreact`) |
|        importReactOnTop | Adds `import React` at the top of component snippets. Enable for legacy projects pre-React 17 (default: `false`) |
|              typescript | Adds TypeScript-specific component snippets (default: `true`)                                          |
| typescriptPropsStatePrefix | Controls `type` vs `interface` for TypeScript Props/State (default: `type`)                        |

**Note:** Changing settings requires a VS Code restart to take effect.

### Conquer of Completion

It is possible to use this package in your vim/neovim text editor, to make this possible, make sure you have the `coc.nvim` previously configured, then add this command to your `init.vim`

```shell
Plug 'r5n-labs/vscode-react-javascript-snippets', { 'do': 'yarn install --frozen-lockfile && yarn compile' }
```

Update your vim / neovim settings with `:source %` and then install the new package with `:PlugInstall`

Note: This example uses `vim-plug` as a package manager, feel free to use some other

<br>

### Packer

For use with packer the syntax is a little different. Just add in your `init.vim` or `init.lua`:

```shell
use {'r5n-labs/vscode-react-javascript-snippets',
run = 'yarn install --frozen-lockfile && yarn compile'
}
```

When saving the file, the update will be done ( `:w` )

<br>

## Search command

You can search through snippets with `ES7 snippet search` command which can be run with `CMD + Shift + P` or just use `CMD + Shift + R` (`CTRL + ALT + R` for Windows & Linux) keybinding.

Here is direct link to marketplace [ES7 React/Redux/React-Native/JS Snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

<br>

## [Snippets](./docs/Snippets.md)
