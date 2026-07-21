import { Snippet } from '../snippetTypes';

import { replaceOrRemoveReactImport } from './replaceOrRemoveReactImport';

export const parseSnippetToBody = (
  snippet: Snippet,
  importReactOnTop: boolean,
): string[] => {
  if (importReactOnTop || snippet.key === 'importReact') {
    return [...snippet.body];
  }

  return replaceOrRemoveReactImport(snippet.body);
};

export default parseSnippetToBody;
