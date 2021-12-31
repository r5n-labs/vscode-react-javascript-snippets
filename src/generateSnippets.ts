import { writeFileSync } from 'fs';
import { workspace } from 'vscode';

import { ExtensionSettings, replaceSnippetPlaceholders } from './helpers';
import componentsSnippets, {
  ComponentsSnippet,
} from './sourceSnippets/components';
import consoleSnippets, { ConsoleSnippet } from './sourceSnippets/console';
import hooksSnippets, { HooksSnippet } from './sourceSnippets/hooks';
import importsSnippets, { ImportsSnippet } from './sourceSnippets/imports';
import propTypesSnippets, {
  PropTypesSnippet,
} from './sourceSnippets/propTypes';
import reactNativeSnippets, {
  ReactNativeSnippet,
} from './sourceSnippets/reactNative';
import reduxSnippets, { ReduxSnippet } from './sourceSnippets/redux';
import testsSnippets, { TestsSnippet } from './sourceSnippets/tests';
import typescriptSnippets, {
  TypescriptSnippet,
} from './sourceSnippets/typescript';

export type SnippetKeys =
  | HooksSnippet['key']
  | ImportsSnippet['key']
  | ReactNativeSnippet['key']
  | TypescriptSnippet['key']
  | ReduxSnippet['key']
  | ComponentsSnippet['key']
  | ConsoleSnippet['key']
  | PropTypesSnippet['key']
  | TestsSnippet['key'];

export type Snippet =
  | HooksSnippet
  | ImportsSnippet
  | ReactNativeSnippet
  | TypescriptSnippet
  | ReduxSnippet
  | ComponentsSnippet
  | ConsoleSnippet
  | PropTypesSnippet
  | TestsSnippet;

export type Snippets = {
  [key in SnippetKeys]: Snippet;
};

let snippetsCache: string | null = null;

const getSnippets = () => {
  if (snippetsCache) {
    return snippetsCache;
  }

  const config = workspace.getConfiguration(
    'esReactSnippets',
  ) as unknown as ExtensionSettings;

  const snippets: Snippets = [
    ...componentsSnippets,
    ...consoleSnippets,
    ...hooksSnippets,
    ...importsSnippets,
    ...propTypesSnippets,
    ...reactNativeSnippets,
    ...reduxSnippets,
    ...testsSnippets,
    ...(config.typescript ? typescriptSnippets : []),
  ].reduce((acc, snippet) => {
    acc[snippet.key] = snippet;
    return acc;
  }, {} as Snippets);

  const jsonSnippets = replaceSnippetPlaceholders(
    JSON.stringify(snippets, null, 2),
    config,
  );

  snippetsCache = jsonSnippets;
  return jsonSnippets;
};

const generateSnippets = () =>
  new Promise((resolve) => {
    console.time('generate');
    const jsonSnippets = getSnippets();
    console.timeEnd('generate');

    writeFileSync(__dirname + '/snippets/generated.json', jsonSnippets);
    return resolve(true);
  });

export default generateSnippets;
