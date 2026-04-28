import {
  replaceSnippetPlaceholders,
  revertSnippetPlaceholders,
} from './snippetPlaceholders';

export const parseSnippet = (body: string | string[]) => {
  const snippetBody = typeof body === 'string' ? body : body.join('\n');

  return replaceSnippetPlaceholders(revertSnippetPlaceholders(snippetBody));
};
