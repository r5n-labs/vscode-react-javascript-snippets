import { SnippetMapping, SnippetPlaceholders } from "../types";

type TestMapping = {
  describeBlock: "desc";
  itAsyncBlock: "tita";
  itBlock: "tit";
  setupReactComponentTestWithRedux: "srtest";
  setupReactNativeTest: "sntest";
  setupReactNativeTestWithRedux: "snrtest";
  setupReactTest: "stest";
  testAsyncBlock: "testa";
  testBlock: "test";
};

export type TestsSnippet = SnippetMapping<TestMapping>;

const describeBlock: TestsSnippet = {
  key: "describeBlock",
  prefix: "desc",
  body: [
    `describe('${SnippetPlaceholders.FirstTab}', () => {`,
    `  ${SnippetPlaceholders.LastTab}`,
    "})",
    "",
  ],
  description: "Testing `describe` block",
};
const testBlock: TestsSnippet = {
  key: "testBlock",
  prefix: "test",
  body: [
    `test('should ${SnippetPlaceholders.FirstTab}', () => {`,
    `  ${SnippetPlaceholders.LastTab}`,
    "})",
    "",
  ],
  description: "Testing `test` block",
};
const testAsyncBlock: TestsSnippet = {
  key: "testAsyncBlock",
  prefix: "testa",
  body: [
    `test('should ${SnippetPlaceholders.FirstTab}', async () => {`,
    `  ${SnippetPlaceholders.LastTab}`,
    "})",
    "",
  ],
  description: "Testing `asynchronous test` block",
};
const itBlock: TestsSnippet = {
  key: "itBlock",
  prefix: "tit",
  body: [
    `it('should ${SnippetPlaceholders.FirstTab}', () => {`,
    `  ${SnippetPlaceholders.LastTab}`,
    "})",
    "",
  ],
  description: "Testing `it` block",
};
const itAsyncBlock: TestsSnippet = {
  key: "itAsyncBlock",
  prefix: "tita",
  body: [
    `it('should ${SnippetPlaceholders.FirstTab}', async () => {`,
    `  ${SnippetPlaceholders.LastTab}`,
    "})",
    "",
  ],
  description: "Testing asynchronous `it` block",
};
const setupReactTest: TestsSnippet = {
  key: "setupReactTest",
  prefix: "stest",
  body: [
    "import React from 'react'",
    "import renderer from 'react-test-renderer'",
    "",
    `import { ${SnippetPlaceholders.FileName} } from '../${SnippetPlaceholders.FileName}'`,
    "",
    `describe('<${SnippetPlaceholders.FileName} />', () => {`,
    "  const defaultProps = {}",
    `  const wrapper = renderer.create(<${SnippetPlaceholders.FileName} {...defaultProps} />)`,
    "",
    "  test('render', () => {",
    "    expect(wrapper).toMatchSnapshot()",
    "  })",
    "})",
    "",
  ],
};
const setupReactNativeTest: TestsSnippet = {
  key: "setupReactNativeTest",
  prefix: "sntest",
  body: [
    "import 'react-native'",
    "import React from 'react'",
    "import renderer from 'react-test-renderer'",
    "",
    `import ${SnippetPlaceholders.FileName} from '../${SnippetPlaceholders.FileName}'`,
    "",
    `describe('<${SnippetPlaceholders.FileName} />', () => {`,
    "  const defaultProps = {}",
    `  const wrapper = renderer.create(<${SnippetPlaceholders.FileName} {...defaultProps} />)`,
    "",
    "  test('render', () => {",
    "    expect(wrapper).toMatchSnapshot()",
    "  })",
    "})",
    "",
  ],
};
const setupReactComponentTestWithRedux: TestsSnippet = {
  key: "setupReactComponentTestWithRedux",
  prefix: "srtest",
  body: [
    "import React from 'react'",
    "import renderer from 'react-test-renderer'",
    "import { Provider } from 'react-redux'",
    "",
    "import store from '~/store'",
    `import { ${SnippetPlaceholders.FileName} } from '../${SnippetPlaceholders.FileName}'`,
    "",
    `describe('<${SnippetPlaceholders.FileName} />', () => {`,
    "  const defaultProps = {}",
    "  const wrapper = renderer.create(",
    "    <Provider store={store}>",
    `     <${SnippetPlaceholders.FileName} {...defaultProps} />`,
    "    </Provider>,",
    "  )",
    "",
    "  test('render', () => {",
    "    expect(wrapper).toMatchSnapshot()",
    "  })",
    "})",
    "",
  ],
  description: "Create test component",
};
const setupReactNativeTestWithRedux: TestsSnippet = {
  key: "setupReactNativeTestWithRedux",
  prefix: "snrtest",
  body: [
    "import 'react-native'",
    "import React from 'react'",
    "import renderer from 'react-test-renderer'",
    "import { Provider } from 'react-redux'",
    "",
    "import store from '~/store'",
    `import ${SnippetPlaceholders.FileName} from '../${SnippetPlaceholders.FileName}'`,
    "",
    `describe('<${SnippetPlaceholders.FileName} />', () => {`,
    "  const defaultProps = {}",
    "  const wrapper = renderer.create(",
    "    <Provider store={store}>",
    `      <${SnippetPlaceholders.FileName} {...defaultProps} />`,
    "    </Provider>,",
    "  )",
    "",
    "  test('render', () => {",
    "    expect(wrapper).toMatchSnapshot()",
    "  })",
    "})",
    "",
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
