export type SnippetMapping<T> = {
  key: keyof T;
  prefix: T[keyof T];
  body: string[];
  description?: string;
};

export enum SnippetPlaceholders {
  FileName = 'FILE_NAME',
  FirstTab = 'FIRST_TAB',
  SecondTab = 'SECOND_TAB',
  ThirdTab = 'THIRD_TAB',
  LastTab = 'LAST_TAB',
  TypeInterface = 'TYPE_INTERFACE',
}
