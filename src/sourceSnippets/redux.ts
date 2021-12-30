import { SnippetPlaceholders, SnippetMapping } from "../types";

type HookMappings = {
  importReduxConnect: "redux";
  reduxAction: "rxaction";
  reduxConst: "rxconst";
  reduxReducer: "rxreducer";
  reduxSelector: "rxselect";
  reduxSlice: "rxslice";
  mappingToProps: "reduxmap";
};

export type ReduxSnippet = SnippetMapping<HookMappings>;

const importReduxConnect: ReduxSnippet = {
  key: "importReduxConnect",
  prefix: "redux",
  body: ["import { connect } from 'react-redux'", ""],
};

const reduxAction: ReduxSnippet = {
  key: "reduxAction",
  prefix: "rxaction",
  body: [
    `export const ${SnippetPlaceholders.FirstTab} = (payload) => ({`,
    `  type: ${SnippetPlaceholders.SecondTab},`,
    "  payload",
    "})",
    "",
  ],
};

const reduxConst: ReduxSnippet = {
  key: "reduxConst",
  prefix: "rxconst",
  body: [
    `export const ${SnippetPlaceholders.FirstTab} = '${SnippetPlaceholders.FirstTab}'`,
  ],
};

const reduxReducer: ReduxSnippet = {
  key: "reduxReducer",
  prefix: "rxreducer",
  body: [
    "const initialState = {}",
    "",
    "export default (state = initialState, { type, payload }) => {",
    "  switch (type) {",
    "",
    `  case ${SnippetPlaceholders.FirstTab}:`,
    "    return { ...state, ...payload }",
    "",
    "  default:",
    "    return state",
    "  }",
    "}",
    "",
  ],
};

const reduxSelector: ReduxSnippet = {
  key: "reduxSelector",
  prefix: "rxselect",
  body: [
    "import { createSelector } from 'reselect'",
    "",
    `export const ${SnippetPlaceholders.FirstTab} = state => state.${SnippetPlaceholders.SecondTab}`,
    "",
  ],
};

const reduxSlice: ReduxSnippet = {
  key: "reduxSlice",
  prefix: "rxslice",
  body: [
    "import { createSlice } from '@reduxjs/toolkit'",
    "",
    "const initialState = {",
    "",
    "}",
    "",
    `const ${SnippetPlaceholders.FileName} = createSlice({`,
    `  name: ${SnippetPlaceholders.SecondTab},`,
    "  initialState,",
    "  reducers: {}",
    "});",
    "",
    `export const {} = ${SnippetPlaceholders.FileName}.actions`,
    "",
    `export default ${SnippetPlaceholders.FileName}.reducer`,
  ],
};

const mappingToProps: ReduxSnippet = {
  key: "mappingToProps",
  prefix: "reduxmap",
  body: [
    "const mapStateToProps = (state) => ({})",
    "",
    "const mapDispatchToProps = {}",
    "",
  ],
};

export default [
  importReduxConnect,
  reduxAction,
  reduxConst,
  reduxReducer,
  reduxSelector,
  reduxSlice,
  mappingToProps,
];
