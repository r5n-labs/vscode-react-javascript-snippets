import { Placeholders, SnippetMapping } from '../types';

import {
  exportDefault,
  innerComponent,
  innerComponentReturn,
  propsStateInterface,
  propsTypeInterface,
  react,
  reactComponent,
  reactPureComponent,
  reduxComponentExport,
} from './sharedSnippets';

type TypescriptMappings = {
  exportInterface: 'expint';
  exportType: 'exptp';
  typescriptReactArrowFunctionComponent: 'tsrafc';
  typescriptReactArrowFunctionExportComponent: 'tsrafce';
  typescriptReactClassComponent: 'tsrcc';
  typescriptReactClassComponentRedux: 'tsrcredux';
  typescriptReactClassExportComponent: 'tsrce';
  typescriptReactClassExportPureComponent: 'tsrpce';
  typescriptReactClassPureComponent: 'tsrpc';
  typescriptReactFunctionalComponent: 'tsrfc';
  typescriptReactFunctionalExportComponent: 'tsrfce';
  typescriptReactNativeArrowFunctionComponent: 'tsrnf';
  typescriptReactNativeArrowFunctionComponentWithStyles: 'tsrnfs';
};

export type TypescriptSnippet = SnippetMapping<TypescriptMappings>;

const exportType: TypescriptSnippet = {
  body: [`export type ${Placeholders.FirstTab} = {${Placeholders.SecondTab}}`],
  key: 'exportType',
  prefix: 'exptp',
};

const exportInterface: TypescriptSnippet = {
  key: 'exportInterface',
  prefix: 'expint',
  body: [
    `export interface ${Placeholders.FirstTab} {${Placeholders.SecondTab}}`,
  ],
};

const typescriptReactClassComponent: TypescriptSnippet = {
  key: 'typescriptReactClassComponent',
  prefix: 'tsrcc',
  description:
    'Creates a React component class with ES7 module system and TypeScript interfaces',
  body: [
    ...reactComponent,
    '',
    ...propsStateInterface,
    `export default class ${Placeholders.FileName} extends Component<Props, State> {`,
    '  state = {}',
    '',
    ...innerComponentReturn,
    '}',
  ],
};

const typescriptReactClassExportComponent: TypescriptSnippet = {
  key: 'typescriptReactClassExportComponent',
  prefix: 'tsrce',
  body: [
    ...reactComponent,
    '',
    ...propsStateInterface,
    `class ${Placeholders.FileName} extends Component<Props, State> {`,
    '  state = {}',
    '',
    ...innerComponentReturn,
    '}',
    ...exportDefault,
  ],
  description:
    'Creates a React component class with ES7 module system and TypeScript interfaces',
};

const typescriptReactFunctionalExportComponent: TypescriptSnippet = {
  key: 'typescriptReactFunctionalExportComponent',
  prefix: 'tsrfce',
  body: [
    ...react,
    '',
    ...propsTypeInterface,
    `function ${Placeholders.FileName}({}: Props) {`,
    ...innerComponent,
    '}',
    ...exportDefault,
  ],
  description:
    'Creates a React Functional Component with ES7 module system and TypeScript interface',
};

const typescriptReactFunctionalComponent: TypescriptSnippet = {
  key: 'typescriptReactFunctionalComponent',
  prefix: 'tsrfc',
  body: [
    ...react,
    '',
    ...propsTypeInterface,
    `export default function ${Placeholders.FileName}({}: Props) {`,
    ...innerComponent,
    '}',
  ],
  description:
    'Creates a React Functional Component with ES7 module system and TypeScript interface',
};

const typescriptReactArrowFunctionExportComponent: TypescriptSnippet = {
  key: 'typescriptReactArrowFunctionExportComponent',
  prefix: 'tsrafce',
  body: [
    ...react,
    '',
    ...propsTypeInterface,
    `const ${Placeholders.FileName} = (props: Props) => {`,
    ...innerComponent,
    '}',
    ...exportDefault,
  ],
  description:
    'Creates a React Arrow Function Component with ES7 module system and TypeScript interface',
};

const typescriptReactArrowFunctionComponent: TypescriptSnippet = {
  key: 'typescriptReactArrowFunctionComponent',
  prefix: 'tsrafc',
  body: [
    ...react,
    '',
    ...propsTypeInterface,
    `const ${Placeholders.FileName} = (props: Props) => {`,
    ...innerComponent,
    '}',
  ],
  description:
    'Creates a React Arrow Function Component with ES7 module system and TypeScript interface',
};

const typescriptReactClassPureComponent: TypescriptSnippet = {
  key: 'typescriptReactClassPureComponent',
  prefix: 'tsrpc',
  body: [
    ...reactPureComponent,
    '',
    ...propsTypeInterface,
    `export default class ${Placeholders.FileName} extends PureComponent<Props> {`,
    ...innerComponentReturn,
    '}',
  ],
  description:
    'Creates a React pure component class with ES7 module system and TypeScript interface',
};

const typescriptReactClassExportPureComponent: TypescriptSnippet = {
  key: 'typescriptReactClassExportPureComponent',
  prefix: 'tsrpce',
  body: [
    ...reactPureComponent,
    '',
    ...propsTypeInterface,
    `class ${Placeholders.FileName} extends PureComponent<Props> {`,
    ...innerComponentReturn,
    '}',
    ...exportDefault,
  ],
  description:
    'Creates a React pure component class with ES7 module system and TypeScript interface',
};

const typescriptReactClassComponentRedux: TypescriptSnippet = {
  key: 'typescriptReactClassComponentRedux',
  prefix: 'tsrcredux',
  body: [
    "import { connect } from 'react-redux'",
    ...reactComponent,
    '',
    ...propsStateInterface,
    `export class ${Placeholders.FileName} extends Component<Props, State> {`,
    '  state = {}',
    '',
    ...innerComponentReturn,
    '}',
    ...reduxComponentExport,
  ],
  description:
    'Creates a React component class with connected redux and ES7 module system and TypeScript interfaces',
};

const typescriptReactNativeArrowFunctionComponent: TypescriptSnippet = {
  key: 'typescriptReactNativeArrowFunctionComponent',
  prefix: 'tsrnf',
  body: [
    "import { View, Text } from 'react-native'",
    ...react,
    '',
    ...propsTypeInterface,
    `const ${Placeholders.FileName} = (props: Props) => {`,
    '  return (',
    '    <View>',
    `      <Text>${Placeholders.FirstTab}</Text>`,
    '    </View>',
    '  )',
    '}',
    ...exportDefault,
  ],
  description:
    'Creates a React Native Arrow Function Component with ES7 module system in TypeScript',
};

const typescriptReactNativeArrowFunctionComponentWithStyles: TypescriptSnippet =
  {
    key: 'typescriptReactNativeArrowFunctionComponentWithStyles',
    prefix: 'tsrnfs',
    body: [
      "import { StyleSheet, Text, View } from 'react-native'",
      ...react,
      '',
      ...propsTypeInterface,
      `const ${Placeholders.FileName} = (props: Props) => {`,
      '  return (',
      '    <View>',
      `      <Text>${Placeholders.FirstTab}</Text>`,
      '    </View>',
      '  )',
      '}',
      ...exportDefault,
      '',
      'const styles = StyleSheet.create({})',
    ],
    description:
      'Creates a React Native Arrow Function Component with ES7 module system, TypeScript interface and StyleSheet',
  };

export default [
  exportType,
  exportInterface,
  typescriptReactClassComponent,
  typescriptReactClassExportComponent,
  typescriptReactFunctionalExportComponent,
  typescriptReactFunctionalComponent,
  typescriptReactArrowFunctionExportComponent,
  typescriptReactArrowFunctionComponent,
  typescriptReactClassPureComponent,
  typescriptReactClassExportPureComponent,
  typescriptReactClassComponentRedux,
  typescriptReactNativeArrowFunctionComponent,
  typescriptReactNativeArrowFunctionComponentWithStyles,
];
