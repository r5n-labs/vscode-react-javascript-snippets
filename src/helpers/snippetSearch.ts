import { readFileSync } from 'fs';
import { SnippetString, window } from 'vscode';

import { parseSnippet } from './formatters';
import { Snippet } from './generateSnippets';

const snippetSearch = async () => {
  const { showQuickPick, activeTextEditor } = window;

  const snippets = readFileSync(
    __dirname + '/../snippets/generated.json',
    'utf8',
  );

  const snippetsArray = Object.entries(JSON.parse(snippets)) as [
    string,
    Snippet,
  ][];

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
    activeTextEditor.insertSnippet(new SnippetString(body));
  }
};

export default snippetSearch;
