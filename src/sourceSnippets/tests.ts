import { Placeholders, SnippetMapping } from '../types';

type TestMapping = {
  describeBlock: 'desc';
  itAsyncBlock: 'tita';
  itBlock: 'tit';
  setupReactComponentTestWithRedux: 'srtest';
  setupReactNativeTest: 'sntest';
  setupReactNativeTestWithRedux: 'snrtest';
  setupReactTest: 'stest';
  testAsyncBlock: 'testa';
  testBlock: 'test';
};

export type TestsSnippet = SnippetMapping<TestMapping>;

const describeBlock: TestsSnippet = {
  key: 'describeBlock',
  prefix: 'desc',
  body: [
    `describe('${Placeholders.FirstTab}', () => { ${Placeholders.SecondTab} })`,
  ],
  description: 'Testing `describe` block',
};
const testBlock: TestsSnippet = {
  key: 'testBlock',
  prefix: 'test',
  body: [
    `test('should ${Placeholders.FirstTab}', () => { ${Placeholders.SecondTab} })`,
  ],
  description: 'Testing `test` block',
};
const testAsyncBlock: TestsSnippet = {
  key: 'testAsyncBlock',
  prefix: 'testa',
  body: [
    `test('should ${Placeholders.FirstTab}', async () => { ${Placeholders.SecondTab} })`,
  ],
  description: 'Testing `asynchronous test` block',
};
const itBlock: TestsSnippet = {
  key: 'itBlock',
  prefix: 'tit',
  body: [
    `it('should ${Placeholders.FirstTab}', () => { ${Placeholders.SecondTab} })`,
  ],
  description: 'Testing `it` block',
};
const itAsyncBlock: TestsSnippet = {
  key: 'itAsyncBlock',
  prefix: 'tita',
  body: [
    `it('should ${Placeholders.FirstTab}', async () => { ${Placeholders.SecondTab} })`,
  ],
  description: 'Testing asynchronous `it` block',
};
const setupReactTest: TestsSnippet = {
  key: 'setupReactTest',
  prefix: 'stest',
  body: [
    "import React from 'react'",
    "import renderer from 'react-test-renderer'",
    '',
    `import { ${Placeholders.FileName} } from '../${Placeholders.FileName}'`,
    '',
    `describe('<${Placeholders.FileName} />', () => {`,
    '  const defaultProps = {}',
    `  const wrapper = renderer.create(<${Placeholders.FileName} {...defaultProps} />)`,
    '',
    "  test('render', () => {",
    '    expect(wrapper).toMatchSnapshot()',
    '  })',
    '})',
  ],
};
const setupReactNativeTest: TestsSnippet = {
  key: 'setupReactNativeTest',
  prefix: 'sntest',
  body: [
    "import 'react-native'",
    "import React from 'react'",
    "import renderer from 'react-test-renderer'",
    '',
    `import ${Placeholders.FileName} from '../${Placeholders.FileName}'`,
    '',
    `describe('<${Placeholders.FileName} />', () => {`,
    '  const defaultProps = {}',
    `  const wrapper = renderer.create(<${Placeholders.FileName} {...defaultProps} />)`,
    '',
    "  test('render', () => {",
    '    expect(wrapper).toMatchSnapshot()',
    '  })',
    '})',
  ],
};
const setupReactComponentTestWithRedux: TestsSnippet = {
  key: 'setupReactComponentTestWithRedux',
  prefix: 'srtest',
  body: [
    "import React from 'react'",
    "import renderer from 'react-test-renderer'",
    "import { Provider } from 'react-redux'",
    '',
    "import store from '~/store'",
    `import { ${Placeholders.FileName} } from '../${Placeholders.FileName}'`,
    '',
    `describe('<${Placeholders.FileName} />', () => {`,
    '  const defaultProps = {}',
    '  const wrapper = renderer.create(',
    '    <Provider store={store}>',
    `     <${Placeholders.FileName} {...defaultProps} />`,
    '    </Provider>,',
    '  )',
    '',
    "  test('render', () => {",
    '    expect(wrapper).toMatchSnapshot()',
    '  })',
    '})',
  ],
  description: 'Create test component',
};
const setupReactNativeTestWithRedux: TestsSnippet = {
  key: 'setupReactNativeTestWithRedux',
  prefix: 'snrtest',
  body: [
    "import 'react-native'",
    "import React from 'react'",
    "import renderer from 'react-test-renderer'",
    "import { Provider } from 'react-redux'",
    '',
    "import store from '~/store'",
    `import ${Placeholders.FileName} from '../${Placeholders.FileName}'`,
    '',
    `describe('<${Placeholders.FileName} />', () => {`,
    '  const defaultProps = {}',
    '  const wrapper = renderer.create(',
    '    <Provider store={store}>',
    `      <${Placeholders.FileName} {...defaultProps} />`,
    '    </Provider>,',
    '  )',
    '',
    "  test('render', () => {",
    '    expect(wrapper).toMatchSnapshot()',
    '  })',
    '})',
  ],
};

export default [
  describeBlock,
  itAsyncBlock,
  itBlock,
  setupReactComponentTestWithRedux,
  setupReactNativeTest,
  setupReactNativeTestWithRedux,
  setupReactTest,
  testAsyncBlock,
  testBlock,
];
