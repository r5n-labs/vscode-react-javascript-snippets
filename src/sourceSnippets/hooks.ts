import { SnippetMapping, SnippetPlaceholders } from '../types';

type HookMappings = {
  useCallback: 'useCallbackSnippet';
  useContext: 'useContextSnippet';
  useEffect: 'useEffectSnippet';
  useImperativeHandle: 'useImperativeHandleSnippet';
  useLayoutEffect: 'useLayoutEffectSnippet';
  useMemo: 'useMemoSnippet';
  useReducer: 'useReducerSnippet';
  useRef: 'useRefSnippet';
  useState: 'useStateSnippet';
};

export type HooksSnippet = SnippetMapping<HookMappings>;

const useState: HooksSnippet = {
  key: 'useState',
  prefix: 'useStateSnippet',
  body: [
    `const [${SnippetPlaceholders.FirstTab}, set${SnippetPlaceholders.FirstTab}/(.*)/${SnippetPlaceholders.FirstTab}:/capitalize}/}] = useState(${SnippetPlaceholders.SecondTab})`,
  ],
};

const useEffect: HooksSnippet = {
  key: 'useEffect',
  prefix: 'useEffectSnippet',
  body: [
    'useEffect(() => {',
    `  ${SnippetPlaceholders.FirstTab}`,
    '',
    '  return () => {',
    `    ${SnippetPlaceholders.SecondTab}`,
    '  }',
    `}, [${SnippetPlaceholders.ThirdTab}])`,
    '',
  ],
};

const useContext: HooksSnippet = {
  key: 'useContext',
  prefix: 'useContextSnippet',
  body: [
    `const ${SnippetPlaceholders.FirstTab} = useContext(${SnippetPlaceholders.SecondTab})`,
  ],
};

const useReducer: HooksSnippet = {
  key: 'useReducer',
  prefix: 'useReducerSnippet',
  body: [
    `const [state, dispatch] = useReducer(${SnippetPlaceholders.FirstTab}, ${SnippetPlaceholders.SecondTab}, ${SnippetPlaceholders.ThirdTab})`,
  ],
};

const useCallback: HooksSnippet = {
  key: 'useCallback',
  prefix: 'useCallbackSnippet',
  body: [
    'useCallback(',
    '  () => {',
    `    ${SnippetPlaceholders.FirstTab}`,
    '  },',
    `  [${SnippetPlaceholders.SecondTab}],`,
    ')',
    '',
  ],
};

const useMemo: HooksSnippet = {
  key: 'useMemo',
  prefix: 'useMemoSnippet',
  body: [
    `useMemo(() => ${SnippetPlaceholders.FirstTab}, ${SnippetPlaceholders.SecondTab})`,
  ],
};

const useRef: HooksSnippet = {
  key: 'useRef',
  prefix: 'useRefSnippet',
  body: [
    `const ${SnippetPlaceholders.FirstTab} = useRef(${SnippetPlaceholders.SecondTab})`,
  ],
};

const useImperativeHandle: HooksSnippet = {
  key: 'useImperativeHandle',
  prefix: 'useImperativeHandleSnippet',
  body: [
    'useImperativeHandle(',
    `  ${SnippetPlaceholders.FirstTab},`,
    '  () => {',
    `    ${SnippetPlaceholders.SecondTab}`,
    '  },',
    `  [${SnippetPlaceholders.ThirdTab}],`,
    ')',
  ],
};

const useLayoutEffect: HooksSnippet = {
  key: 'useLayoutEffect',
  prefix: 'useLayoutEffectSnippet',
  body: [
    'useLayoutEffect(() => {',
    `  ${SnippetPlaceholders.FirstTab}`,
    '  return () => {',
    `    ${SnippetPlaceholders.SecondTab}`,
    '  };',
    `}, [${SnippetPlaceholders.ThirdTab}])`,
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
