import { writeFile } from 'fs/promises';
import path from 'path';

import componentsSnippets, {
  ComponentsSnippet,
} from '../sourceSnippets/components';
import consoleSnippets, { ConsoleSnippet } from '../sourceSnippets/console';
import hooksSnippets, { HooksSnippet } from '../sourceSnippets/hooks';
import importsSnippets, { ImportsSnippet } from '../sourceSnippets/imports';
import othersSnippets, { OthersSnippet } from '../sourceSnippets/others';
import propTypesSnippets, {
  PropTypesSnippet,
} from '../sourceSnippets/propTypes';
import reactNativeSnippets, {
  ReactNativeSnippet,
} from '../sourceSnippets/reactNative';
import reduxSnippets, { ReduxSnippet } from '../sourceSnippets/redux';
import testsSnippets, { TestsSnippet } from '../sourceSnippets/tests';
import typescriptSnippets, {
  TypescriptSnippet,
} from '../sourceSnippets/typescript';

import { window } from 'vscode';

import extensionConfig from './extensionConfig';
import parseSnippetToBody from './parseSnippetToBody';
import { replaceSnippetPlaceholders } from './snippetPlaceholders';

const VALID_LANGUAGE_SCOPES = [
  'typescript',
  'typescriptreact',
  'javascript',
  'javascriptreact',
];

const validateLanguageScopes = (scopes: string) => {
  const requested = scopes.split(',').map((s) => s.trim()).filter(Boolean);
  const valid = requested.filter((s) => VALID_LANGUAGE_SCOPES.includes(s));
  const invalid = requested.filter((s) => !VALID_LANGUAGE_SCOPES.includes(s));

  if (invalid.length > 0) {
    window.showWarningMessage(
      `React Snippets: Invalid language scopes ignored: ${invalid.join(', ')}. Valid values: ${VALID_LANGUAGE_SCOPES.join(', ')}`,
    );
  }

  return valid.length > 0 ? valid.join(',') : VALID_LANGUAGE_SCOPES.join(',');
};

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

const getSnippets = () => {
  const { typescript, languageScopes: rawScopes } = extensionConfig();
  const languageScopes = validateLanguageScopes(rawScopes);

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
    acc[snippet.key] = Object.assign({}, snippet, {
      body: parseSnippetToBody(snippet),
      scope: languageScopes,
    });
    return acc;
  }, {} as Snippets);

  return replaceSnippetPlaceholders(JSON.stringify(snippets, null, 2));
};

const generateSnippets = async () => {
  const jsonSnippets = getSnippets();
  await writeFile(
    path.join(__dirname, '..', 'snippets', 'generated.json'),
    jsonSnippets,
  );
};

export default generateSnippets;
