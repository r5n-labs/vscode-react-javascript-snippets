import extensionConfig from './extensionConfig';
import { formatSnippet } from './formatters';
import { Snippet } from './generateSnippets';
import replaceOrRemoveReactImport from './replaceOrRemoveReactImport';

const withReactImport = [
  'rfce',
  'rfc',
  'rfcp',
  'rafce',
  'rafc',
  'rafcp',
  'rnfe',
  'rnfes',
  'rnf',
  'rnfs',
  'stest',
  'sntest',
  'srtest',
  'snrtest',
  'hocredux',
  'hoc',
];

const parseSnippetToBody = (snippet: Snippet) => {
  const { importReactOnTop } = extensionConfig();
  const body =
    typeof snippet.body === 'string' ? snippet.body : snippet.body.join('\n');

  const snippetBody = importReactOnTop
    ? body
    : withReactImport.includes(snippet.prefix)
    ? replaceOrRemoveReactImport(snippet.body)
    : body;

  const formattedSnippet = formatSnippet(snippetBody).split('\n');

  return formattedSnippet;
};

export default parseSnippetToBody;
