import path from 'node:path';
import { window } from 'vscode';

import { buildSnippets } from './buildSnippets';
import extensionConfig from './extensionConfig';
import { persistGeneratedSnippets } from './persistGeneratedSnippets';

const generatedSnippetsPath = path.join(
  __dirname,
  '..',
  'snippets',
  'generated.code-snippets',
);

const generateSnippets = async (): Promise<boolean> => {
  const settings = extensionConfig();
  const content = buildSnippets(settings, (message) => {
    void window.showWarningMessage(message);
  });

  return persistGeneratedSnippets(generatedSnippetsPath, content);
};

export default generateSnippets;
