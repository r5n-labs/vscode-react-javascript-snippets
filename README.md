[![Version](https://vsmarketplacebadge.apphb.com/version/dsznajder.es7-react-js-snippets.svg)](https://vsmarketplacebadge.apphb.com/version-short/dsznajder.es7-react-js-snippets.svg)
[![Install](https://vsmarketplacebadge.apphb.com/installs/dsznajder.es7-react-js-snippets.svg)](https://vsmarketplacebadge.apphb.com/installs-short/dsznajder.es7-react-js-snippets.svg)
[![Downloads](https://vsmarketplacebadge.apphb.com/downloads/dsznajder.es7-react-js-snippets.svg)](https://vsmarketplacebadge.apphb.com/downloads-short/dsznajder.es7-react-js-snippets.svg)
[![Ratings](https://vsmarketplacebadge.apphb.com/rating-short/dsznajder.es7-react-js-snippets.svg)](https://vsmarketplacebadge.apphb.com/rating-short/dsznajder.es7-react-js-snippets.svg)

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

From version 4 extension provides options to customize the behavior of the snippets:

|           Option | Description                                                                  |
| ---------------: | ---------------------------------------------------------------------------- |
|   languageScopes | list of supported languages / files recognition                              |
|  prettierEnabled | determines if snippets should be parsed with project prettier config         |
| importReactOnTop | If disabled, snippets won't contain `import React` on top. React 17+ support |
|       typescript | adds additional typescript snippets                                          |

# Sponsors

<p><a title="Try CodeStream" href="https://sponsorlink.codestream.com/?utm_source=vscmarket&amp;utm_campaign=es7_react&amp;utm_medium=banner"><img src="https://alt-images.codestream.com/codestream_logo_es7_react.png"></a></br>
Manage pull requests and conduct code reviews in your IDE with full source-tree context. Comment on any line, not just the diffs. Use jump-to-definition, your favorite keybindings, and code intelligence with more of your workflow.<br> <a title="Try CodeStream" href="https://sponsorlink.codestream.com/?utm_source=vscmarket&amp;utm_campaign=es7_react&amp;utm_medium=banner">Learn More</a></p>

<br>

### Conquer of Completion

It is possible to use this package in your vim/neovim text editor, to make this possible, make sure you have the `coc.nvim` previously configured, then add this command to your `init.vim`

```shell
Plug 'dsznajder/vscode-es7-javascript-react-snippets', { 'do': 'yarn install --frozen-lockfile && yarn compile' }
```

Update your vim / neovim settings with `:source %` and then install the new package with `:PlugInstall`

Note: This example uses `vim-plug` as a package manager, feel free to use some other

<br>

### Packer

For use with packer the syntax is a little different. Just add in your `init.vim` or `init.lua`:

```shell
use {'dsznajder/vscode-es7-javascript-react-snippets',
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
