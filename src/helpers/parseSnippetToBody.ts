import { Snippet } from '../snippetTypes';

import extensionConfig from './extensionConfig';
import replaceOrRemoveReactImport from './replaceOrRemoveReactImport';

const parseSnippetToBody = (snippet: Snippet) => {
  const { importReactOnTop } = extensionConfig();
  const body =
    typeof snippet.body === 'string' ? snippet.body : snippet.body.join('\n');

  const snippetBody = importReactOnTop
    ? body
    : replaceOrRemoveReactImport(snippet.body);

  return snippetBody.split('\n');
};

export default parseSnippetToBody;
