import { Mappings, Placeholders } from '../types';

import extensionConfig from './extensionConfig';

export const replaceSnippetPlaceholders = (snippetString: string) => {
  const { typescriptPropsStatePrefix } = extensionConfig();
  const propsPlaceholder =
    typescriptPropsStatePrefix === 'type'
      ? Mappings.TypeProps
      : Mappings.InterfaceProps;
  const statePlaceholder =
    typescriptPropsStatePrefix === 'type'
      ? Mappings.TypeState
      : Mappings.InterfaceState;

  return String(snippetString)
    .replace(new RegExp(Placeholders.FileName, 'g'), '${1:${TM_FILENAME_BASE}}')
    .replace(new RegExp(Placeholders.FirstTab, 'g'), '${1:first}')
    .replace(new RegExp(Placeholders.SecondTab, 'g'), '${2:second}')
    .replace(new RegExp(Placeholders.ThirdTab, 'g'), '${3:third}')
    .replace(
      new RegExp(Placeholders.Capitalize, 'g'),
      '${1/(.*)/${1:/capitalize}/}',
    )
    .replace(new RegExp(Placeholders.TypeProps, 'g'), propsPlaceholder)
    .replace(new RegExp(Placeholders.TypeState, 'g'), statePlaceholder);
};

export const revertSnippetPlaceholders = (snippetString: string) => {
  return String(snippetString)
    .replace(
      new RegExp(/\${1:\${TM_FILENAME_BASE}}/, 'g'),
      Placeholders.FileName,
    )
    .replace(new RegExp(/\${1:first}/, 'g'), Placeholders.FirstTab)
    .replace(new RegExp(/\${2:second}/, 'g'), Placeholders.SecondTab)
    .replace(new RegExp(/\${3:third}/, 'g'), Placeholders.ThirdTab)
    .replace(
      new RegExp(/\${1\/(.*)\/${1:\/capitalize}\/}/, 'g'),
      Placeholders.Capitalize,
    );
};
export default revertSnippetPlaceholders;
