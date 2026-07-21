# VS Code ES7+ React/Redux/React-Native/JS snippets

Customizable JavaScript and React/Redux snippets for VS Code, with first-class support for ES7+ syntax, React 17–19, React Router v6, Redux Toolkit, and TypeScript.

[![Version](https://img.shields.io/visual-studio-marketplace/v/r5n.es-js-snippets?label=marketplace&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=r5n.es-js-snippets)
[![Installs](https://img.shields.io/visual-studio-marketplace/i/r5n.es-js-snippets)](https://marketplace.visualstudio.com/items?itemName=r5n.es-js-snippets)
[![Rating](https://img.shields.io/visual-studio-marketplace/r/r5n.es-js-snippets)](https://marketplace.visualstudio.com/items?itemName=r5n.es-js-snippets&ssr=false#review-details)
[![CI](https://github.com/r5n-labs/vscode-react-javascript-snippets/actions/workflows/typescript_and_lint.yml/badge.svg?branch=develop)](https://github.com/r5n-labs/vscode-react-javascript-snippets/actions/workflows/typescript_and_lint.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

> Maintained by **[r5n](https://github.com/r5n-labs)**. Continues the work of the original `vscode-es7-javascript-react-snippets` extension. The legacy `dsznajder.es7-react-js-snippets` listing is a separate installation and its formal Marketplace deprecation is still pending. Install `r5n.es-js-snippets` for new updates and uninstall the legacy extension to avoid duplicate commands and snippets.

## Install

Open VS Code Quick Open and paste:

```shell
ext install r5n.es-js-snippets
```

Quick Open shortcut: `Ctrl+P` (Linux/Windows) · `⌘P` (macOS).

Or install from the Marketplace: [r5n.es-js-snippets](https://marketplace.visualstudio.com/items?itemName=r5n.es-js-snippets). Open VSX availability will follow after the `r5n` namespace is verified.

## v5.0.1 release candidate

Version `5.0.1` is distributed through the Marketplace prerelease channel. Existing stable users stay on `5.0.0` unless they opt in.

1. Open **Extensions** and select **ES JS Snippets** (`r5n.es-js-snippets`).
2. Use the extension's menu to switch to the prerelease version.
3. Confirm that version `5.0.1` is installed, then report regressions through [GitHub Issues](https://github.com/r5n-labs/vscode-react-javascript-snippets/issues).

The stable follow-up will use version `5.0.2` because Marketplace versions cannot be reused between prerelease and stable channels.

## Migrate from the legacy extension

The Marketplace cannot automatically update between different extension IDs. To move from `dsznajder.es7-react-js-snippets`:

1. Install `r5n.es-js-snippets`.
2. Uninstall `dsznajder.es7-react-js-snippets` to prevent duplicate snippets and command keybindings.
3. Reload VS Code when prompted.

User-level `reactSnippets.settings.*` values use the same keys and carry over. Move any workspace-specific values to User settings because generation settings are now application-scoped. The experimental `reactSnippets.settings.prettierEnabled` option was removed; generated snippets no longer read project Prettier configuration.

## Snippet search

Search by description or prefix:

| Action          | Shortcut                                 |
| --------------- | ---------------------------------------- |
| Snippet search  | `⇧⌘R` (macOS) · `Ctrl+Alt+R` (Win/Linux) |
| Command palette | "Snippet search"                         |

The full list lives in [docs/Snippets.md](./docs/Snippets.md).

## What's new in v5

- React 17–19 support — components no longer add `import React` by default (toggle via `importReactOnTop`).
- React Router v6 imports, including v6.4+ data-router scaffolds.
- Redux Toolkit (`createSlice`, `createApi` / RTK Query) snippets.
- Performance: snippet generation no longer mutates source on settings reload, fixing stale snippets after toggling options.
- `languageScopes` is validated and honored by both completions and snippet search.

See [CHANGELOG.md](./CHANGELOG.md) for the full list.

## Configuration

Settings live under `reactSnippets.settings.*`. They are application-scoped because VS Code windows share one generated snippet artifact. Reload VS Code when prompted after a change.

|                      Setting | Type      | Default                                                 | Description                                                                                             |
| ---------------------------: | :-------- | :------------------------------------------------------ | :------------------------------------------------------------------------------------------------------ |
|           `importReactOnTop` | `boolean` | `false`                                                 | Add `import React from 'react'` to component snippets. Enable for projects on the legacy JSX transform. |
|                 `typescript` | `boolean` | `true`                                                  | Include TypeScript-specific `ts*`, `exptp`, and `expint` snippets.                                      |
|             `languageScopes` | `string`  | `typescript,typescriptreact,javascript,javascriptreact` | Comma-separated language scopes where snippets are active.                                              |
| `typescriptPropsStatePrefix` | `string`  | `type`                                                  | Use `type` or `interface` for Props/State in TypeScript snippets.                                       |

## Editor support

### VS Code · Cursor · VSCodium

Install from the VS Code Marketplace where supported. Open VSX availability for VSCodium and other compatible desktop clients will follow after namespace verification. Browser extension hosts are not currently supported.

### vim / neovim with [coc.nvim](https://github.com/neoclide/coc.nvim)

Add the plugin in your `init.vim`:

```vim
Plug 'r5n-labs/vscode-react-javascript-snippets', { 'do': 'bun install --frozen-lockfile && bun run compile' }
```

Reload (`:source %`) and run `:PlugInstall`.

### Packer (Lua)

```lua
use {
  'r5n-labs/vscode-react-javascript-snippets',
  run = 'bun install --frozen-lockfile && bun run compile'
}
```

Save (`:w`) to trigger the build.

## Contributing & development

Local stack: **bun ≥ 1.3** + **VS Code**.

```shell
git clone https://github.com/r5n-labs/vscode-react-javascript-snippets
cd vscode-react-javascript-snippets
bun install
bun run audit           # high-severity dependency audit
bun run typescript      # type-check
bun run lint            # oxlint + oxfmt checks
bun test                # generation and artifact contracts
bun run compile         # build to ./lib
```

Press `F5` in VS Code to launch the Extension Development Host with the local build attached.

Open a PR against `develop`. CI (`Typescript & lint`) runs on every push and pull request.

## Releasing (maintainers)

Releases publish to **VS Code Marketplace** and **Open VSX** via GitHub Actions:

1. Trigger the **Release** workflow in the Actions tab and pick `patch`, `minor`, `major`, or an explicit numeric version such as `5.0.1`. Marketplace extension versions must use `major.minor.patch` without `-rc` or `-beta` suffixes.
2. Enable the separate **prerelease** input to publish that numeric version to the prerelease channel. Each prerelease needs a unique, increasing numeric version.
3. The workflow verifies publisher authorization, audits, lints, tests, verifies generated snippets, packages one VSIX with a SHA-256 checksum, pushes the release commit and tag atomically, then publishes that exact artifact to the selected registries and creates the GitHub Release.
4. Keep `develop` frozen until publication and GitHub Release creation finish. To recover before another commit lands, start a **new workflow dispatch** with the same explicit version, prerelease value, and target. Do not use GitHub's **Re-run jobs** action. Existing registry versions are skipped while missing destinations are retried. If `develop` has advanced, preserve the existing tag and use the VSIX/checksum artifact from the original run to recover the missing destination manually.
5. `VSCE_PAT` is required for `vsce` or `both`; `OVSX_PAT` is required for `ovsx` or `both` after the Open VSX namespace is configured.

## License

[MIT](./LICENSE)
