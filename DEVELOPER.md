# Developer Guide

This guide covers the local development setup, codebase structure, build and test scripts, and debugging workflow for **ES JS Snippets** (`r5n.es-js-snippets`).

## Prerequisites

- **[Bun](https://bun.sh/) >= 1.3** — package manager, script runner, bundler/launcher, and test runner (CI uses `oven-sh/setup-bun@v2`; the release workflow uses `1.3.14`).
- **[VS Code](https://code.visualstudio.com/) >= 1.118.0** — required by `engines.vscode` in [package.json](./package.json) and used to run the Extension Development Host.
- **Git** — for version control and contributing via pull requests.

### Recommended VS Code Extensions

The workspace recommends installing the [Oxc VS Code extension](https://marketplace.visualstudio.com/items?itemName=oxc.oxc-vscode) (`oxc.oxc-vscode` in [.vscode/extensions.json](./.vscode/extensions.json)). Workspace settings in [.vscode/settings.json](./.vscode/settings.json) disable built-in JavaScript/TypeScript formatters and enable `oxc.oxc-vscode` as the default formatter with `source.fixAll.oxc` on save.

## Installation

1. Clone the repository (or your fork):

   ```shell
   git clone https://github.com/r5n-labs/vscode-react-javascript-snippets.git
   cd vscode-react-javascript-snippets
   ```

2. Install dependencies using the tracked lockfile:

   ```shell
   bun install --frozen-lockfile
   ```

3. Build the extension output into `./lib`:

   ```shell
   bun run compile
   ```

## Project Structure

```text
.
├── .github/workflows/
│   ├── release.yml                  # Manual release workflow (VS Code Marketplace & Open VSX)
│   └── typescript_and_lint.yml      # CI workflow run on push and PRs to develop
├── .vscode/
│   ├── extensions.json              # Recommended editor extensions
│   ├── launch.json                  # Extension Development Host debug configuration
│   ├── settings.json                # Editor formatter & TypeScript SDK settings
│   └── tasks.json                   # Background TypeScript/build watch task
├── docs/
│   └── Snippets.md                  # User-facing snippet reference (checked by tests)
├── images/
│   └── logo.png                     # Extension Marketplace icon
├── scripts/
│   ├── build.ts                     # Cleans lib/, copies snippets artifact, runs tsc
│   └── generateSnippets.ts          # Generates or checks src/snippets/generated.code-snippets
├── src/
│   ├── helpers/
│   │   ├── buildSnippets.ts         # Compiles source snippets & validates scopes/keys/prefixes
│   │   ├── extensionConfig.ts       # Reads reactSnippets.settings.* from VS Code config
│   │   ├── formatters.ts            # Formats snippet body arrays for insertion
│   │   ├── generateSnippets.ts      # Builds & persists generated snippets at runtime
│   │   ├── parseSnippetToBody.ts    # Applies importReactOnTop rules to snippet bodies
│   │   ├── persistGeneratedSnippets.ts # Atomic, serialized file persistence
│   │   ├── replaceOrRemoveReactImport.ts # Strips/adjusts default React imports
│   │   ├── safeGenerationFailure.ts # Formats user-facing generation error messages
│   │   ├── snippetPlaceholders.ts   # Expands placeholder tokens from user settings
│   │   └── snippetSearch.ts         # Implements the reactSnippets.search command
│   ├── snippets/
│   │   └── generated.code-snippets  # Tracked default compiled snippet catalog
│   ├── sourceSnippets/              # Source snippet definitions by category
│   │   ├── components.ts
│   │   ├── console.ts
│   │   ├── hooks.ts
│   │   ├── imports.ts
│   │   ├── others.ts
│   │   ├── propTypes.ts
│   │   ├── reactNative.ts
│   │   ├── redux.ts
│   │   ├── sharedSnippets.ts
│   │   ├── tests.ts
│   │   └── typescript.ts
│   ├── index.ts                     # Extension entry point (activate / deactivate)
│   ├── snippetTypes.ts              # Snippet types, catalog parser, and scope matcher
│   └── types.ts                     # Settings schema, defaults, placeholders, and mappings
├── tests/
│   └── generation.test.ts           # Bun test suite for compiler, settings, and docs parity
├── .oxfmtrc.json                    # oxfmt formatting rules
├── .oxlintrc.json                   # oxlint lint rules
├── package.json                     # Extension manifest, settings schema, and scripts
└── tsconfig.json                    # TypeScript compiler configuration
```

## Scripts and Commands

All scripts are defined in [package.json](./package.json) and match the checks executed in [CI](./.github/workflows/typescript_and_lint.yml):

| Command                         | Description                                                                    |
| ------------------------------- | ------------------------------------------------------------------------------ |
| `bun install --frozen-lockfile` | Install exact dependency versions from `bun.lock`                              |
| `bun run audit`                 | Run `bun audit --audit-level=high` for high-severity advisories                |
| `bun run lint`                  | Run `oxlint .` and `oxfmt --check .`                                           |
| `bun run lint:fix`              | Auto-fix lint issues (`oxlint --fix .`) and format files (`oxfmt .`)           |
| `bun run typescript`            | Type-check `src/` with `tsc --noEmit`                                          |
| `bun test`                      | Run the Bun test suite in `tests/generation.test.ts`                           |
| `bun run generate`              | Regenerate `src/snippets/generated.code-snippets` from `src/sourceSnippets/`   |
| `bun run generate:check`        | Verify `src/snippets/generated.code-snippets` is not stale                     |
| `bun run compile`               | Clean `lib/`, copy `generated.code-snippets`, and compile TypeScript to `lib/` |
| `bun run compile:dev`           | Alias for `bun run compile`                                                    |
| `bun run watch`                 | Run `scripts/build.ts --watch` for continuous rebuilds                         |
| `bun run package`               | Package a `.vsix` file via `vsce package --no-dependencies`                    |
| `bun run vscode:prepublish`     | Run `generate:check` and `compile` before publishing                           |

### Modifying Snippets

If you add, remove, or change snippet definitions under `src/sourceSnippets/`:

1. Regenerate the tracked default catalog:

   ```shell
   bun run generate
   ```

2. Update [docs/Snippets.md](./docs/Snippets.md) so the documented prefixes match the generated catalog. The test suite in [tests/generation.test.ts](./tests/generation.test.ts) verifies exact prefix parity between `src/snippets/generated.code-snippets` and `docs/Snippets.md`, as well as alignment between `package.json` configuration defaults and `DEFAULT_GENERATION_SETTINGS` in `src/types.ts`.

3. Verify everything passes:

   ```shell
   bun run lint && bun run typescript && bun test && bun run generate:check
   ```

## Debugging in VS Code

1. Open the repository root in VS Code.
2. Run `bun install --frozen-lockfile` if dependencies are not installed yet.
3. Press `F5` (or open **Run and Debug** and launch **Run Extension**).
   - Configured in [.vscode/launch.json](./.vscode/launch.json), this runs the default `watch` build task ([.vscode/tasks.json](./.vscode/tasks.json)) and opens an **Extension Development Host** window with `--extensionDevelopmentPath=${workspaceFolder}` and source maps loaded from `lib/**/*.js`.
4. Open a `.js`, `.jsx`, `.ts`, or `.tsx` file in the Extension Development Host to test inline snippet completions or trigger **Snippet search** (`⇧⌘R` on macOS, `Ctrl+Alt+R` on Windows/Linux).
5. When testing `reactSnippets.settings.*` changes, note that generation-backed settings are **application-scoped** in `package.json` and update `lib/snippets/generated.code-snippets` on activation or configuration change, prompting you to reload the VS Code window.

## Environment Variables

No environment variables are required to install dependencies, build, lint, test, or debug the extension locally.

Maintainer publishing workflows in [.github/workflows/release.yml](./.github/workflows/release.yml) use GitHub Actions secrets (`GITHUB_TOKEN`, `VSCE_PAT` for VS Code Marketplace, and `OVSX_PAT` for Open VSX), which are only needed for automated releases.
