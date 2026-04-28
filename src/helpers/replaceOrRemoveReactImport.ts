import { Snippet } from './generateSnippets';

const snippetWithReactImportPrefixes = [
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
  'tsrafc',
  'tsrafce',
  'tsrcc',
  'tsrcredux',
  'tsrce',
  'tsrpce',
  'tsrpc',
  'tsrfc',
  'tsrfce',
  'tsrnf',
  'tsrnfs',
];

const replaceOrRemoveReactImport = ({
  body,
  prefix,
}: {
  body: string[];
  prefix: Snippet['prefix'];
}) => {
  if (!snippetWithReactImportPrefixes.includes(prefix)) {
    return body.join('\n');
  }

  let bodyCopy = [...body];
  const reactImportIndex = bodyCopy.findIndex((line) =>
    line.match(new RegExp(/import React/, 'g')),
  );

  if (reactImportIndex !== -1) {
    const line = bodyCopy[reactImportIndex];
    const newLine = line
      .replace(new RegExp(/^import React .*$/, 'g'), '')
      .replace(new RegExp(/^import React, /, 'g'), 'import ');

    bodyCopy[reactImportIndex] = newLine;
    if (!newLine.length) {
      bodyCopy = bodyCopy.filter(Boolean);
    }
  }

  return bodyCopy.join('\n');
};

export default replaceOrRemoveReactImport;
