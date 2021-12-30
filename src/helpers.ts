import prettier, { Options } from "prettier";
import { workspace } from "vscode";
import { SnippetPlaceholders } from "./types";

export type ExtensionSettings = {
  prettierEnabled: boolean;
  semiColons: boolean;
  importReactOnTop: boolean;
  quotes: boolean;
  typescript: boolean;
  tabWidth: number;
  typescriptComponentPropsStatePrefix: "type" | "interface";
};

export const replaceSnippetPlaceholders = (
  snippetString: string,
  extensionConfig: ExtensionSettings,
) =>
  String(snippetString)
    .replace(
      new RegExp(SnippetPlaceholders.FileName, "g"),
      "${1:${TM_FILENAME_BASE}}",
    )
    .replace(new RegExp(SnippetPlaceholders.FirstTab, "g"), "${1:first}")
    .replace(new RegExp(SnippetPlaceholders.SecondTab, "g"), "${2:second}")
    .replace(new RegExp(SnippetPlaceholders.ThirdTab, "g"), "${3:third}")
    .replace(new RegExp(SnippetPlaceholders.LastTab, "g"), "$0")
    .replace(
      new RegExp(SnippetPlaceholders.TypeInterface, "g"),
      extensionConfig.typescriptComponentPropsStatePrefix || "type",
    );

export const revertSnippetPlaceholders = (snippetString: string) =>
  String(snippetString)
    .replace(
      new RegExp(/\${1:${TM_FILENAME_BASE}}/, "g"),
      SnippetPlaceholders.FileName,
    )
    .replace(new RegExp(/\${1:first}/, "g"), SnippetPlaceholders.FirstTab)
    .replace(new RegExp(/\${2:second}/, "g"), SnippetPlaceholders.SecondTab)
    .replace(new RegExp(/\${3:third}/, "g"), SnippetPlaceholders.ThirdTab)
    .replace(new RegExp(/\$0/, "g"), SnippetPlaceholders.LastTab);

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
    tabWidth: settings.tabWidth,
    ...(settings.prettierEnabled && prettierConfig),
  };
};

export const parseSnippet = async (snippet: {
  id: number;
  description: any;
  label: string;
  value: string;
  body: string | string[];
}) => {
  const workspaceConfig = workspace.getConfiguration(
    "esReactSnippets",
  ) as unknown as ExtensionSettings;
  const snippetBody =
    typeof snippet.body === "string" ? snippet.body : snippet.body.join("\n");

  const prettierConfig = await getPrettierConfig();
  const parsedBody = prettier.format(
    revertSnippetPlaceholders(snippetBody),
    prettierConfig,
  );

  console.log(
    parsedBody,
    replaceSnippetPlaceholders(parsedBody, workspaceConfig),
  );

  return replaceSnippetPlaceholders(parsedBody, workspaceConfig);
};
