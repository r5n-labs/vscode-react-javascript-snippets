import extensionConfig from './extensionConfig';
import { formatSnippet } from './formatters';
import { Snippet } from './generateSnippets';
import replaceOrRemoveReactImport from './replaceOrRemoveReactImport';

const parseSnippetToBody = (snippet: Snippet) => {
  const { importReactOnTop } = extensionConfig();
  const body =
    typeof snippet.body === 'string' ? snippet.body : snippet.body.join('\n');

  const snippetBody = importReactOnTop
    ? body
    : replaceOrRemoveReactImport({
        prefix: snippet.prefix,
        body: snippet.body,
      });

  const formattedSnippet = formatSnippet(snippetBody).split('\n');

  return formattedSnippet;
};

export default parseSnippetToBody;
