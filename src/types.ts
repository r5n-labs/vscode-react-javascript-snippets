export enum SnippetPlaceholders {
  FileName = "FILE_NAME",
  FirstTab = "FIRST_TAB",
  LastTab = "LAST_TAB",
  TypeInterface = "TYPE_INTERFACE",
}

export type SnippetMapping<T, K> = {
  key: T;
  prefix: K;
  body: Array<string>;
  description: string;
};

export type TypescriptMappings = {
  typescriptReactArrowFunctionComponent: "tsrafc";
  typescriptReactArrowFunctionExportComponent: "tsrafce";
  typescriptReactClassComponent: "tsrcc";
  typescriptReactClassComponentRedux: "tsrcredux";
  typescriptReactClassExportComponent: "tsrce";
  typescriptReactClassExportPureComponent: "tsrpce";
  typescriptReactClassPureComponent: "tsrpc";
  typescriptReactFunctionMemoComponent: "tsrmc";
  typescriptReactFunctionalComponent: "tsrfc";
  typescriptReactFunctionalExportComponent: "tsrfce";
  typescriptReactNativeArrowFunctionComponent: "tsrnf";
  typescriptReactNativeArrowFunctionComponentNamedProps: "tsrnfi";
  typescriptReactNativeArrowFunctionComponentWithStyles: "tsrnfs";
  exportInterface: "expint";
  exportType: "exptp";
};

export type TypescriptSnippets = SnippetMapping<
  keyof TypescriptMappings,
  TypescriptMappings[keyof TypescriptMappings]
>;
