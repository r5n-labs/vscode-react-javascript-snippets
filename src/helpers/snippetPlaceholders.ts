import {
  GenerationSettings,
  Mappings,
  Placeholders,
} from '../types';

export const replaceSnippetPlaceholders = (
  snippetString: string,
  settings: GenerationSettings,
): string => {
  const { componentWrapper, typescriptPropsStatePrefix } = settings;
  const propsPlaceholder =
    typescriptPropsStatePrefix === 'type'
      ? Mappings.TypeProps
      : Mappings.InterfaceProps;
  const statePlaceholder =
    typescriptPropsStatePrefix === 'type'
      ? Mappings.TypeState
      : Mappings.InterfaceState;
  const componentWrapperPlaceholder =
    componentWrapper === 'fragment'
      ? Mappings.FragmentComponentWrapper
      : Mappings.DivComponentWrapper;

  return String(snippetString)
    .replaceAll(Placeholders.FileName, Mappings.FileName)
    .replaceAll(Placeholders.ComponentWrapper, componentWrapperPlaceholder)
    .replaceAll(Placeholders.FirstTab, Mappings.FirstTab)
    .replaceAll(Placeholders.SecondTab, Mappings.SecondTab)
    .replaceAll(Placeholders.ThirdTab, Mappings.ThirdTab)
    .replaceAll(Placeholders.Capitalize, Mappings.Capitalize)
    .replaceAll(Placeholders.TypeProps, propsPlaceholder)
    .replaceAll(Placeholders.TypeState, statePlaceholder)
    .replaceAll(Placeholders.FourthTabCapitalize, Mappings.FourthTabCapitalize);
};
