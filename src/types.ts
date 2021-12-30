export type SnippetMapping<T> = {
  key: keyof T;
  prefix: T[keyof T];
  body: Array<string>;
  description?: string;
};

export enum SnippetPlaceholders {
  FileName = "FILE_NAME",
  FirstTab = "FIRST_TAB",
  SecondTab = "SECOND_TAB",
  ThirdTab = "THIRD_TAB",
  LastTab = "LAST_TAB",
  TypeInterface = "TYPE_INTERFACE",
}

export const SnippetPlaceholderMapping: {
  [key in SnippetPlaceholders]: string;
} = {
  [SnippetPlaceholders.FileName]: "${1:TM_FILENAME_BASE}",
  [SnippetPlaceholders.FirstTab]: "$1",
  [SnippetPlaceholders.SecondTab]: "$2",
  [SnippetPlaceholders.ThirdTab]: "$3",
  [SnippetPlaceholders.LastTab]: "$0",
  [SnippetPlaceholders.TypeInterface]: "TYPE_INTERFACE",
};
