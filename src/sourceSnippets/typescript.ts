// import { SnippetPlaceholders, TypescriptSnippets } from "../types";

// const props = [`${SnippetPlaceholders.TypeInterface} Props {}`, ""];

// export const propsInterface = [...props, `${SnippetPlaceholders.TypeInterface} State {}`, ""];

// export const typescriptReactClassComponent: TypescriptSnippets = {
//   key: "typescriptReactClassComponent",
//   prefix: "tsrcc",
//   description: "Creates a React component class with ES7 module system and TypeScript interfaces",
//   body: [
//     "import React, { Component } from 'react'",
//     "",
//     ...propsInterface,
//     `export default class ${SnippetPlaceholders.FileName} extends Component<Props, State> {`,
//     "  state = {}",
//     "",
//     "  render() {",
//     "    return (",
//     "      <div>",
//     `        ${SnippetPlaceholders.LastTab}`,
//     "      </div>",
//     "    )",
//     "  }",
//     "}",
//     "",
//   ],
// };

// export const typescriptReactClassExportComponent = {
//   prefix: "tsrce",
//   body: [
//     "import React, { Component } from 'react'",
//     "",
//     ...propsInterface,
//     `class ${SnippetPlaceholders.FileName} extends Component<Props, State> {`,
//     "  state = {}",
//     "",
//     "  render() {",
//     "    return (",
//     "      <div>",
//     "        ${SnippetPlaceholders.LastTab}",
//     "      </div>",
//     "    )",
//     "  }",w
//     "}",
//     "",
//     "export default ${SnippetPlaceholders.FileName}",
//     "",q
//   ],
//   description: "Creates a React component class with ES7 module system and TypeScript interfaces",
// };
// // "typescriptReactFunctionalExportComponent": {
// //   "prefix": "tsrfce",
// //   "body": [ d
// //     "import React, { ReactElement } from 'react'",
// //     "",
// //     "interface Props {",
// //     "  ",
// //     "}",
// //     "",
// //     "function ${SnippetPlaceholders.FileName}({}: Props): ReactElement {",
// //     "  return (",
// //     "    <div>",
// //     "      ${SnippetPlaceholders.LastTab}",
// //     "    </div>",
// //     "  )",
// //     "}",
// //     "",
// //     "export default ${SnippetPlaceholders.FileName}",
// //     ""
// //   ],
// //   "description": "Creates a React Functional Component with ES7 module system and TypeScript interface"
// // },
// // "typescriptReactFunctionalComponent": {
// //   "prefix": "tsrfc",
// //   "body": [
// //     "import React, { ReactElement } from 'react'",
// //     "",
// //     "interface Props {",
// //     "  ",
// //     "}",
// //     "",
// //     "export default function ${SnippetPlaceholders.FileName}({}: Props): ReactElement {",
// //     "  return (",
// //     "    <div>",
// //     "      ${SnippetPlaceholders.LastTab}",
// //     "    </div>",
// //     "  )",
// //     "}",
// //     ""
// //   ],
// //   "description": "Creates a React Functional Component with ES7 module system and TypeScript interface"
// // },
// // "typescriptReactArrowFunctionExportComponent": {
// //   "prefix": "tsrafce",
// //   "body": [
// //     "import React from 'react'",
// //     "",
// //     "interface Props {",
// //     "  ",
// //     "}",
// //     "",
// //     "const ${SnippetPlaceholders.FileName} = (props: Props) => {",
// //     "  return (",
// //     "    <div>",
// //     "      ${SnippetPlaceholders.LastTab}",
// //     "    </div>",
// //     "  )",
// //     "}",
// //     "",
// //     "export default ${SnippetPlaceholders.FileName}",
// //     ""
// //   ],
// //   "description": "Creates a React Arrow Function Component with ES7 module system and TypeScript interface"
// // },
// // "typescriptReactArrowFunctionComponent": {
// //   "prefix": "tsrafc",
// //   "body": [
// //     "import React from 'react'",
// //     "",
// //     "interface Props {",
// //     "  ",
// //     "}",
// //     "",
// //     "export const ${SnippetPlaceholders.FileName} = (props: Props) => {",
// //     "  return (",
// //     "    <div>",
// //     "      ${SnippetPlaceholders.LastTab}",
// //     "    </div>",
// //     "  )",
// //     "}",
// //     ""
// //   ],
// //   "description": "Creates a React Arrow Function Component with ES7 module system and TypeScript interface"
// // },
// // "typescriptReactClassPureComponent": {
// //   "prefix": "tsrpc",
// //   "body": [
// //     "import React, { PureComponent } from 'react'",
// //     "",
// //     "interface Props {",
// //     "  ",
// //     "}",
// //     "",
// //     "export default class ${SnippetPlaceholders.FileName} extends PureComponent<Props> {",
// //     "  render() {",
// //     "    return (",
// //     "      <div>",
// //     "        ${SnippetPlaceholders.LastTab}",
// //     "      </div>",
// //     "    )",
// //     "  }",
// //     "}",
// //     ""
// //   ],
// //   "description": "Creates a React pure component class with ES7 module system and TypeScript interface"
// // },
// // "typescriptReactClassExportPureComponent": {
// //   "prefix": "tsrpce",
// //   "body": [
// //     "import React, { PureComponent } from 'react'",
// //     "",
// //     "interface Props {",
// //     "  ",
// //     "}",
// //     "",
// //     "class ${SnippetPlaceholders.FileName} extends PureComponent<Props> {",
// //     "  render() {",
// //     "    return (",
// //     "      <div>",
// //     "        ${SnippetPlaceholders.LastTab}",
// //     "      </div>",
// //     "    )",
// //     "  }",
// //     "}",
// //     "",
// //     "export default ${SnippetPlaceholders.FileName}",
// //     ""
// //   ],
// //   "description": "Creates a React pure component class with ES7 module system and TypeScript interface"
// // },
// // "typescriptReactFunctionMemoComponent": {
// //   "prefix": "tsrmc",
// //   "body": [
// //     "import React, { memo } from 'react'",
// //     "",
// //     "interface Props {",
// //     "  ",
// //     "}",
// //     "",
// //     "export default memo(function ${SnippetPlaceholders.FileName}({}: Props) {",
// //     "  return (",
// //     "    <div>",
// //     "      ${SnippetPlaceholders.LastTab}",
// //     "    </div>",
// //     "  )",
// //     "})",
// //     ""
// //   ],
// //   "description": "Creates a React Memo Function Component with ES7 module system and TypeScript interface"
// // },
// // "typescriptReactClassCompomentRedux": {
// //   "prefix": "tsrcredux",
// //   "body": [
// //     "import React, { Component } from 'react'",
// //     "import { connect } from 'react-redux'",
// //     "",
// //     "interface Props {",
// //     "  ",
// //     "}",
// //     "interface State {",
// //     "  ",
// //     "}",
// //     "",
// //     "export class ${SnippetPlaceholders.FileName} extends Component<Props, State> {",
// //     "  state = {}",
// //     "",
// //     "  render() {",
// //     "    return (",
// //     "      <div>",
// //     "        ${SnippetPlaceholders.LastTab}",
// //     "      </div>",
// //     "    )",
// //     "  }",
// //     "}",
// //     "",
// //     "const mapStateToProps = (state) => ({",
// //     "  ",
// //     "})",
// //     "",
// //     "const mapDispatchToProps = {",
// //     "  ",
// //     "}",
// //     "",
// //     "export default connect(mapStateToProps, mapDispatchToProps)(${SnippetPlaceholders.FileName})",
// //     ""
// //   ],
// //   "description": "Creates a React component class with PropTypes with connected redux and ES7 module system and TypeScript interfaces"
// // },
// // "typescriptReactNativeArrowFunctionComponent": {
// //   "prefix": "tsrnf",
// //   "body": [
// //     "import React from 'react'",
// //     "import { View, Text } from 'react-native'",
// //     "",
// //     "interface Props {",
// //     "  ",
// //     "}",
// //     "",
// //     "const ${SnippetPlaceholders.FileName} = (props: Props) => {",
// //     "  return (",
// //     "    <View>",
// //     "      <Text>${SnippetPlaceholders.LastTab}</Text>",
// //     "    </View>",
// //     "  )",
// //     "}",
// //     "",
// //     "export default ${SnippetPlaceholders.FileName}",
// //     ""
// //   ],
// //   "description": "Creates a React Native Arrow Function Component with ES7 module system and TypeScript interface"
// // },
// // "typescriptReactNativeArrowFunctionComponentNamedProps": {
// //   "prefix": "tsrnfi",
// //   "body": [
// //     "import React from 'react'",
// //     "import { View } from 'react-native'",
// //     "",
// //     "interface ${SnippetPlaceholders.FileName}Props {",
// //     "  ",
// //     "}",
// //     "",
// //     "const ${SnippetPlaceholders.FileName}: React.FC<${SnippetPlaceholders.FileName}Props> = (props) => {",
// //     "  return (",
// //     "    <View>",
// //     "      ${SnippetPlaceholders.LastTab}",
// //     "    </View>",
// //     "  )",
// //     "}",
// //     "",
// //     "export default ${SnippetPlaceholders.FileName}",
// //     ""
// //   ],
// //   "description": "Creates a React Native Arrow Function Component with ES7 module system and named TypeScript interface"
// // },
// // "typescriptReactNativeArrowFunctionComponentWithStyles": {
// //   "prefix": "tsrnfs",
// //   "body": [
// //     "import React from 'react'",
// //     "import { StyleSheet, Text, View } from 'react-native'",
// //     "",
// //     "interface Props {",
// //     "  ",
// //     "}",
// //     "",
// //     "const ${SnippetPlaceholders.FileName} = (props: Props) => {",
// //     "  return (",
// //     "    <View>",
// //     "      <Text>${SnippetPlaceholders.LastTab}</Text>",
// //     "    </View>",
// //     "  )",
// //     "}",
// //     "",
// //     "export default ${SnippetPlaceholders.FileName}",
// //     "",
// //     "const styles = StyleSheet.create({})",
// //     ""
// //   ],
// //   "description": "Creates a React Native Arrow Function Component with ES7 module system, TypeScript interface and StyleSheet"
// // },

// export const exportType = {
//   prefix: "exptp",
//   body: [`export type ${SnippetPlaceholders.FirstTab} = {${SnippetPlaceholders.LastTab}}`],
// };

// export const exportInterface = {
//   prefix: "expint",
//   body: [
//     `export exportInterface ${SnippetPlaceholders.FirstTab} = {${SnippetPlaceholders.LastTab}}`,
//   ],
// };
