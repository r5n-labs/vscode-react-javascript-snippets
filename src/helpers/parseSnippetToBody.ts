import extensionConfig from './extensionConfig';
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

  return snippetBody.split('\n');
};

export default parseSnippetToBody;
