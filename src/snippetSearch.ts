import { SnippetString, window } from "vscode";
import prettier from "prettier";

import { convertSnippetArrayToString, getPrettierConfig } from "./helpers";
import jsSnippets from "./snippets/snippets.json";
import tsSnippets from "./snippets/ts-snippets.json";

const snippetSearch = async () => {
  const { showQuickPick, activeTextEditor } = window;

  const javascriptSnippets = Object.entries(jsSnippets);
  const typescriptSnippets = Object.entries(tsSnippets);
  const snippetsArray = javascriptSnippets.concat(typescriptSnippets);

  const items = snippetsArray.map(
    // @ts-expect-error
    ([shortDescription, { prefix, body, description }], index) => {
      const value = typeof prefix === "string" ? prefix : prefix[0];

      return {
        id: index,
        description: description || shortDescription,
        label: value,
        value,
        body,
      };
    },
  );

  const options = {
    matchOnDescription: true,
    matchOnDetail: true,
    placeHolder: "Search snippet",
  };

  const snippet = (await showQuickPick(items, options)) || {
    body: "",
  };

  const body =
    typeof snippet.body === "string" ? snippet.body : convertSnippetArrayToString(snippet.body);

  if (activeTextEditor) {
    const config = await getPrettierConfig();
    const parsedBody = prettier.format(body, config);
    console.log(JSON.stringify(parsedBody), JSON.stringify(body));

    activeTextEditor.insertSnippet(new SnippetString(body));
  }
};

export default snippetSearch;
