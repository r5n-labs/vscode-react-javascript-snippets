import { Snippet } from './generateSnippets';

const snippetWithDiv = [
  'rfce',
  'rfcp',
  'rfcreduxp',
  'rfcredux',
  'rfc',
  'rmcp',
  'rpcp',
  'rpc', 
  'rpce',
  'rcep',
  'rce',
  'rcreduxp',
  'rcredux',
  'rccp',
  'rcc',
  'rafce',
  'rafcp',
  'rafc', 
  'tsrcredux',
  'tsrpce',
  'tsrpc',
  'tsrafc',  
  'tsrafce',
  'tsrfc',
  'tsrcc',
  'tsrfce',
  'tsrce',
];

const replaceDivToFragment = ({
  body,
  prefix,
}: {
  body: string[];
  prefix: Snippet['prefix'];
}) => {
  if (!snippetWithDiv.includes(prefix)) {
    return body;
  }

  let bodyCopy = [...body];
  const divIndex = bodyCopy.findIndex((line) =>
    line.match(new RegExp(/<\/?div>/, 'g')),
  );

  if (divIndex === -1) {
    return body;
  }

  const line = bodyCopy[divIndex];
  const newLine = line.replace(new RegExp(/div/, 'g'), '');
  bodyCopy[divIndex] = newLine;

  return bodyCopy;
};

export default replaceDivToFragment;
