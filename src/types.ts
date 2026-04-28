export type SnippetMapping<T> = {
  key: keyof T;
  prefix: T[keyof T];
  body: string[];
  description?: string;
};

export const Placeholders = {
  FileName: 'file',
  FirstTab: 'first',
  SecondTab: 'second',
  ThirdTab: 'third',
  Capitalize: 'capitalize',
  TypeProps: 'typeProps',
  TypeState: 'typeState',
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
