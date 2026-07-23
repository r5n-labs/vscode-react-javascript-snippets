import { GenerationSettings, Mappings, Placeholders } from '../types';

const propsPlaceholders = {
  generic: {
    type: Mappings.TypeProps,
    interface: Mappings.InterfaceProps,
  },
  component: {
    type: Mappings.ComponentTypeProps,
    interface: Mappings.ComponentInterfaceProps,
  },
} as const;

export const replaceSnippetPlaceholders = (
  snippetString: string,
  settings: GenerationSettings,
): string => {
  const {
    componentWrapper,
    typescriptPropsNaming,
    typescriptPropsStatePrefix,
  } = settings;
  const propsPlaceholder =
    propsPlaceholders[typescriptPropsNaming][typescriptPropsStatePrefix];
  const propsName =
    typescriptPropsNaming === 'component'
      ? Mappings.ComponentProps
      : Mappings.Props;
  const statePlaceholder =
    typescriptPropsStatePrefix === 'type'
      ? Mappings.TypeState
      : Mappings.InterfaceState;
  const componentWrapperPlaceholder =
    componentWrapper === 'fragment'
      ? Mappings.FragmentComponentWrapper
      : Mappings.DivComponentWrapper;

  return String(snippetString)
    .replaceAll(Placeholders.TypeProps, propsPlaceholder)
    .replaceAll(Placeholders.TypeState, statePlaceholder)
    .replaceAll(Placeholders.ComponentProps, propsName)
    .replaceAll(Placeholders.FileName, Mappings.FileName)
    .replaceAll(Placeholders.ComponentWrapper, componentWrapperPlaceholder)
    .replaceAll(Placeholders.FirstTab, Mappings.FirstTab)
    .replaceAll(Placeholders.SecondTab, Mappings.SecondTab)
    .replaceAll(Placeholders.ThirdTab, Mappings.ThirdTab)
    .replaceAll(Placeholders.Capitalize, Mappings.Capitalize)
    .replaceAll(Placeholders.FourthTabCapitalize, Mappings.FourthTabCapitalize);
};
