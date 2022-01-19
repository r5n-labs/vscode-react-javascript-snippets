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
import othersSnippets, { OthersSnippet } from './sourceSnippets/others';
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
  | OthersSnippet['key']
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
  | OthersSnippet
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

// This is array of prefixes which are currently skipped because of syntax format issues
const skippedSnippets = [
  'pge',
  'pse',
  'gdsfp',
  'gsbu',
  'scu',
  'cwun',
  'cdm',
  'cdup',
  'rconst',
];

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
    ...othersSnippets,
  ].reduce((acc, snippet) => {
    const snippetBody =
      typeof snippet.body === 'string' ? snippet.body : snippet.body.join('\n');
    const formattedSnippet = skippedSnippets.includes(snippet.prefix)
      ? snippetBody
      : formatSnippet(snippetBody).split('\n');

    const body =
      snippet.body.length === 1 ? formattedSnippet[0] : formattedSnippet;

    acc[snippet.key] = Object.assign(snippet, { body, scope: languageScopes });
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
