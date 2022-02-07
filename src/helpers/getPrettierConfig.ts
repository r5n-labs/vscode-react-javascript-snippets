import prettier, { Options } from 'prettier';

import extensionConfig from './extensionConfig';

let prettierConfig: prettier.Options | null;
prettier
  .resolveConfig('', { editorconfig: true })
  .then((config) => (prettierConfig = config));

const getPrettierConfig = (): Options => {
  const { semiColons, singleQuote, tabWidth, prettierEnabled } =
    extensionConfig();

  return {
    parser: 'typescript',
    semi: semiColons,
    singleQuote,
    tabWidth,
    ...(prettierEnabled && prettierConfig),
  };
};

export default getPrettierConfig;
