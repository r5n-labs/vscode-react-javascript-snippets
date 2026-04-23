import { Placeholders, SnippetMapping } from '../types';

type ReduxMapping = {
  importReduxConnect: 'redux';
  reduxAction: 'rxaction';
  reduxApi: 'rxapi';
  reduxAsyncThunk: 'rxthunk';
  reduxConst: 'rxconst';
  reduxReducer: 'rxreducer';
  reduxSelector: 'rxselect';
  reduxSlice: 'rxslice';
  reduxSliceWithExtraReducers: 'rxslicex';
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

const reduxSliceWithExtraReducers: ReduxSnippet = {
  key: 'reduxSliceWithExtraReducers',
  prefix: 'rxslicex',
  body: [
    "import { createSlice } from '@reduxjs/toolkit'",
    '',
    'const initialState = {',
    `  ${Placeholders.FirstTab}`,
    '  status: \'idle\',',
    '}',
    '',
    `const ${Placeholders.FileName} = createSlice({`,
    `  name: '${Placeholders.SecondTab}',`,
    '  initialState,',
    '  reducers: {},',
    '  extraReducers: (builder) => {',
    '    builder',
    `      .addCase(${Placeholders.ThirdTab}.pending, (state) => {`,
    "        state.status = 'loading'",
    '      })',
    `      .addCase(${Placeholders.ThirdTab}.fulfilled, (state, action) => {`,
    "        state.status = 'succeeded'",
    '      })',
    `      .addCase(${Placeholders.ThirdTab}.rejected, (state) => {`,
    "        state.status = 'failed'",
    '      })',
    '  },',
    '})',
    '',
    `export const {} = ${Placeholders.FileName}.actions`,
    '',
    `export default ${Placeholders.FileName}.reducer`,
  ],
};

const reduxAsyncThunk: ReduxSnippet = {
  key: 'reduxAsyncThunk',
  prefix: 'rxthunk',
  body: [
    "import { createAsyncThunk } from '@reduxjs/toolkit'",
    '',
    `export const ${Placeholders.FirstTab} = createAsyncThunk('${Placeholders.SecondTab}', async () => {`,
    `  ${Placeholders.ThirdTab}`,
    '})',
  ],
};

const reduxApi: ReduxSnippet = {
  key: 'reduxApi',
  prefix: 'rxapi',
  body: [
    "import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'",
    '',
    `export const ${Placeholders.FirstTab}Api = createApi({`,
    `  reducerPath: '${Placeholders.FirstTab}Api',`,
    `  baseQuery: fetchBaseQuery({ baseUrl: '${Placeholders.SecondTab}' }),`,
    '  endpoints: (builder) => ({',
    `    ${Placeholders.ThirdTab}: builder.query({`,
    "      query: () => '/',",
    '    }),',
    '  }),',
    '})',
    '',
    `export const { } = ${Placeholders.FirstTab}Api`,
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
  reduxApi,
  reduxAsyncThunk,
  reduxConst,
  reduxReducer,
  reduxSelector,
  reduxSlice,
  reduxSliceWithExtraReducers,
  mappingToProps,
];
