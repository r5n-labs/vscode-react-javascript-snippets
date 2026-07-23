export type SnippetMapping<T> = {
  key: keyof T;
  prefix: T[keyof T];
  body: string[];
  description?: string;
  scope?: string;
};

export const VALID_LANGUAGE_SCOPES = [
  'typescript',
  'typescriptreact',
  'javascript',
  'javascriptreact',
] as const;

export type LanguageScope = (typeof VALID_LANGUAGE_SCOPES)[number];

export type ComponentWrapper = 'fragment' | 'div';
export type ComponentNameSource = 'filename' | 'directoryForIndex';
export type TypescriptPropsNaming = 'generic' | 'component';

export type GenerationSettings = {
  readonly languageScopes: string;
  readonly importReactOnTop: boolean;
  readonly typescript: boolean;
  readonly typescriptPropsStatePrefix: 'type' | 'interface';
  readonly typescriptPropsNaming: TypescriptPropsNaming;
  readonly componentNameSource: ComponentNameSource;
  readonly componentWrapper: ComponentWrapper;
};

export const DEFAULT_GENERATION_SETTINGS: GenerationSettings = {
  languageScopes: VALID_LANGUAGE_SCOPES.join(','),
  importReactOnTop: false,
  typescript: true,
  typescriptPropsStatePrefix: 'type',
  typescriptPropsNaming: 'generic',
  componentNameSource: 'filename',
  componentWrapper: 'fragment',
};

export const Placeholders = {
  FileName: 'file',
  ComponentName: 'componentName',
  FirstTab: 'first',
  SecondTab: 'second',
  ThirdTab: 'third',
  Capitalize: 'capitalize',
  TypeProps: 'typeProps',
  TypeState: 'typeState',
  ComponentProps: 'componentProps',
  ComponentWrapper: 'componentWrapper',
  FourthTabCapitalize: 'fourthTabCapitalize',
} as const;

export const Mappings = {
  FileName: '${1:${TM_FILENAME_BASE}}',
  DirectoryNameForIndex:
    '${1:${TM_FILEPATH/.*?[\\\\/](?:([^\\\\/]+)[\\\\/]index|([^\\\\/]+?))(?:\\.[^\\\\/.]+)?$/${1}${2}/}}',
  FirstTab: '${2:first}',
  SecondTab: '${3:second}',
  ThirdTab: '${4:third}',
  Capitalize: '${2/(.*)/${1:/capitalize}/}',
  TypeProps: 'type Props = {}',
  ComponentTypeProps: 'type componentNameProps = {}',
  TypeState: 'type State = {}',
  InterfaceProps: 'interface Props {}',
  ComponentInterfaceProps: 'interface componentNameProps {}',
  InterfaceState: 'interface State {}',
  Props: 'Props',
  ComponentProps: 'componentNameProps',
  FragmentComponentWrapper: '<>first</>',
  DivComponentWrapper: '<div>first</div>',
  FourthTabCapitalize: '${4/(.*)/${1:/capitalize}/}',
} as const;
