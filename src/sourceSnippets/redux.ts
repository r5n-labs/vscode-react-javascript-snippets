import { Placeholders, SnippetMapping } from '../types';

type ReduxMapping = {
  importReduxConnect: 'redux';
  reduxAction: 'rxaction';
  reduxConst: 'rxconst';
  reduxReducer: 'rxreducer';
  reduxSelector: 'rxselect';
  reduxSlice: 'rxslice';
  reduxApiSlice: 'rxapislice';
  mappingToProps: 'reduxmap';
};

export type ReduxSnippet = SnippetMapping<ReduxMapping>;

const importReduxConnect: ReduxSnippet = {
  key: 'importReduxConnect',
  prefix: 'redux',
  body: ["import { connect } from 'react-redux'"],
};

const reduxAction: ReduxSnippet = {
  key: 'reduxAction',
  prefix: 'rxaction',
  body: [
    `export const ${Placeholders.FirstTab} = (payload) => ({`,
    `  type: ${Placeholders.SecondTab},`,
    '  payload',
    '})',
    '',
  ],
};

const reduxConst: ReduxSnippet = {
  key: 'reduxConst',
  prefix: 'rxconst',
  body: [`export const ${Placeholders.FirstTab} = '${Placeholders.FirstTab}'`],
};

const reduxReducer: ReduxSnippet = {
  key: 'reduxReducer',
  prefix: 'rxreducer',
  body: [
    'const initialState = {}',
    '',
    'export default (state = initialState, { type, payload }) => {',
    '  switch (type) {',
    '',
    `  case ${Placeholders.FirstTab}:`,
    '    return { ...state, ...payload }',
    '',
    '  default:',
    '    return state',
    '  }',
    '}',
    '',
  ],
};

const reduxSelector: ReduxSnippet = {
  key: 'reduxSelector',
  prefix: 'rxselect',
  body: [
    "import { createSelector } from 'reselect'",
    '',
    `export const ${Placeholders.FirstTab} = state => state.${Placeholders.SecondTab}`,
  ],
};

const reduxSlice: ReduxSnippet = {
  key: 'reduxSlice',
  prefix: 'rxslice',
  body: [
    "import { createSlice } from '@reduxjs/toolkit'",
    '',
    'const initialState = {',
    '',
    '}',
    '',
    `const ${Placeholders.FileName} = createSlice({`,
    `  name: ${Placeholders.SecondTab},`,
    '  initialState,',
    '  reducers: {}',
    '});',
    '',
    `export const {} = ${Placeholders.FileName}.actions`,
    '',
    `export default ${Placeholders.FileName}.reducer`,
  ],
};

const reduxApiSlice: ReduxSnippet = {
  key: 'reduxApiSlice',
  prefix: 'rxapislice',
  body: [
    "import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'",
    '',
    `export const ${Placeholders.FileName} = createApi({`,
    "baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),",
    "reducerPath: 'reducerPath',",
    "tagTypes: ['Tag'],",
    'endpoints: build => ({',
    '    get: build.query({',
    '        query: (searchParam) => ({',
    '            url: `?search=${searchParam}`',
    '           headers: {',
    '            }',
    '        }),',
    '    }),',
    '    post: build.mutation({',
    '        query: payload => ({',
    "            url: '/',",
    "            method: 'POST',",
    '            headers: {',
    "                'Content-Type': 'application/json'",
    '            },',
    '            body: payload',
    '        }),',
    "        invalidatesTags: (result, error) => [{type: 'Tag'}]",
    '       })',
    '   })',
    '})',
    `export const {useGetQuery, usePostMutation} = ${Placeholders.FileName}`,
  ],
};

const mappingToProps: ReduxSnippet = {
  key: 'mappingToProps',
  prefix: 'reduxmap',
  body: [
    'const mapStateToProps = (state) => ({})',
    '',
    'const mapDispatchToProps = {}',
  ],
};

export default [
  importReduxConnect,
  reduxAction,
  reduxConst,
  reduxReducer,
  reduxSelector,
  reduxSlice,
  reduxApiSlice,
  mappingToProps,
];
