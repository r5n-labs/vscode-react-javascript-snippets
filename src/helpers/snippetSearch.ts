import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { SnippetString, window } from 'vscode';

import {
  isGeneratedSnippetAvailableForLanguage,
  parseGeneratedSnippetCatalog,
  type GeneratedSnippet,
} from '../snippetTypes';

import { parseSnippet } from './formatters';

type GeneratedSnippetEntry = [string, GeneratedSnippet];

const snippetSearch = async (): Promise<void> => {
  const initiatingEditor = window.activeTextEditor;
  if (!initiatingEditor) return;
  const languageId = initiatingEditor.document.languageId;

  let snippetsArray: GeneratedSnippetEntry[];
  try {
    const content = await readFile(
      path.join(__dirname, '..', 'snippets', 'generated.code-snippets'),
      'utf8',
    );
    const snippets = parseGeneratedSnippetCatalog(JSON.parse(content));
    snippetsArray = Object.entries(snippets) as GeneratedSnippetEntry[];
  } catch {
    await window.showErrorMessage(
      'React Snippets: Generated snippets could not be loaded for search. Reload VS Code or change a reactSnippets setting to regenerate them.',
    );
    return;
  }

  const items = snippetsArray
    .filter(([, snippet]) =>
      isGeneratedSnippetAvailableForLanguage(snippet, languageId),
    )
    .map(([shortDescription, { body, description, prefix: label }]) => ({
      body,
      description: description || shortDescription,
      label,
    }));

  const rawSnippet = await window.showQuickPick(items, {
    matchOnDescription: true,
    matchOnDetail: true,
    placeHolder: 'Search snippet by prefix or description',
  });
  if (!rawSnippet) return;
  if (window.activeTextEditor !== initiatingEditor) return;

  await initiatingEditor.insertSnippet(
    new SnippetString(parseSnippet(rawSnippet.body)),
  );
};

export default snippetSearch;
