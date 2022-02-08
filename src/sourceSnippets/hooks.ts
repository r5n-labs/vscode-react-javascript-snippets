import { Placeholders, SnippetMapping } from '../types';

type HookMappings = {
  useState: 'useStateSnippet';
  useCallback: 'useCallbackSnippet';
  useContext: 'useContextSnippet';
  useEffect: 'useEffectSnippet';
  useImperativeHandle: 'useImperativeHandleSnippet';
  useLayoutEffect: 'useLayoutEffectSnippet';
  useMemo: 'useMemoSnippet';
  useReducer: 'useReducerSnippet';
  useRef: 'useRefSnippet';
};

export type HooksSnippet = SnippetMapping<HookMappings>;

const useEffect: HooksSnippet = {
  key: 'useEffect',
  prefix: 'useEffectSnippet',
  body: [
    'useEffect(() => {',
    `  ${Placeholders.FirstTab}`,
    '',
    '  return () => {',
    `    ${Placeholders.SecondTab}`,
    '  }',
    `}, [${Placeholders.ThirdTab}])`,
    '',
  ],
};

const useContext: HooksSnippet = {
  key: 'useContext',
  prefix: 'useContextSnippet',
  body: [
    `const ${Placeholders.FirstTab} = useContext(${Placeholders.SecondTab})`,
  ],
};

const useState: HooksSnippet = {
  key: 'useState',
  prefix: 'useStateSnippet',
  body: [
    `const [${Placeholders.FirstTab}, set${Placeholders.Capitalize}] = useState(${Placeholders.SecondTab})`,
  ],
};

const useReducer: HooksSnippet = {
  key: 'useReducer',
  prefix: 'useReducerSnippet',
  body: [
    `const [state, dispatch] = useReducer(${Placeholders.FirstTab}, ${Placeholders.SecondTab}, ${Placeholders.ThirdTab})`,
  ],
};

const useCallback: HooksSnippet = {
  key: 'useCallback',
  prefix: 'useCallbackSnippet',
  body: [
    'useCallback(',
    '  () => {',
    `    ${Placeholders.FirstTab}`,
    '  },',
    `  [${Placeholders.SecondTab}],`,
    ')',
    '',
  ],
};

const useMemo: HooksSnippet = {
  key: 'useMemo',
  prefix: 'useMemoSnippet',
  body: [
    `useMemo(() => ${Placeholders.FirstTab}, [${Placeholders.SecondTab}])`,
  ],
};

const useRef: HooksSnippet = {
  key: 'useRef',
  prefix: 'useRefSnippet',
  body: [`const ${Placeholders.FirstTab} = useRef(${Placeholders.SecondTab})`],
};

const useImperativeHandle: HooksSnippet = {
  key: 'useImperativeHandle',
  prefix: 'useImperativeHandleSnippet',
  body: [
    'useImperativeHandle(',
    `  ${Placeholders.FirstTab},`,
    '  () => {',
    `    ${Placeholders.SecondTab}`,
    '  },',
    `  [${Placeholders.ThirdTab}],`,
    ')',
  ],
};

const useLayoutEffect: HooksSnippet = {
  key: 'useLayoutEffect',
  prefix: 'useLayoutEffectSnippet',
  body: [
    'useLayoutEffect(() => {',
    `  ${Placeholders.FirstTab}`,
    '',
    '  return () => {',
    `    ${Placeholders.SecondTab}`,
    '  };',
    `}, [${Placeholders.ThirdTab}])`,
  ],
};

export default [
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
];
