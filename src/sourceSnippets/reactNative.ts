import { Placeholders, SnippetMapping } from '../types';

import {
  exportDefault,
  react,
  reactComponent,
  reactPureComponent,
} from './sharedSnippets';

type ReactNativeMapping = {
  reactNativeImport: 'imrn';
  reactNativeStyles: 'rnstyle';
  reactNativeComponent: 'rnc';
  reactNativeComponentWithStyles: 'rncs';
  reactNativeComponentExport: 'rnce';
  reactNativePureComponent: 'rnpc';
  reactNativePureComponentExport: 'rnpce';
  reactNativeFunctionalExportComponent: 'rnfe';
  reactNativeFunctionalExportComponentWithStyles: 'rnfes';
  reactNativeFunctionalComponent: 'rnf';
  reactNativeFunctionalComponentWithStyles: 'rnfs';
  reactNativeExtendedFunctional: 'rnxf';
};

export type ReactNativeSnippet = SnippetMapping<ReactNativeMapping>;

const reactNativeStylesSnippet = ['const styles = StyleSheet.create({})'];
const reactNativeComponentReturn = [
  '  render() {',
  '    return (',
  '      <View>',
  `        <Text>${Placeholders.FirstTab}</Text>`,
  '      </View>',
  '    )',
  '  }',
];

const reactNativeReturn = [
  '  return (',
  '    <View>',
  `      <Text>${Placeholders.FirstTab}</Text>`,
  '    </View>',
  '  )',
];

const reactNativeImport: ReactNativeSnippet = {
  key: 'reactNativeImport',
  prefix: 'imrn',
  body: [`import { ${Placeholders.FirstTab} } from 'react-native'`],
};

const reactNativeStyles: ReactNativeSnippet = {
  key: 'reactNativeStyles',
  prefix: 'rnstyle',
  body: [`const styles = StyleSheet.create({${Placeholders.FirstTab}})`],
};

const reactNativeComponent: ReactNativeSnippet = {
  key: 'reactNativeComponent',
  prefix: 'rnc',
  body: [
    "import { Text, View } from 'react-native'",
    ...reactComponent,
    '',
    `export default class ${Placeholders.ComponentName} extends Component {`,
    ...reactNativeComponentReturn,
    '}',
  ],
};

const reactNativeComponentWithStyles: ReactNativeSnippet = {
  key: 'reactNativeComponentWithStyles',
  prefix: 'rncs',
  body: [
    "import { Text, StyleSheet, View } from 'react-native'",
    ...reactComponent,
    '',
    `export default class ${Placeholders.ComponentName} extends Component {`,
    ...reactNativeComponentReturn,
    '}',
    '',
    ...reactNativeStylesSnippet,
  ],
};

const reactNativeComponentExport: ReactNativeSnippet = {
  key: 'reactNativeComponentExport',
  prefix: 'rnce',
  body: [
    "import { Text, View } from 'react-native'",
    ...reactComponent,
    '',
    `export class ${Placeholders.ComponentName} extends Component {`,
    ...reactNativeComponentReturn,
    '}',
    ...exportDefault,
  ],
};

const reactNativePureComponent: ReactNativeSnippet = {
  key: 'reactNativePureComponent',
  prefix: 'rnpc',
  body: [
    "import { Text, View } from 'react-native'",
    ...reactPureComponent,
    '',
    `export default class ${Placeholders.ComponentName} extends PureComponent {`,
    ...reactNativeComponentReturn,
    '}',
  ],
};

const reactNativePureComponentExport: ReactNativeSnippet = {
  key: 'reactNativePureComponentExport',
  prefix: 'rnpce',
  body: [
    "import { Text, View } from 'react-native'",
    ...reactPureComponent,
    '',
    `export class ${Placeholders.ComponentName} extends PureComponent {`,
    ...reactNativeComponentReturn,
    '}',
    ...exportDefault,
  ],
};

const reactNativeFunctionalExportComponent: ReactNativeSnippet = {
  key: 'reactNativeFunctionalExportComponent',
  prefix: 'rnfe',
  body: [
    "import { View, Text } from 'react-native'",
    ...react,
    '',
    `const ${Placeholders.ComponentName} = () => {`,
    ...reactNativeReturn,
    '}',
    ...exportDefault,
  ],
};

const reactNativeFunctionalExportComponentWithStyles: ReactNativeSnippet = {
  key: 'reactNativeFunctionalExportComponentWithStyles',
  prefix: 'rnfes',
  body: [
    "import { StyleSheet, Text, View } from 'react-native'",
    ...react,
    '',
    `const ${Placeholders.ComponentName} = () => {`,
    ...reactNativeReturn,
    '}',
    ...exportDefault,
    '',
    ...reactNativeStylesSnippet,
  ],
};

const reactNativeFunctionalComponent: ReactNativeSnippet = {
  key: 'reactNativeFunctionalComponent',
  prefix: 'rnf',
  body: [
    "import { View, Text } from 'react-native'",
    ...react,
    '',
    `export default function ${Placeholders.ComponentName}() {`,
    ...reactNativeReturn,
    '}',
  ],
};

const reactNativeFunctionalComponentWithStyles: ReactNativeSnippet = {
  key: 'reactNativeFunctionalComponentWithStyles',
  prefix: 'rnfs',
  body: [
    "import { StyleSheet, Text, View } from 'react-native'",
    ...react,
    '',
    `export default function ${Placeholders.ComponentName}() {`,
    ...reactNativeReturn,
    '}',
    '',
    ...reactNativeStylesSnippet,
  ],
};

const reactNativeExtendedFunctional: ReactNativeSnippet = {
  key: 'reactNativeExtendedFunctional',
  prefix: 'rnxf',
  body: [
    "import React, { useState, useEffect } from 'react'",
    "import { View, SafeAreaView, Text, StyleSheet } from 'react-native'",
    '',
    `const ${Placeholders.ComponentName} = ({ \${2:props} }) => {`,
    '  const [${3:state}, ${4:setState}] = useState(${5:initialState})',
    '',
    '  useEffect(() => {',
    '    // Effect here',
    '  }, [])',
    '',
    '  return (',
    '    <SafeAreaView style={styles.container}>',
    '      <View>',
    '        <Text>${6:Hello, World!}</Text>',
    '      </View>',
    '    </SafeAreaView>',
    '  )',
    '}',
    '',
    'const styles = StyleSheet.create({',
    '  container: {',
    '    flex: 1,',
    "    justifyContent: 'center',",
    "    alignItems: 'center',",
    '  },',
    '})',
    '',
    `export default ${Placeholders.ComponentName}`,
  ],
  description:
    'React Native functional component with useState, useEffect, SafeAreaView and basic styling',
};

export default [
  reactNativeComponent,
  reactNativeComponentExport,
  reactNativeComponentWithStyles,
  reactNativeExtendedFunctional,
  reactNativeFunctionalComponent,
  reactNativeFunctionalComponentWithStyles,
  reactNativeFunctionalExportComponent,
  reactNativeFunctionalExportComponentWithStyles,
  reactNativeImport,
  reactNativePureComponent,
  reactNativePureComponentExport,
  reactNativeStyles,
];
