import { writeFile } from 'fs';

import {
  extensionConfig,
  formatSnippet,
  replaceSnippetPlaceholders,
} from './helpers';
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
  const { typescript, languageScopes } = extensionConfig();

  const snippets = [
    ...(typescript ? typescriptSnippets : []),
    ...componentsSnippets,
    ...consoleSnippets,
    ...hooksSnippets,
    ...importsSnippets,
    ...propTypesSnippets,
    ...reactNativeSnippets,
    ...reduxSnippets,
    ...testsSnippets,
  ].reduce((acc, snippet) => {
    const snippetBody =
      typeof snippet.body === 'string' ? snippet.body : snippet.body.join('\n');
    acc[snippet.key] = Object.assign(snippet, {
      scope: languageScopes,
      body: formatSnippet(snippetBody).split('\n'),
    });
    return acc;
  }, {} as Snippets);

  return replaceSnippetPlaceholders(JSON.stringify(snippets, null, 2));
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
