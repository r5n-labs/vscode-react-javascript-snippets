import extensionConfig from './extensionConfig';
import { formatSnippet } from './formatters';
import { Snippet } from './generateSnippets';
import replaceOrRemoveReactImport from './replaceOrRemoveReactImport';

// This is array of prefixes which are currently skipped because of syntax format issues
const skippedSnippets = [
  'pge',
  'pse',
  'gdsfp',
  'gsbu',
  'scu',
  'cwun',
  'cdm',
  'cdup',
  'rconst',
];

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

  const formattedSnippet = skippedSnippets.includes(snippet.prefix)
    ? snippetBody
    : formatSnippet(snippetBody).split('\n');

  return snippet.body.length === 1 ? formattedSnippet[0] : formattedSnippet;
};

export default parseSnippetToBody;
