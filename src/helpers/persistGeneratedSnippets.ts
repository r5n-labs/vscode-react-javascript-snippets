import { randomUUID } from 'node:crypto';
import { readFile, rename, unlink, writeFile } from 'node:fs/promises';
import { basename, dirname, join } from 'node:path';

let persistenceQueue: Promise<void> = Promise.resolve();

const isMissingFileError = (error: unknown): boolean =>
  error instanceof Error && 'code' in error && error.code === 'ENOENT';

const readExistingContent = async (
  filePath: string,
): Promise<string | null> => {
  try {
    return await readFile(filePath, 'utf8');
  } catch (error) {
    if (isMissingFileError(error)) return null;
    throw error;
  }
};

const cleanTemporaryFile = async (
  temporaryPath: string,
  persistenceError: unknown,
): Promise<void> => {
  let cleanupError: unknown;
  try {
    await unlink(temporaryPath);
    return;
  } catch (error) {
    if (isMissingFileError(error)) return;
    cleanupError = error;
  }

  throw new AggregateError(
    [persistenceError, cleanupError],
    `Failed to persist generated snippets and clean temporary file ${temporaryPath}`,
    { cause: persistenceError },
  );
};

const persistOnce = async (
  filePath: string,
  content: string,
): Promise<boolean> => {
  const existingContent = await readExistingContent(filePath);
  if (existingContent === content) return false;

  const temporaryPath = join(
    dirname(filePath),
    `.${basename(filePath)}.${process.pid}.${randomUUID()}.tmp`,
  );

  try {
    await writeFile(temporaryPath, content, { encoding: 'utf8', flag: 'wx' });
    await rename(temporaryPath, filePath);
  } catch (error) {
    await cleanTemporaryFile(temporaryPath, error);
    throw error;
  }

  return true;
};

export const persistGeneratedSnippets = (
  filePath: string,
  content: string,
): Promise<boolean> => {
  const operation = persistenceQueue.then(() => persistOnce(filePath, content));
  persistenceQueue = operation.then(
    () => undefined,
    () => undefined,
  );
  return operation;
};
