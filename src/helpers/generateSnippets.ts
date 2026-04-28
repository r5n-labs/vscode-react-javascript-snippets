import path from 'path';
import { window } from 'vscode';

import componentsSnippets from '../sourceSnippets/components';
import consoleSnippets from '../sourceSnippets/console';
import hooksSnippets from '../sourceSnippets/hooks';
import importsSnippets from '../sourceSnippets/imports';
import othersSnippets from '../sourceSnippets/others';
import propTypesSnippets from '../sourceSnippets/propTypes';
import reactNativeSnippets from '../sourceSnippets/reactNative';
import reduxSnippets from '../sourceSnippets/redux';
import testsSnippets from '../sourceSnippets/tests';
import typescriptSnippets from '../sourceSnippets/typescript';
import { Snippets } from '../snippetTypes';
import { writeFile } from 'fs/promises';

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
  const requested = scopes
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
  const valid = requested.filter((s) => VALID_LANGUAGE_SCOPES.includes(s));
  const invalid = requested.filter((s) => !VALID_LANGUAGE_SCOPES.includes(s));

  if (invalid.length > 0) {
    window.showWarningMessage(
      `React Snippets: Invalid language scopes ignored: ${invalid.join(', ')}. Valid values: ${VALID_LANGUAGE_SCOPES.join(', ')}`,
    );
  }

  return valid.length > 0 ? valid.join(',') : VALID_LANGUAGE_SCOPES.join(',');
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
