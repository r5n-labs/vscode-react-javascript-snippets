# Change Log

All notable changes to the **ES7+ React/Redux/React-Native snippets** extension are documented here. This project adheres to [Semantic Versioning](https://semver.org/) and [Keep a Changelog](https://keepachangelog.com/) conventions.

## [Unreleased]

## [5.0.0] - 2026-04-28

First release under the **r5n** publisher (`r5n.es-js-snippets`) with full React 17–19 support and a new tooling stack.

### Added

- React 17–19 component snippets (no implicit `import React` for projects on the new JSX transform).
- React Router v6 imports/snippets aligned with the current API.
- Redux Toolkit (`@reduxjs/toolkit`) snippets, including RTK Query API slice scaffolds.
- Search command keybinding documented up front (`Ctrl+Alt+R` / `⇧⌘R`).
- New `package`, `publish:vsce`, `publish:ovsx` npm scripts.
- `@vscode/vsce` and `ovsx` added as `devDependencies` for reproducible packaging.
- GitHub Actions release workflow with `workflow_dispatch` and tag-push triggers, publishing to **VS Code Marketplace** and **Open VSX**.
- Automatic GitHub Release creation with attached `.vsix` artifact.
- Prerelease handling (`-rc`, `-beta`, etc.) flips `--pre-release` flag automatically.
- `bugs` and `homepage` fields in `package.json`.

### Changed

- **Publisher migrated** to `r5n`. The `es7-react-js-snippets` listing remains as a deprecated redirect; new installs should use `r5n.es-js-snippets`.
- Repository URL corrected to `https://github.com/r5n/vscode-react-javascript-snippets`.
- Toolchain migrated from **yarn → bun** for installs, scripts, and CI.
- CI workflow rewritten on `oven-sh/setup-bun@v2` + `actions/checkout@v4`; deprecated `actions/cache@v2` and Node 16 are gone.
- **Linter and formatter migrated to oxc**: replaced ESLint + `@typescript-eslint/*` + Prettier with [`oxlint`](https://oxc.rs/docs/guide/usage/linter) and [`oxfmt`](https://oxc.rs/docs/guide/usage/formatter). Lint runs in milliseconds; format remains Prettier-compatible.
- TypeScript bumped to 5.7.
- Snippet generation no longer mutates the snippet source on settings reload (fixes stale snippets after switching `importReactOnTop`/`typescript`).
- `languageScopes` setting is now validated; invalid scopes are dropped instead of silently breaking activation.
- README rewritten with current configuration table, dev workflow on bun, and r5n maintenance notice.

### Fixed

- `tsrafce` now exports the component (regression from v4).
- `useStateSnippet` works correctly when invoked through snippet search.
- `activationEvents` casing aligned with VS Code's expectations.

### Removed

- ESLint, `@typescript-eslint/*`, Prettier, and all `eslint-plugin-*` devDependencies (replaced by oxlint + oxfmt).
- Babel/Jest ESLint plugins and `@babel/eslint-parser` (unused — repo has no test suite or `.js` source files).
- Legacy `@babel/cli`, `@babel/preset-typescript` devDependencies.

## [4.4.0] - 2020-12-18

- Enable extension after startup finish to respect and parse snippets on settings change.

## [4.3.0] - 2020-12-18

- BREAKING CHANGES:
  - From now on snippets have options for Language, React 17+ support, typescript and more.
  - Added experimental prettier support, for now it's kinda buggy and needs some work.
  - Refactored the codebase, moved snippets to ts files.

## [3.1.0] - 2020-12-18

- Add couple of snippets and React 17 components.

## [3.0.0] - 2020-09-11

- Enable extension on workspaces (i.e. GitHub codespaces).

## [2.8.0] - 2020-06-06

- Add few snippets for React-Native & Typescript.

## [2.7.0] - 2020-03-11

- Add few snippets for react-router.

## [2.6.0] - 2020-02-23

- Add `rnfs`.

## [2.5.0] - 2019-12-19

- Add `imrs` and `imrse` to imports for functional components. Removed `tsrafc`.

## [2.4.5] - 2019-12-19

- Change `cmmb` to be more compliant with jsdocs.

## [2.3.0] - 2019-05-21

- Use `\t` instead of hard space for indent.

## [2.2.2] - 2019-05-03

- Set `"extensionKind": "ui"` to support remote development.

## [2.2.0] - 2019-04-06

- Add `rnf` for React-Native functional component, use TS for extension.

## [2.1.0] - 2019-03-08

- Added hooks snippets.

## [2.0.0] - 2019-01-31

- Add search engine for snippets with `ES7 snippet search` command.

## [1.9.4] - 2018-12-21

- Remove unnecessary bracket.

## [1.9.3] - 2018-12-18

- Add `clo`, `ctm` and `cte` for easier debugging.

## [1.9.0] - 2018-11-03

- Add `rpce`, remove unnecessary setups for tests.

## [1.8.7] - 2018-10-16

- Add option for functional and anonymous functional components.

## [1.8.6] - 2018-08-26

- Fix `rfcp`, remove duplication on `rfep`, rename `rncstyle` to `rncs`.

## [1.8.4] - 2018-07-20

- Add `imrd`.

## [1.8.3] - 2018-06-16

- Use properly snippet variables, add `scrtest`.

## [1.8.2] - 2018-06-12

- Fix typo in `rcredux`.

## [1.8.1] - 2018-06-11

- Restore filename selection on components.

## [1.8.0] - 2018-06-11

- Use filename when creating component.

## [1.7.1] - 2018-06-08

- Add `impt` for PropTypes.

## [1.7.0] - 2018-06-01

- Add `cp`, `cs` destruct and react component test `sctest`.

## [1.6.0] - 2018-05-05

- Add support for `ts` and `tsx` extensions.

## [1.5.2] - 2018-04-30

- Add `bnd`.

## [1.5.1] - 2018-04-20

- Add `gdsfp`, `gsbu`, `rcontext`, `cref`, `fref` from React 16.3, deprecations for `cwup`, `cwm`, `cwr`.

## [1.4.0] - 2018-04-12

- Add `ptany`, add PureComponent and styles for React-Native.

## [1.3.3] - 2018-02-01

- Create `snrtest`, fix `sntest`, little change for `ptypes`.

## [1.3.2] - 2018-01-20

- Add `ptypes` for static propTypes snippet.

## [1.3.1] - 2018-01-15

- Add `rncredux` for ReactNative component with Redux.

## [1.3.0] - 2017-12-13

- GraphQL snippets for React Apollo.

## [1.2.0] - 2017-11-04

- Add some export snippets.

## [1.1.3] - 2017-10-07

- Add `sntest` for ReactNative components test.

## [1.1.2] - 2017-09-28

- Fix `rfc`/`rfcp` with export default.

## [1.1.1] - 2017-09-27

- Refactor to const arrow functions stateless components.

## [1.1.0] - 2017-08-28

- Add stateless components & comment block.

## [1.0.0] - 2017-08-23

- Refactor snippets, add hoc components.

## [0.5.5] - 2017-08-21

- Add redux selector.

## [0.5.4] - 2017-08-20

- Improve README readability.

## [0.5.3] - 2017-08-15

- Add basic spec setup with global setup pattern.

## [0.5.2] - 2017-07-17

- Add redux action, constant, reducer.

## [0.5.0] - 2017-07-10

- Add components for React Native.

## [0.4.2] - 2017-06-30

- Add specific imports for React and redux.

## [0.4.1] - 2017-06-23

- Add additional React Components with export propTypes and React PureComponents.

## [0.4.0] - 2017-06-20

- Add additional React Component with export at the end. Change `tdesc` into `desc`.

## [0.3.3] - 2017-06-15

- Add visual version, installs and rating.

## [0.3.2] - 2017-06-13

- Update README, add proper keywords.

## [0.3.0] - 2017-06-12

- Add logo.

## [0.2.2] - 2017-06-12

- Add test snippets, update description.

## [0.1.3] - 2017-06-10

- Specify React Components snippets, improve mapping `componentNames` and add static prop.

## [0.1.2] - 2017-06-08

- Update README with basic knowledge of snippets.

## [0.1.0] - 2017-06-07

- Console snippets.
- React components snippets.
- Import and functions snippets.
- PropTypes snippets.
