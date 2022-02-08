export type SnippetMapping<T> = {
  key: keyof T;
  prefix: T[keyof T];
  body: string[];
  description?: string;
};

export const Placeholders = {
  FileName: 'FILE_NAME',
  FirstTab: 'FIRST_TAB',
  SecondTab: 'SECOND_TAB',
  ThirdTab: 'THIRD_TAB',
  Capitalize: 'CAPITALIZE',
  TypeProps: 'TYPE_PROPS',
  TypeState: 'TYPE_STATE',
} as const;

export const Mappings = {
  FileName: '${1:${TM_FILENAME_BASE}}',
  FirstTab: '${1:first}',
  SecondTab: '${2:second}',
  ThirdTab: '${3:third}',
  Capitalize: '${1/(.*)/${1:/capitalize}/}',
  TypeProps: 'type Props = {}',
  TypeState: 'type State = {}',
  InterfaceProps: 'interface Props {}',
  InterfaceState: 'interface State {}',
} as const;
