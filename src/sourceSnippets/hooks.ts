import { Placeholders, SnippetMapping } from '../types';

type HookMappings = {
  use: 'useSnippet';
  useActionState: 'useActionStateSnippet';
  useCallback: 'useCallbackSnippet';
  useContext: 'useContextSnippet';
  useDeferredValue: 'useDeferredValueSnippet';
  useEffect: 'useEffectSnippet';
  useFormStatus: 'useFormStatusSnippet';
  useId: 'useIdSnippet';
  useImperativeHandle: 'useImperativeHandleSnippet';
  useLayoutEffect: 'useLayoutEffectSnippet';
  useMemo: 'useMemoSnippet';
  useOptimistic: 'useOptimisticSnippet';
  useReducer: 'useReducerSnippet';
  useRef: 'useRefSnippet';
  useState: 'useStateSnippet';
  useTransition: 'useTransitionSnippet';
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

const useId: HooksSnippet = {
  key: 'useId',
  prefix: 'useIdSnippet',
  body: [`const ${Placeholders.FirstTab} = useId()`],
  description: 'useId (React 18+)',
};

const useTransition: HooksSnippet = {
  key: 'useTransition',
  prefix: 'useTransitionSnippet',
  body: ['const [isPending, startTransition] = useTransition()'],
  description: 'useTransition (React 18+)',
};

const useDeferredValue: HooksSnippet = {
  key: 'useDeferredValue',
  prefix: 'useDeferredValueSnippet',
  body: [
    `const ${Placeholders.FirstTab} = useDeferredValue(${Placeholders.SecondTab})`,
  ],
  description: 'useDeferredValue (React 18+)',
};

const useActionState: HooksSnippet = {
  key: 'useActionState',
  prefix: 'useActionStateSnippet',
  body: [
    `const [state, submitAction, isPending] = useActionState(`,
    '  async (previousState, formData) => {',
    `    ${Placeholders.FirstTab}`,
    '  },',
    `  ${Placeholders.SecondTab},`,
    ')',
  ],
  description: 'useActionState (React 19+)',
};

const useFormStatus: HooksSnippet = {
  key: 'useFormStatus',
  prefix: 'useFormStatusSnippet',
  body: ['const { pending, data, method, action } = useFormStatus()'],
  description: 'useFormStatus (React 19+, import from react-dom)',
};

const useOptimistic: HooksSnippet = {
  key: 'useOptimistic',
  prefix: 'useOptimisticSnippet',
  body: [
    `const [optimistic${Placeholders.Capitalize}, addOptimistic] = useOptimistic(`,
    `  ${Placeholders.FirstTab},`,
    `  (state, newValue) => [...state, newValue],`,
    ')',
  ],
  description: 'useOptimistic (React 19+)',
};

const useHook: HooksSnippet = {
  key: 'use',
  prefix: 'useSnippet',
  body: [`const ${Placeholders.FirstTab} = use(${Placeholders.SecondTab})`],
  description: 'Read a Promise or Context in render (React 19+)',
};

export default [
  useHook,
  useActionState,
  useCallback,
  useContext,
  useDeferredValue,
  useEffect,
  useFormStatus,
  useId,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useOptimistic,
  useReducer,
  useRef,
  useState,
  useTransition,
];
