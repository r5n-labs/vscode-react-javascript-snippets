# VS Code ES7+ React/Redux/React-Native/JS snippets

Customizable JavaScript and React/Redux snippets for VS Code, with first-class support for ES7+ syntax, React 17–19, React Router v6, Redux Toolkit, and TypeScript.

[![Version](https://img.shields.io/visual-studio-marketplace/v/r5n.es-js-snippets?label=marketplace&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=r5n.es-js-snippets)
[![Installs](https://img.shields.io/visual-studio-marketplace/i/r5n.es-js-snippets)](https://marketplace.visualstudio.com/items?itemName=r5n.es-js-snippets)
[![Rating](https://img.shields.io/visual-studio-marketplace/r/r5n.es-js-snippets)](https://marketplace.visualstudio.com/items?itemName=r5n.es-js-snippets&ssr=false#review-details)
[![Open VSX](https://img.shields.io/open-vsx/v/r5n/es-js-snippets?label=open%20vsx)](https://open-vsx.org/extension/r5n/es-js-snippets)
[![CI](https://github.com/r5n/vscode-react-javascript-snippets/actions/workflows/typescript_and_lint.yml/badge.svg?branch=develop)](https://github.com/r5n/vscode-react-javascript-snippets/actions/workflows/typescript_and_lint.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

> Maintained by **[r5n](https://github.com/r5n)**. Continues the work of the original `vscode-es7-javascript-react-snippets` extension. The legacy `es7-react-js-snippets` listing is deprecated; install `r5n.es-js-snippets` for new updates.

## Install

Open VS Code Quick Open and paste:

```shell
ext install r5n.es-js-snippets
```

Quick Open shortcut: `Ctrl+P` (Linux/Windows) · `⌘P` (macOS).

Or from the Marketplace: [r5n.es-js-snippets](https://marketplace.visualstudio.com/items?itemName=r5n.es-js-snippets) · Open VSX: [open-vsx.org](https://open-vsx.org/extension/r5n/es-js-snippets).

## Snippet search

Search by description or prefix:

| Action          | Shortcut                                 |
| --------------- | ---------------------------------------- |
| Snippet search  | `⇧⌘R` (macOS) · `Ctrl+Alt+R` (Win/Linux) |
| Command palette | "Snippet search"                         |

The full list lives in [docs/Snippets.md](./docs/Snippets.md).

## What's new in v5

- React 17–19 support — components no longer add `import React` by default (toggle via `importReactOnTop`).
- React Router v6 imports.
- Redux Toolkit (`createSlice`, `createApi` / RTK Query) snippets.
- Performance: snippet generation no longer mutates source on settings reload, fixing stale snippets after toggling options.
- `languageScopes` is validated; invalid scopes are dropped instead of silently breaking activation.

See [CHANGELOG.md](./CHANGELOG.md) for the full list.

## Configuration

Settings live under `reactSnippets.settings.*`. Restart VS Code after changes.

|                      Setting | Type      | Default                                                 | Description                                                                                             |
| ---------------------------: | :-------- | :------------------------------------------------------ | :------------------------------------------------------------------------------------------------------ |
|           `importReactOnTop` | `boolean` | `false`                                                 | Add `import React from 'react'` to component snippets. Enable for projects on the legacy JSX transform. |
|                 `typescript` | `boolean` | `true`                                                  | Emit TypeScript Props typing in component snippets.                                                     |
|             `languageScopes` | `string`  | `typescript,typescriptreact,javascript,javascriptreact` | Comma-separated language scopes where snippets are active.                                              |
| `typescriptPropsStatePrefix` | `string`  | `type`                                                  | Use `type` or `interface` for Props/State in TypeScript snippets.                                       |

## Editor support

### VS Code · Cursor · VSCodium

Install from Marketplace (VS Code, Cursor) or Open VSX (VSCodium, Theia, Eclipse Che).

### vim / neovim with [coc.nvim](https://github.com/neoclide/coc.nvim)

Add the plugin in your `init.vim`:

```vim
Plug 'r5n/vscode-react-javascript-snippets', { 'do': 'bun install --frozen-lockfile && bun run compile' }
```

Reload (`:source %`) and run `:PlugInstall`.

### Packer (Lua)

```lua
use {
  'r5n/vscode-react-javascript-snippets',
  run = 'bun install --frozen-lockfile && bun run compile'
}
```

Save (`:w`) to trigger the build.

## Contributing & development

Local stack: **bun ≥ 1.3** + **VS Code**.

```shell
git clone https://github.com/r5n/vscode-react-javascript-snippets
cd vscode-react-javascript-snippets
bun install
bun run typescript      # type-check
bun run lint            # eslint
bun run compile         # build to ./lib
```

Press `F5` in VS Code to launch the Extension Development Host with the local build attached.

Open a PR against `develop`. CI (`Typescript & lint`) runs on every push and pull request.

## Releasing (maintainers)

Releases publish to **VS Code Marketplace** and **Open VSX** via GitHub Actions:

1. Trigger the **Release** workflow in the Actions tab and pick a version bump (`prerelease`, `patch`, `minor`, `major`) or pass an explicit semver (`5.0.0-rc.2`).
2. The workflow runs lint + tsc, packages with `vsce package`, publishes with `vsce publish` and `ovsx publish` (auto-detects `--pre-release` for `-rc`/`-beta` versions), pushes the tag, and creates a GitHub Release with the `.vsix` attached.
3. Required repo secrets: `VSCE_PAT` (Azure DevOps PAT scoped to the `r5n` Marketplace publisher), `OVSX_PAT` (Open VSX namespace token).

## License

[MIT](./LICENSE)
