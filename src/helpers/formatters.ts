export const parseSnippet = (body: string | string[]): string => {
  return typeof body === 'string' ? body : body.join('\n');
};
