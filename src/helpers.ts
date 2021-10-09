import prettier, { Options } from "prettier";
import { workspace } from "vscode";

export type ExtensionSettings = {
  prettierEnabled: boolean;
  semiColons: boolean;
  importReactOnTop: boolean;
  quotes: boolean;
  typescript: boolean;
  tabWidth: number;
  componentPropsPrefix: "type" | "interface";
};

export const convertSnippetArrayToString = (snippetArray: Array<string>) => snippetArray.join("\n");

export const getPrettierConfig = async (): Promise<Options> => {
  const settings = workspace.getConfiguration(
    "esReactSnippets.settings",
  ) as unknown as ExtensionSettings;

  const prettierConfig = await prettier.resolveConfig("");

  return {
    semi: settings.semiColons,
    singleQuote: settings.quotes,
    tabWidth: 2,
    parser: "typescript",
    ...(settings.prettierEnabled && prettierConfig),
  };
};
