import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

import { buildSnippets } from '../src/helpers/buildSnippets';
import { persistGeneratedSnippets } from '../src/helpers/persistGeneratedSnippets';
import { DEFAULT_GENERATION_SETTINGS } from '../src/types';

const generatedSnippetsPath = fileURLToPath(
  new URL('../src/snippets/generated.code-snippets', import.meta.url),
);

const checkGeneratedSnippets = async (content: string): Promise<void> => {
  let existingContent: string;
  try {
    existingContent = await readFile(generatedSnippetsPath, 'utf8');
  } catch (error) {
    throw new Error(
      `Cannot check generated snippets at ${generatedSnippetsPath}: artifact could not be read`,
      { cause: error },
    );
  }

  if (existingContent !== content) {
    throw new Error(
      'Generated snippets are stale. Run `bun run generate` and commit src/snippets/generated.code-snippets.',
    );
  }

  process.stdout.write('Generated snippets are up to date.\n');
};

const generate = async (content: string): Promise<void> => {
  const changed = await persistGeneratedSnippets(
    generatedSnippetsPath,
    content,
  );
  const status = changed ? 'updated' : 'already up to date';
  process.stdout.write(`Generated snippets ${status}.\n`);
};

const main = async (): Promise<void> => {
  const content = buildSnippets(DEFAULT_GENERATION_SETTINGS, (message) => {
    process.stderr.write(`${message}\n`);
  });

  return process.argv.includes('--check')
    ? checkGeneratedSnippets(content)
    : generate(content);
};

try {
  await main();
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  process.stderr.write(`${message}\n`);
  process.exitCode = 1;
}
