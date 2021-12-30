import { workspace } from "vscode";
import { writeFileSync } from "fs";

import hooks, { HooksSnippet } from "./sourceSnippets/hooks";
import imports, { ImportsSnippet } from "./sourceSnippets/imports";
import reactNative, { ReactNativeSnippet } from "./sourceSnippets/reactNative";
import typescript, { TypescriptSnippet } from "./sourceSnippets/typescript";
import { ExtensionSettings } from "./helpers";
import redux, { ReduxSnippet } from "./sourceSnippets/redux";
import components, { ComponentsSnippet } from "./sourceSnippets/components";
import console, { ConsoleSnippet } from "./sourceSnippets/console";
import propTypes, { PropTypesSnippet } from "./sourceSnippets/propTypes";
import tests, { TestsSnippet } from "./sourceSnippets/tests";

type SnippetsArray = Array<
  | HooksSnippet
  | ImportsSnippet
  | ReactNativeSnippet
  | TypescriptSnippet
  | ReduxSnippet
  | ComponentsSnippet
  | ConsoleSnippet
  | PropTypesSnippet
  | TestsSnippet
>;

const generateSnippets = () => {
  const config = workspace.getConfiguration(
    "esReactSnippets",
  ) as unknown as ExtensionSettings;

  const snippets: SnippetsArray = [
    ...components,
    ...console,
    ...hooks,
    ...imports,
    ...propTypes,
    ...reactNative,
    ...redux,
    ...tests,
    ...(config.typescript ? typescript : []),
  ];

  writeFileSync("./snippets/generated.json", JSON.stringify(snippets, null, 2));
};

export default generateSnippets;
