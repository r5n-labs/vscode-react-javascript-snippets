import prettier from 'prettier';

import extensionConfig from './extensionConfig';
import getPrettierConfig from './getPrettierConfig';
import {
  replaceSnippetPlaceholders,
  revertSnippetPlaceholders,
} from './snippetPlaceholders';

export const formatSnippet = (snippetString: string) => {
  return extensionConfig().prettierEnabled
    ? prettier.format(snippetString, getPrettierConfig())
    : snippetString;
};

export const parseSnippet = (body: string | string[]) => {
  const snippetBody = typeof body === 'string' ? body : body.join('\n');

  return replaceSnippetPlaceholders(
    formatSnippet(revertSnippetPlaceholders(snippetBody)),
  );
};
