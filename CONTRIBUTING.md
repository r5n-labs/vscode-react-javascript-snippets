# Contributing to ES JS Snippets

Thank you for your interest in contributing to **ES JS Snippets** (`r5n-labs/vscode-react-javascript-snippets`). This document explains how to propose changes, run checks, and submit pull requests.

Please also review our [Code of Conduct](./CODE_OF_CONDUCT.md) and [Developer Guide](./DEVELOPER.md) before getting started.

## Getting Started

### 1. Fork and Clone

1. Fork the [r5n-labs/vscode-react-javascript-snippets](https://github.com/r5n-labs/vscode-react-javascript-snippets) repository to your GitHub account.
2. Clone your fork locally and configure the upstream remote:

   ```shell
   git clone https://github.com/<your-username>/vscode-react-javascript-snippets.git
   cd vscode-react-javascript-snippets
   git remote add upstream https://github.com/r5n-labs/vscode-react-javascript-snippets.git
   ```

3. Keep your local `develop` branch synced with `upstream/develop`:

   ```shell
   git checkout develop
   git pull upstream develop
   ```

### 2. Install Dependencies

Ensure **Bun >= 1.3** and **VS Code >= 1.118.0** are installed, then install dependencies using the lockfile:

```shell
bun install --frozen-lockfile
```

See [DEVELOPER.md](./DEVELOPER.md) for the full project layout, scripts, and Extension Development Host debugging instructions.

## Branch Naming

Always create feature or fix branches from an up-to-date `develop` branch (`develop` is the default target branch for pull requests). Use short, descriptive kebab-case names with a clear prefix:

- `feat/<short-description>` — new snippets, settings, or extension features
- `fix/<short-description>` — bug fixes or snippet output corrections
- `docs/<short-description>` — documentation updates (for example, `docs/issue-359-contributor-guides`)
- `chore/<short-description>` — dependency updates, tooling, or maintenance
- `refactor/<short-description>` — internal code improvements without behavior changes
- `test/<short-description>` — test additions or improvements

## Commit Message Style

Use concise, imperative [Conventional Commits](https://www.conventionalcommits.org/) messages matching the repository history:

- `feat: add useOptimistic hook snippet`
- `fix: resolve anonymous memo components in rmc and rmcp`
- `docs: add developer and contributor guides`
- `chore(deps): update development dependencies`

Keep commits focused on a single logical change.

## Formatting, Linting, and Testing

This repository enforces code quality with **oxlint** ([.oxlintrc.json](./.oxlintrc.json)), **oxfmt** ([.oxfmtrc.json](./.oxfmtrc.json)), TypeScript strict type-checking, and **Bun** tests.

- Style conventions in `.oxfmtrc.json`: 2-space indentation, single quotes, semicolons, trailing commas, LF line endings, and 80-character print width.
- Auto-fix lint and formatting issues:

  ```shell
  bun run lint:fix
  ```

Before committing and opening a pull request, run the full verification suite used by [CI](./.github/workflows/typescript_and_lint.yml):

```shell
bun run audit
bun run lint
bun run typescript
bun test
bun run generate:check
bun run compile
```

If you changed snippet definitions in `src/sourceSnippets/`, run `bun run generate` to update `src/snippets/generated.code-snippets` and update [docs/Snippets.md](./docs/Snippets.md) before running `bun run generate:check` and `bun test`.

## Pull Request Process

1. Push your branch to your GitHub fork:

   ```shell
   git push -u origin <your-branch-name>
   ```

2. Open a Pull Request targeting `r5n-labs/vscode-react-javascript-snippets` **`develop`** branch.
3. Fill in a clear summary covering:
   - What changed and why
   - Any related issue reference (for example, `Closes #123`)
   - Verification steps and test/lint results you ran locally
4. Ensure all CI checks in the **Typescript & lint** workflow pass (`bun install --frozen-lockfile`, `bun run audit`, `bun run lint`, `bun run typescript`, `bun test`, and `bun run generate:check`).
5. Keep your PR scoped to the task and avoid modifying unrelated files.

## Reporting Bugs

Before opening a new bug report, check existing [GitHub Issues](https://github.com/r5n-labs/vscode-react-javascript-snippets/issues) to see if the problem has already been reported.

When creating a bug report, please include:

- Extension version (`r5n.es-js-snippets`, and confirm any legacy `dsznajder.es7-react-js-snippets` install has been removed if duplicates occur)
- VS Code version and operating system
- Clear steps to reproduce the issue
- Expected behavior vs. actual behavior
- Any relevant `reactSnippets.settings.*` configuration values
- File language mode (for example, `javascriptreact` or `typescriptreact`) and minimal snippet/code context
