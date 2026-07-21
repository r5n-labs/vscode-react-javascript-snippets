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

export type GeneratedSnippet = {
  prefix: string;
  body: string[];
  description?: string;
  scope: string;
};

export type GeneratedSnippets = Partial<Record<SnippetKeys, GeneratedSnippet>>;
export type GeneratedSnippetCatalog = Record<string, GeneratedSnippet>;

export class GeneratedSnippetCatalogError extends Error {
  readonly _tag = 'GeneratedSnippetCatalogError';

  constructor(readonly entry: string) {
    super(
      `Generated snippet catalog entry ${JSON.stringify(entry)} is invalid`,
    );
    this.name = 'GeneratedSnippetCatalogError';
  }
}

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const GENERATED_SNIPPET_FIELDS = new Set([
  'prefix',
  'body',
  'description',
  'scope',
]);

export const parseGeneratedSnippetCatalog = (
  input: unknown,
): GeneratedSnippetCatalog => {
  if (!isRecord(input)) throw new GeneratedSnippetCatalogError('<root>');

  const catalog: GeneratedSnippetCatalog = {};
  for (const [name, value] of Object.entries(input)) {
    if (!isRecord(value)) throw new GeneratedSnippetCatalogError(name);
    if (Object.keys(value).some((key) => !GENERATED_SNIPPET_FIELDS.has(key))) {
      throw new GeneratedSnippetCatalogError(name);
    }

    const { prefix, body, description, scope } = value;
    if (
      typeof prefix !== 'string' ||
      !Array.isArray(body) ||
      !body.every((line) => typeof line === 'string') ||
      typeof scope !== 'string' ||
      (description !== undefined && typeof description !== 'string')
    ) {
      throw new GeneratedSnippetCatalogError(name);
    }

    catalog[name] = {
      prefix,
      body,
      ...(description === undefined ? {} : { description }),
      scope,
    };
  }

  return catalog;
};

export const isGeneratedSnippetAvailableForLanguage = (
  snippet: Pick<GeneratedSnippet, 'scope'>,
  languageId: string,
): boolean =>
  snippet.scope.split(',').some((scope) => scope.trim() === languageId);
