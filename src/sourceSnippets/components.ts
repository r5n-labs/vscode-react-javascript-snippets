import { SnippetMapping, SnippetPlaceholders } from '../types';

import {
  exportDefault,
  innerComponent,
  innerComponentReturn,
  react,
  reactComponent,
  reactComponentWithReduxConnect,
  reactPropTypes,
  reactPureComponent,
  reactWithMemo,
  reactWithReduxConnect,
  reduxComponentExport,
} from './sharedSnippets';

type ComponentMappings = {
  reactArrowFunctionComponent: 'rafc';
  reactArrowFunctionComponentWithPropTypes: 'rafcp';
  reactArrowFunctionExportComponent: 'rafce';
  reactClassComponentPropTypes: 'rccp';
  reactClassComponentRedux: 'rcredux';
  reactClassComponentReduxPropTypes: 'rcreduxp';
  reactClassComponent: 'rcc';
  reactClassExportComponent: 'rce';
  reactClassExportComponentWithPropTypes: 'rcep';
  reactClassExportPureComponent: 'rpce';
  reactClassPureComponent: 'rpc';
  reactClassPureComponentWithPropTypes: 'rpcp';
  reactFunctionMemoComponent: 'rmc';
  reactFunctionMemoComponentWithPropTypes: 'rmcp';
  reactFunctionalComponentRedux: 'rfcredux';
  reactFunctionalComponentReduxPropTypes: 'rfcreduxp';
  reactFunctionalComponent: 'rfc';
  reactFunctionalComponentWithPropTypes: 'rfcp';
  reactFunctionalExportComponent: 'rfce';
};

export type ComponentsSnippet = SnippetMapping<ComponentMappings>;

const reactClassComponent: ComponentsSnippet = {
  key: 'reactClassComponent',
  prefix: 'rcc',
  body: [
    ...reactComponent,
    `export default class ${SnippetPlaceholders.FileName} extends Component {`,
    ...innerComponentReturn,
    '}',
    '',
  ],
  description: 'Creates a React component class with ES7 module system',
};

const reactClassExportComponent: ComponentsSnippet = {
  key: 'reactClassExportComponent',
  prefix: 'rce',
  body: [
    ...reactComponent,
    `export class ${SnippetPlaceholders.FileName} extends Component {`,
    ...innerComponentReturn,
    '}',
    ...exportDefault,
  ],
  description: 'Creates a React component class with ES7 module system',
};

const reactFunctionalExportComponent: ComponentsSnippet = {
  key: 'reactFunctionalExportComponent',
  prefix: 'rfce',
  body: [
    ...react,
    `function ${SnippetPlaceholders.FileName}() {`,
    ...innerComponent,
    '}',
    ...exportDefault,
  ],
  description: 'Creates a React Functional Component with ES7 module system',
};

const reactFunctionalComponent: ComponentsSnippet = {
  key: 'reactFunctionalComponent',
  prefix: 'rfc',
  body: [
    ...react,
    `export default function ${SnippetPlaceholders.FileName}() {`,
    ...innerComponent,
    '}',
    '',
  ],
  description: 'Creates a React Functional Component with ES7 module system',
};

const reactFunctionalComponentWithPropTypes: ComponentsSnippet = {
  key: 'reactFunctionalComponentWithPropTypes',
  prefix: 'rfcp',
  body: [
    ...reactPropTypes,
    `function ${SnippetPlaceholders.FileName}(props) {`,
    ...innerComponent,
    '}',
    '',
    `${SnippetPlaceholders.FileName}.propTypes = {}`,
    ...exportDefault,
    '',
  ],
  description:
    'Creates a React Functional Component with ES7 module system with PropTypes',
};

const reactArrowFunctionExportComponent: ComponentsSnippet = {
  key: 'reactArrowFunctionExportComponent',
  prefix: 'rafce',
  body: [
    ...react,
    `const ${SnippetPlaceholders.FileName} = () => {`,
    ...innerComponent,
    '}',
    ...exportDefault,
  ],
  description:
    'Creates a React Arrow Function Component with ES7 module system',
};

const reactArrowFunctionComponent: ComponentsSnippet = {
  key: 'reactArrowFunctionComponent',
  prefix: 'rafc',
  body: [
    ...react,
    `export const ${SnippetPlaceholders.FileName} = () => {`,
    ...innerComponent,
    '}',
    '',
  ],
  description:
    'Creates a React Arrow Function Component with ES7 module system',
};

const reactArrowFunctionComponentWithPropTypes: ComponentsSnippet = {
  key: 'reactArrowFunctionComponentWithPropTypes',
  prefix: 'rafcp',
  body: [
    ...reactPropTypes,
    `const ${SnippetPlaceholders.FileName} = props => {`,
    ...innerComponent,
    '}',
    '',
    `${SnippetPlaceholders.FileName}.propTypes = {}`,
    ...exportDefault,
  ],
  description:
    'Creates a React Arrow Function Component with ES7 module system with PropTypes',
};

const reactClassExportComponentWithPropTypes: ComponentsSnippet = {
  key: 'reactClassExportComponentWithPropTypes',
  prefix: 'rcep',
  body: [
    "import PropTypes from 'prop-types'",
    ...reactComponent,
    `export class ${SnippetPlaceholders.FileName} extends Component {`,
    '  static propTypes = {}',
    '',
    ...innerComponentReturn,
    '}',
    ...exportDefault,
  ],
  description: 'Creates a React component class with ES7 module system',
};

const reactClassPureComponent: ComponentsSnippet = {
  key: 'reactClassPureComponent',
  prefix: 'rpc',
  body: [
    ...reactPureComponent,
    `export default class ${SnippetPlaceholders.FileName} extends PureComponent {`,
    ...innerComponentReturn,
    '}',
    '',
  ],
  description: 'Creates a React pure component class with ES7 module system',
};

const reactClassExportPureComponent: ComponentsSnippet = {
  key: 'reactClassExportPureComponent',
  prefix: 'rpce',
  body: [
    ...reactPureComponent,
    `export class ${SnippetPlaceholders.FileName} extends PureComponent {`,
    ...innerComponentReturn,
    '}',
    ...exportDefault,
  ],
  description:
    'Creates a React pure component class with ES7 module system export',
};

const reactClassPureComponentWithPropTypes: ComponentsSnippet = {
  key: 'reactClassPureComponentWithPropTypes',
  prefix: 'rpcp',
  body: [
    "import PropTypes from 'prop-types'",
    ...reactPureComponent,
    `export default class ${SnippetPlaceholders.FileName} extends PureComponent {`,
    '  static propTypes = {}',
    '',
    ...innerComponentReturn,
    '}',
    '',
  ],
  description: 'Creates a React component class with ES7 module system',
};

const reactFunctionMemoComponent: ComponentsSnippet = {
  key: 'reactFunctionMemoComponent',
  prefix: 'rmc',
  body: [
    "import React, { memo } from 'react'",
    '',
    `export default memo(function ${SnippetPlaceholders.FileName}() {`,
    ...innerComponent,
    '})',
    '',
  ],
  description: 'Creates a React Memo Function Component with ES7 module system',
};

const reactFunctionMemoComponentWithPropTypes: ComponentsSnippet = {
  key: 'reactFunctionMemoComponentWithPropTypes',
  prefix: 'rmcp',
  body: [
    "import PropTypes from 'prop-types'",
    ...reactWithMemo,
    `const ${SnippetPlaceholders.FileName} = memo(function ${SnippetPlaceholders.FileName}(props) {`,
    ...innerComponent,
    '})',
    '',
    `${SnippetPlaceholders.FileName}.propTypes = {}`,
    ...exportDefault,
  ],
  description:
    'Creates a React Memo Function Component with ES7 module system with PropTypes',
};

const reactClassComponentPropTypes: ComponentsSnippet = {
  key: 'reactClassComponentPropTypes',
  prefix: 'rccp',
  body: [
    "import PropTypes from 'prop-types'",
    ...reactComponent,
    `export default class ${SnippetPlaceholders.FileName} extends Component {`,
    '  static propTypes = {',
    `    ${SnippetPlaceholders.SecondTab}: ${SnippetPlaceholders.ThirdTab}`,
    '  }',
    '',
    ...innerComponentReturn,
    '}',
    '',
  ],
  description:
    'Creates a React component class with PropTypes and ES7 module system',
};

const reactClassComponentRedux: ComponentsSnippet = {
  key: 'reactClassComponentRedux',
  prefix: 'rcredux',
  body: [
    ...reactComponentWithReduxConnect,
    `export class ${SnippetPlaceholders.FileName} extends Component {`,
    ...innerComponentReturn,
    '}',
    ...reduxComponentExport,
  ],
  description:
    'Creates a React component class with connected redux and ES7 module system',
};

const reactClassComponentReduxPropTypes: ComponentsSnippet = {
  key: 'reactClassComponentReduxPropTypes',
  prefix: 'rcreduxp',
  body: [
    "import PropTypes from 'prop-types'",
    ...reactComponentWithReduxConnect,
    `export class ${SnippetPlaceholders.FileName} extends Component {`,
    '  static propTypes = {',
    `    ${SnippetPlaceholders.SecondTab}: ${SnippetPlaceholders.ThirdTab}`,
    '  }',
    '',
    ...innerComponentReturn,
    '}',
    ...reduxComponentExport,
  ],
  description:
    'Creates a React component class with PropTypes with connected redux and ES7 module system',
};

const reactFunctionalComponentRedux: ComponentsSnippet = {
  key: 'reactFunctionalComponentRedux',
  prefix: 'rfcredux',
  body: [
    ...reactWithReduxConnect,
    `export const ${SnippetPlaceholders.FileName} = (props) => {`,
    ...innerComponent,
    '}',
    ...reduxComponentExport,
  ],
  description:
    'Creates a React functional component with connected redux and ES7 module system',
};

const reactFunctionalComponentReduxPropTypes: ComponentsSnippet = {
  key: 'reactFunctionalComponentReduxPropTypes',
  prefix: 'rfcreduxp',
  body: [
    "import PropTypes from 'prop-types'",
    ...reactWithReduxConnect,
    `export const ${SnippetPlaceholders.FileName} = (props) => {`,
    ...innerComponent,
    '}',
    '',
    `${SnippetPlaceholders.FileName}.propTypes = {`,
    `  ${SnippetPlaceholders.SecondTab}: PropTypes.${SnippetPlaceholders.ThirdTab}`,
    '}',
    ...reduxComponentExport,
  ],
  description:
    'DEPRECATED: Creates a React functional component with PropTypes with connected redux and ES7 module system',
};

export default [
  reactArrowFunctionComponent,
  reactArrowFunctionComponentWithPropTypes,
  reactArrowFunctionExportComponent,
  reactClassComponent,
  reactClassComponentPropTypes,
  reactClassComponentRedux,
  reactClassComponentReduxPropTypes,
  reactClassExportComponent,
  reactClassExportComponentWithPropTypes,
  reactClassExportPureComponent,
  reactClassPureComponent,
  reactClassPureComponentWithPropTypes,
  reactFunctionMemoComponent,
  reactFunctionMemoComponentWithPropTypes,
  reactFunctionalComponent,
  reactFunctionalComponentRedux,
  reactFunctionalComponentReduxPropTypes,
  reactFunctionalComponentWithPropTypes,
  reactFunctionalExportComponent,
];
