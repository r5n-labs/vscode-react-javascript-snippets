import extensionConfig from './extensionConfig';
import { formatSnippet } from './formatters';
import { Snippet } from './generateSnippets';
import replaceOrRemoveReactImport from './replaceOrRemoveReactImport';
import replaceDivToFragment from './replaceDivToFragment';


const parseSnippetToBody = (snippet: Snippet) => {
  const { importReactOnTop, divToFragment } = extensionConfig();
  let tmpBody = snippet.body;

  // Enable set old behavior
  if(!importReactOnTop) {
    tmpBody = replaceOrRemoveReactImport({
      prefix: snippet.prefix,
      body: snippet.body,
    });
  }

  // Enable replace div to <>
  if(divToFragment) {
    tmpBody = replaceDivToFragment({
      prefix: snippet.prefix, 
      body: tmpBody
    });
  }
  
  const snippetBody = tmpBody.join('\n');
    
  const formattedSnippet = formatSnippet(snippetBody).split('\n');

  return formattedSnippet;
};

export default parseSnippetToBody;
