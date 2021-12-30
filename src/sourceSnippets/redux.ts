import { SnippetMapping } from "../types";

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
    "export const ${1:actionName} = (payload) => ({",
    "  type: ${3:type},",
    "  payload",
    "})",
    "",
  ],
};

const reduxConst: ReduxSnippet = {
  key: "reduxConst",
  prefix: "rxconst",
  body: ["export const ${1:constantName} = '${1:constantName}'"],
};

const reduxReducer: ReduxSnippet = {
  key: "reduxReducer",
  prefix: "rxreducer",
  body: [
    "const initialState = {",
    "",
    "}",
    "",
    "export default (state = initialState, { type, payload }) => {",
    "  switch (type) {",
    "",
    "  case ${1:typeName}:",
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
    "export const ${1:selectorName} = state => state.${2:selector}",
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
    "const ${1:${TM_FILENAME_BASE}} = createSlice({",
    "  name: ${2:sliceName},",
    "  initialState,",
    "  reducers: {",
    "  ",
    "  }",
    "});",
    "",
    "export const {",
    "",
    "} = ${1:${TM_FILENAME_BASE}}.actions",
    "export default ${1:${TM_FILENAME_BASE}}.reducer",
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
