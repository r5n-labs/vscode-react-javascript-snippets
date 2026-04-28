import { Placeholders, SnippetMapping } from '../types';

type ConsoleMapping = {
  consoleAssert: 'cas';
  consoleClear: 'ccl';
  consoleCount: 'cco';
  consoleDir: 'cdi';
  consoleError: 'cer';
  consoleGroup: 'cgr';
  consoleGroupEnd: 'cge';
  consoleLog: 'clg';
  consoleTrace: 'ctr';
  consoleLogObject: 'clo';
  consoleLogJson: 'clj';
  consoleTime: 'ctm';
  consoleTimeEnd: 'cte';
  consoleWarn: 'cwa';
  consoleInfo: 'cin';
  consoleTable: 'ctl';
};

export type ConsoleSnippet = SnippetMapping<ConsoleMapping>;

const consoleAssert: ConsoleSnippet = {
  key: 'consoleAssert',
  prefix: 'cas',
  body: [`console.assert(${Placeholders.FirstTab}, ${Placeholders.SecondTab})`],
  description:
    'If the specified expression is false, the message is written to the console along with a stack trace',
};

const consoleClear: ConsoleSnippet = {
  key: 'consoleClear',
  prefix: 'ccl',
  body: ['console.clear()'],
  description: 'Clears the console',
};

const consoleCount: ConsoleSnippet = {
  key: 'consoleCount',
  prefix: 'cco',
  body: [`console.count(${Placeholders.FirstTab})`],
  description:
    'Writes the the number of times that count() has been invoked at the same line and with the same label',
};

const consoleDir: ConsoleSnippet = {
  key: 'consoleDir',
  prefix: 'cdi',
  body: [`console.dir(${Placeholders.FirstTab})`],
  description: 'Prints a JavaScript representation of the specified object',
};

const consoleError: ConsoleSnippet = {
  key: 'consoleError',
  prefix: 'cer',
  body: [`console.error(${Placeholders.FirstTab})`],
  description:
    'Displays a message in the console and also includes a stack trace from where the method was called',
};

const consoleGroup: ConsoleSnippet = {
  key: 'consoleGroup',
  prefix: 'cgr',
  body: [`console.group('${Placeholders.FirstTab}')`],
  description:
    'Groups and indents all following output by an additional level, until console.groupEnd() is called.',
};

const consoleGroupEnd: ConsoleSnippet = {
  key: 'consoleGroupEnd',
  prefix: 'cge',
  body: ['console.groupEnd()'],
  description: 'Closes out the corresponding console.group().',
};

const consoleLog: ConsoleSnippet = {
  key: 'consoleLog',
  prefix: 'clg',
  body: [`console.log(${Placeholders.FirstTab})`],
  description: 'Displays a message in the console',
};

const consoleTrace: ConsoleSnippet = {
  key: 'consoleTrace',
  prefix: 'ctr',
  body: [`console.trace(${Placeholders.FirstTab})`],
  description:
    'Prints a stack trace from the point where the method was called',
};

const consoleLogObject: ConsoleSnippet = {
  key: 'consoleLogObject',
  prefix: 'clo',
  body: [`console.log('${Placeholders.FirstTab}', ${Placeholders.FirstTab})`],
  description: 'Logs property with name.',
};

const consoleLogJson: ConsoleSnippet = {
  key: 'consoleLogJson',
  prefix: 'clj',
  body: [
    `console.log('${Placeholders.FirstTab}', JSON.stringify(${Placeholders.FirstTab}, null, 2))`,
  ],
  description: 'Logs stringified JSON property with name.',
};

const consoleTime: ConsoleSnippet = {
  key: 'consoleTime',
  prefix: 'ctm',
  body: [`console.time('${Placeholders.FirstTab}')`],
  description: 'Console time wrapper',
};

const consoleTimeEnd: ConsoleSnippet = {
  key: 'consoleTimeEnd',
  prefix: 'cte',
  body: [`console.timeEnd('${Placeholders.FirstTab}')`],
  description: 'Console time end wrapper',
};

const consoleWarn: ConsoleSnippet = {
  key: 'consoleWarn',
  prefix: 'cwa',
  body: [`console.warn(${Placeholders.FirstTab})`],
  description:
    'Displays a message in the console but also displays a yellow warning icon along with the logged message',
};

const consoleInfo: ConsoleSnippet = {
  key: 'consoleInfo',
  prefix: 'cin',
  body: [`console.info(${Placeholders.FirstTab})`],
  description:
    'Displays a message in the console but also displays a blue information icon along with the logged message',
};

const consoleTable: ConsoleSnippet = {
  key: 'consoleTable',
  prefix: 'ctl',
  body: [`console.table([${Placeholders.FirstTab}])`],
  description: 'Logs table to console',
};

export default [
  consoleAssert,
  consoleClear,
  consoleCount,
  consoleDir,
  consoleError,
  consoleGroup,
  consoleGroupEnd,
  consoleLog,
  consoleTrace,
  consoleLogObject,
  consoleLogJson,
  consoleTime,
  consoleTimeEnd,
  consoleWarn,
  consoleInfo,
  consoleTable,
];
