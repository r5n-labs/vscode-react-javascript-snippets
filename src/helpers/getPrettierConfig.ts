import prettier, { Options } from 'prettier';

import extensionConfig from './extensionConfig';

let prettierConfig: prettier.Options | null;
prettier
  .resolveConfig('', { editorconfig: true })
  .then((config) => (prettierConfig = config));

const getPrettierConfig = (): Options => {
  const { prettierEnabled } = extensionConfig();

  return {
    parser: 'typescript',
    ...(prettierEnabled && prettierConfig),
  };
};

export default getPrettierConfig;
