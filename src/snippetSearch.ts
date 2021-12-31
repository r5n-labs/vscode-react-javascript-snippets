import { SnippetString, window } from 'vscode';

import { Snippet } from './generateSnippets';
import { parseSnippet } from './helpers';
import snippets from './snippets/generated.json';

const snippetSearch = async () => {
  const { showQuickPick, activeTextEditor } = window;

  const snippetsArray = Object.entries(snippets) as [string, Snippet][];

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

  const body = rawSnippet ? await parseSnippet(rawSnippet) : '';

  if (activeTextEditor) {
    activeTextEditor.insertSnippet(new SnippetString(body));
  }
};

export default snippetSearch;
