import { ComponentsSnippet } from './sourceSnippets/components';
import { ConsoleSnippet } from './sourceSnippets/console';
import { HooksSnippet } from './sourceSnippets/hooks';
import { ImportsSnippet } from './sourceSnippets/imports';
import { OthersSnippet } from './sourceSnippets/others';
import { PropTypesSnippet } from './sourceSnippets/propTypes';
import { ReactNativeSnippet } from './sourceSnippets/reactNative';
import { ReduxSnippet } from './sourceSnippets/redux';
import { TestsSnippet } from './sourceSnippets/tests';
import { TypescriptSnippet } from './sourceSnippets/typescript';

export type SnippetKeys =
  | OthersSnippet['key']
  | HooksSnippet['key']
  | ImportsSnippet['key']
  | ReactNativeSnippet['key']
  | TypescriptSnippet['key']
  | ReduxSnippet['key']
  | ComponentsSnippet['key']
  | ConsoleSnippet['key']
  | PropTypesSnippet['key']
  | TestsSnippet['key'];

export type Snippet =
  | OthersSnippet
  | HooksSnippet
  | ImportsSnippet
  | ReactNativeSnippet
  | TypescriptSnippet
  | ReduxSnippet
  | ComponentsSnippet
  | ConsoleSnippet
  | PropTypesSnippet
  | TestsSnippet;

export type Snippets = {
  [key in SnippetKeys]: Snippet;
};
