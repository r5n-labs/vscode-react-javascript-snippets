import { writeFile } from 'fs';
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

const getSnippets = () => {
  const config = workspace.getConfiguration(
    'reactSnippets',
  ) as unknown as ExtensionSettings;

  const snippets = [
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

  return replaceSnippetPlaceholders(JSON.stringify(snippets, null, 2), config);
};

export const generateSnippets = () =>
  new Promise((resolve) => {
    const jsonSnippets = getSnippets();
    writeFile(__dirname + '/snippets/generated.json', jsonSnippets, (error) => {
      if (error) {
        console.error(error);
      }
      return resolve(true);
    });
  });
