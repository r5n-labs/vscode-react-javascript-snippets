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

export const getPrettierConfig = async (): Promise<Options> => {
  const settings = workspace.getConfiguration(
    "esReactSnippets.settings",
  ) as unknown as ExtensionSettings;

  const prettierConfig = await prettier.resolveConfig("", {
    editorconfig: true,
  });

  return {
    semi: settings.semiColons,
    singleQuote: settings.quotes,
    tabWidth: 2,
    ...(settings.prettierEnabled && prettierConfig),
  };
};

export const parseSnippet = (snippet: {
  id: number;
  description: any;
  label: string;
  value: string;
  body: string | string[];
}) => {
  return typeof snippet.body === "string"
    ? snippet.body
    : snippet.body.join("\n");
};
