import { SnippetMapping } from "../types";

type HookMappings = {
  useCallback: "useCallbackSnippet";
  useContext: "useContextSnippet";
  useEffect: "useEffectSnippet";
  useImperativeHandle: "useImperativeHandleSnippet";
  useLayoutEffect: "useLayoutEffectSnippet";
  useMemo: "useMemoSnippet";
  useReducer: "useReducerSnippet";
  useRef: "useRefSnippet";
  useState: "useStateSnippet";
};

export type HooksSnippet = SnippetMapping<HookMappings>;

const useState: HooksSnippet = {
  key: "useState",
  prefix: "useStateSnippet",
  body: [
    "const [${1:state}, set${1/(.*)/${1:/capitalize}/}] = useState(${2:initialState})",
  ],
};

const useEffect: HooksSnippet = {
  key: "useEffect",
  prefix: "useEffectSnippet",
  body: [
    "useEffect(() => {",
    "  ${1:effect}",
    "",
    "  return () => {",
    "    ${2:cleanup}",
    "  }",
    "}, [${3:input}])",
    "",
  ],
};

const useContext: HooksSnippet = {
  key: "useContext",
  prefix: "useContextSnippet",
  body: ["const ${1:context} = useContext(${2:contextValue})"],
};

const useReducer: HooksSnippet = {
  key: "useReducer",
  prefix: "useReducerSnippet",
  body: [
    "const [state, dispatch] = useReducer(${1:reducer}, ${2:initialState}, ${3:init})",
  ],
};

const useCallback: HooksSnippet = {
  key: "useCallback",
  prefix: "useCallbackSnippet",
  body: [
    "useCallback(",
    "  () => {",
    "    ${1:callback}",
    "  },",
    "  [${2:input}],",
    ")",
    "",
  ],
};

const useMemo: HooksSnippet = {
  key: "useMemo",
  prefix: "useMemoSnippet",
  body: ["useMemo(() => ${1:function}, ${2:input})"],
};

const useRef: HooksSnippet = {
  key: "useRef",
  prefix: "useRefSnippet",
  body: ["const ${1:ref} = useRef(${2:initialValue})"],
};

const useImperativeHandle: HooksSnippet = {
  key: "useImperativeHandle",
  prefix: "useImperativeHandleSnippet",
  body: [
    "useImperativeHandle(",
    "  ${1:ref},",
    "  () => {",
    "    ${2:handler}",
    "  },",
    "  [${3:input}],",
    ")",
  ],
};

const useLayoutEffect: HooksSnippet = {
  key: "useLayoutEffect",
  prefix: "useLayoutEffectSnippet",
  body: [
    "useLayoutEffect(() => {",
    "  ${1:effect}",
    "  return () => {",
    "    ${2:cleanup}",
    "  };",
    "}, [${3:input}])",
  ],
};

export default [
  useState,
  useEffect,
  useContext,
  useReducer,
  useCallback,
  useMemo,
  useRef,
  useImperativeHandle,
  useLayoutEffect,
];
