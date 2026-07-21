import { copyFile, mkdir, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const workspaceRoot = fileURLToPath(new URL('..', import.meta.url));
const outputDirectory = join(workspaceRoot, 'lib');
const outputSnippetsDirectory = join(outputDirectory, 'snippets');
const sourceArtifact = join(
  workspaceRoot,
  'src',
  'snippets',
  'generated.code-snippets',
);
const outputArtifact = join(outputSnippetsDirectory, 'generated.code-snippets');

const runTypeScript = async (watch: boolean): Promise<void> => {
  const command = [
    process.execPath,
    'x',
    'tsc',
    '-p',
    './',
    '--noEmit',
    'false',
    '--outDir',
    'lib',
    ...(watch ? ['--watch'] : []),
  ];
  const processHandle = Bun.spawn({
    cmd: command,
    cwd: workspaceRoot,
    stdin: 'inherit',
    stdout: 'inherit',
    stderr: 'inherit',
  });
  const exitCode = await processHandle.exited;
  if (exitCode !== 0) {
    throw new Error(`TypeScript exited with status ${exitCode}`);
  }
};

const main = async (): Promise<void> => {
  await rm(outputDirectory, { force: true, recursive: true });
  await mkdir(outputSnippetsDirectory, { recursive: true });
  await copyFile(sourceArtifact, outputArtifact);
  await runTypeScript(process.argv.includes('--watch'));
};

try {
  await main();
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  process.stderr.write(`Build failed: ${message}\n`);
  process.exitCode = 1;
}
