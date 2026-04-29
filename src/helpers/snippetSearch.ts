import { readFile } from 'fs/promises';
import path from 'path';
import { commands, SnippetString, window } from 'vscode';

import type { Snippet } from '../snippetTypes';

import { parseSnippet } from './formatters';

const snippetSearch = async () => {
  const { showQuickPick, activeTextEditor } = window;

  let snippetsArray: [string, Snippet][];
  try {
    const snippets = await readFile(
      path.join(__dirname, '..', 'snippets', 'generated.json'),
      'utf8',
    );
    snippetsArray = Object.entries(JSON.parse(snippets)) as [string, Snippet][];
  } catch {
    window.showErrorMessage(
      'React Snippets: Failed to load snippets. Try regenerating via settings change.',
    );
    return;
  }

  const items = snippetsArray.map(
    ([shortDescription, { body, description, prefix: label }]) => ({
      body,
      description: description || shortDescription,
      label,
    }),
  );

  const rawSnippet = await showQuickPick(items, {
    matchOnDescription: true,
    matchOnDetail: true,
    placeHolder: 'Search snippet by prefix or description',
  });

  const body = rawSnippet ? parseSnippet(rawSnippet.body) : '';

  if (activeTextEditor) {
    await activeTextEditor.insertSnippet(new SnippetString(body));
    await commands.executeCommand('editor.action.formatDocument');
  }
};

export default snippetSearch;
