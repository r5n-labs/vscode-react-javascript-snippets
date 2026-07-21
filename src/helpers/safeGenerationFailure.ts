import { LanguageScopesError, SnippetCompilationError } from './buildSnippets';

const nodeErrorCode = (error: unknown): string | undefined => {
  if (typeof error !== 'object' || error === null || !('code' in error)) {
    return undefined;
  }

  const { code } = error;
  return typeof code === 'string' && /^[A-Z0-9_]+$/.test(code)
    ? code
    : undefined;
};

export const safeGenerationFailure = (error: unknown): string => {
  if (error instanceof LanguageScopesError) {
    return 'The languageScopes setting contains no supported language identifiers.';
  }
  if (error instanceof SnippetCompilationError) {
    return 'The snippet catalog contains conflicting definitions.';
  }

  const code = nodeErrorCode(error);
  return code
    ? `The generated artifact could not be updated (${code}).`
    : 'The generated artifact could not be updated because of an unexpected error.';
};
