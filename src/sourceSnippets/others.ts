import { Placeholders, SnippetMapping } from '../types';

type OthersMapping = {
  commentBigBlock: 'cmmb';
  anonymousFunction: 'anfn';
  bindThis: 'bnd';
  classConstructor: 'rconst';
  componentDidMount: 'cdm';
  componentDidUpdate: 'cdup';
  componentProps: 'props';
  componentSetStateFunc: 'ssf';
  componentSetStateObject: 'sst';
  componentState: 'state';
  componentWillUnmount: 'cwun';
  createContext: 'rcontext';
  createRef: 'cref';
  destructProps: 'cp';
  destructState: 'cs';
  destructingArray: 'dar';
  destructingObject: 'dob';
  emptyState: 'est';
  exportAs: 'exa';
  exportDefault: 'exp';
  exportDefaultFunction: 'edf';
  exportDefaultNamedFunction: 'ednf';
  exportDestructing: 'exd';
  exportNamedFunction: 'enf';
  forEach: 'fre';
  forIn: 'fin';
  forOf: 'fof';
  getDerivedStateFromProps: 'gdsfp';
  getSnapshotBeforeUpdate: 'gsbu';
  hocComponent: 'hoc';
  hocComponentWithRedux: 'hocredux';
  method: 'met';
  namedFunction: 'nfn';
  promise: 'prom';
  propertyGet: 'pge';
  propertySet: 'pse';
  setInterval: 'sti';
  setTimeOut: 'sto';
  shouldComponentUpdate: 'scu';
  typeofSnippet: 'tpf';
};

export type OthersSnippet = SnippetMapping<OthersMapping>;

const exportDefault: OthersSnippet = {
  key: 'exportDefault',
  prefix: 'exp',
  body: [`export default ${Placeholders.FirstTab}`],
};

const exportDestructing: OthersSnippet = {
  key: 'exportDestructing',
  prefix: 'exd',
  body: [
    `export { ${Placeholders.SecondTab} } from '${Placeholders.FirstTab}'`,
  ],
};

const exportAs: OthersSnippet = {
  key: 'exportAs',
  prefix: 'exa',
  body: [
    `export { ${Placeholders.SecondTab} as ${Placeholders.ThirdTab} } from '${Placeholders.FirstTab}'`,
  ],
};

const exportNamedFunction: OthersSnippet = {
  key: 'exportNamedFunction',
  prefix: 'enf',
  body: [
    `export const ${Placeholders.FirstTab} = (${Placeholders.SecondTab}) => {${Placeholders.ThirdTab}}`,
  ],
  description: 'Export named function',
};

const exportDefaultFunction: OthersSnippet = {
  key: 'exportDefaultFunction',
  prefix: 'edf',
  body: [
    `export default (${Placeholders.FirstTab}) => {${Placeholders.SecondTab}}`,
  ],
  description: 'Export default function',
};

const exportDefaultNamedFunction: OthersSnippet = {
  key: 'exportDefaultNamedFunction',
  prefix: 'ednf',
  body: [
    `export default function ${Placeholders.FirstTab}(${Placeholders.SecondTab}) {${Placeholders.ThirdTab}}`,
  ],
  description: 'Export default named function',
};

const method: OthersSnippet = {
  key: 'method',
  prefix: 'met',
  body: [
    `${Placeholders.FirstTab} = (${Placeholders.SecondTab}) => {${Placeholders.ThirdTab}}`,
  ],
  description: 'Creates a method inside a class',
};

const propertyGet: OthersSnippet = {
  key: 'propertyGet',
  prefix: 'pge',
  body: [
    `get ${Placeholders.FirstTab}() {`,
    `  return this.${Placeholders.SecondTab}`,
    '}',
  ],
  description: 'Creates a getter property inside a class',
};

const propertySet: OthersSnippet = {
  key: 'propertySet',
  prefix: 'pse',
  body: [
    `set ${Placeholders.FirstTab}(${Placeholders.SecondTab}) {${Placeholders.ThirdTab}}`,
  ],
  description: 'Creates a setter property inside a class',
};

const forEach: OthersSnippet = {
  key: 'forEach',
  prefix: 'fre',
  body: [
    `${Placeholders.FirstTab}.forEach(${Placeholders.SecondTab} => {${Placeholders.ThirdTab}})`,
  ],
  description: 'Creates a forEach statement',
};

const forOf: OthersSnippet = {
  key: 'forOf',
  prefix: 'fof',
  body: [
    `for(let ${Placeholders.FirstTab} of ${Placeholders.SecondTab}) {${Placeholders.ThirdTab}}`,
  ],
  description: 'Iterating over property names of iterable objects',
};

const forIn: OthersSnippet = {
  key: 'forIn',
  prefix: 'fin',
  body: [
    `for(let ${Placeholders.FirstTab} in ${Placeholders.SecondTab}) {${Placeholders.ThirdTab}}`,
  ],
  description: 'Iterating over property values of iterable objects',
};

const anonymousFunction: OthersSnippet = {
  key: 'anonymousFunction',
  prefix: 'anfn',
  body: [`(${Placeholders.FirstTab}) => { ${Placeholders.SecondTab} }`],
  description: 'Creates an anonymous function',
};

const namedFunction: OthersSnippet = {
  key: 'namedFunction',
  prefix: 'nfn',
  body: [
    `const ${Placeholders.FirstTab} = (${Placeholders.SecondTab}) => { ${Placeholders.ThirdTab} }`,
  ],
  description: 'Creates a named function',
};

const destructingObject: OthersSnippet = {
  key: 'destructingObject',
  prefix: 'dob',
  body: [`const {${Placeholders.SecondTab}} = ${Placeholders.FirstTab}`],
  description: 'Creates and assigns a local variable using object destructing',
};

const destructingArray: OthersSnippet = {
  key: 'destructingArray',
  prefix: 'dar',
  body: [`const [${Placeholders.SecondTab}] = ${Placeholders.FirstTab}`],
  description: 'Creates and assigns a local variable using array destructing',
};

const setInterval: OthersSnippet = {
  key: 'setInterval',
  prefix: 'sti',
  body: [
    `setInterval(() => { ${Placeholders.FirstTab} }, ${Placeholders.SecondTab})`,
  ],
  description: 'Executes the given function at specified intervals',
};

const setTimeOut: OthersSnippet = {
  key: 'setTimeOut',
  prefix: 'sto',
  body: [
    `setTimeout(() => { ${Placeholders.FirstTab} }, ${Placeholders.SecondTab})`,
  ],
  description: 'Executes the given function after the specified delay',
};

const promise: OthersSnippet = {
  key: 'promise',
  prefix: 'prom',
  body: [
    `return new Promise((resolve, reject) => { ${Placeholders.FirstTab} })`,
  ],
  description: 'Creates and returns a new Promise in the standard ES7 syntax',
};

const destructProps: OthersSnippet = {
  key: 'destructProps',
  prefix: 'cp',
  body: [`const { ${Placeholders.FirstTab} } = this.props`],
  description: 'Creates and assigns a local variable using props destructing',
};

const destructState: OthersSnippet = {
  key: 'destructState',
  prefix: 'cs',
  body: [`const { ${Placeholders.FirstTab} } = this.state`],
  description: 'Creates and assigns a local variable using state destructing',
};

const classConstructor: OthersSnippet = {
  key: 'classConstructor',
  prefix: 'rconst',
  body: [
    'constructor(props) {',
    '  super(props)',
    '',
    '  this.state = {',
    `     ${Placeholders.FirstTab}`,
    '  }',
    '}',
  ],
  description:
    "Adds a default constructor for it('', () => {})the class that contains props as arguments",
};

const emptyState: OthersSnippet = {
  key: 'emptyState',
  prefix: 'est',
  body: [`state = { ${Placeholders.FirstTab} }`],
  description: 'Creates empty state object. To be used in a constructor.',
};

const componentDidMount: OthersSnippet = {
  key: 'componentDidMount',
  prefix: 'cdm',
  body: [`componentDidMount() { ${Placeholders.FirstTab} }`],
  description:
    'Invoked once, only on the client (not on the server), immediately after the initial rendering occurs.',
};

const shouldComponentUpdate: OthersSnippet = {
  key: 'shouldComponentUpdate',
  prefix: 'scu',
  body: [
    `shouldComponentUpdate(nextProps, nextState) { ${Placeholders.FirstTab} }`,
  ],
  description:
    'Invoked before rendering when new props or state are being received. ',
};

const componentDidUpdate: OthersSnippet = {
  key: 'componentDidUpdate',
  prefix: 'cdup',
  body: [
    `componentDidUpdate(prevProps, prevState) { ${Placeholders.FirstTab}} `,
  ],
  description:
    "Invoked immediately after the component's updates are flushed to the DOM.",
};

const componentWillUnmount: OthersSnippet = {
  key: 'componentWillUnmount',
  prefix: 'cwun',
  body: [`componentWillUnmount() {${Placeholders.FirstTab} }`],
  description:
    'Invoked immediately before a component is unmounted from the DOM.',
};

const getDerivedStateFromProps: OthersSnippet = {
  key: 'getDerivedStateFromProps',
  prefix: 'gdsfp',
  body: [
    `static getDerivedStateFromProps(props, state) {${Placeholders.FirstTab}}`,
  ],
  description:
    'Invoked right before calling the render method, both on the initial mount and on subsequent updates.',
};

const getSnapshotBeforeUpdate: OthersSnippet = {
  key: 'getSnapshotBeforeUpdate',
  prefix: 'gsbu',
  body: [
    `getSnapshotBeforeUpdate = (prevProps, prevState) => {${Placeholders.FirstTab}}`,
  ],
  description:
    'Called right before mutations are made (e.g. before the DOM is updated)',
};

const createContext: OthersSnippet = {
  key: 'createContext',
  prefix: 'rcontext',
  body: [`const ${Placeholders.FirstTab} = React.createContext()`],
  description: 'Create React context',
};

const createRef: OthersSnippet = {
  key: 'createRef',
  prefix: 'cref',
  body: [`this.${Placeholders.FirstTab}Ref = React.createRef()`],
  description: 'Create ref statement used inside constructor',
};

const componentSetStateObject: OthersSnippet = {
  key: 'componentSetStateObject',
  prefix: 'sst',
  body: [`this.setState({${Placeholders.FirstTab}})`],
  description: 'Performs a shallow merge of nextState into current state',
};

const componentSetStateFunc: OthersSnippet = {
  key: 'componentSetStateFunc',
  prefix: 'ssf',
  body: [
    `this.setState((state, props) => { return { ${Placeholders.FirstTab} }})`,
  ],
  description: 'Performs a shallow merge of nextState into current state',
};

const componentProps: OthersSnippet = {
  key: 'componentProps',
  prefix: 'props',
  body: [`this.props.${Placeholders.FirstTab}`],
  description: "Access component's props",
};

const componentState: OthersSnippet = {
  key: 'componentState',
  prefix: 'state',
  body: [`this.state.${Placeholders.FirstTab}`],
};

const bindThis: OthersSnippet = {
  key: 'bindThis',
  prefix: 'bnd',
  body: [
    `this.${Placeholders.FirstTab} = this.${Placeholders.FirstTab}.bind(this)`,
  ],
  description: 'Binds this to a method',
};

const commentBigBlock: OthersSnippet = {
  key: 'commentBigBlock',
  prefix: 'cmmb',
  body: ['/**', ` * ${Placeholders.FirstTab}`, ' */'],
};

const hocComponentWithRedux: OthersSnippet = {
  key: 'hocComponentWithRedux',
  prefix: 'hocredux',
  body: [
    "import React from 'react'",
    "import { connect } from 'react-redux'",
    "import PropTypes from 'prop-types'",
    '',
    'export const mapStateToProps = state => ({})',
    '',
    'export const mapDispatchToProps = {}',
    '',
    `export const ${Placeholders.FirstTab} = (WrappedComponent) => {`,
    '  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />',
    '',
    '  hocComponent.propTypes = {}',
    '',
    '  return hocComponent',
    '}',
    '',
    `export default WrapperComponent => connect(mapStateToProps, mapDispatchToProps)(${Placeholders.FirstTab}(WrapperComponent))`,
    '',
  ],
};

const hocComponent: OthersSnippet = {
  key: 'hocComponent',
  prefix: 'hoc',
  body: [
    "import React from 'react'",
    "import PropTypes from 'prop-types'",
    '',
    'export default (WrappedComponent) => {',
    '  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />',
    '',
    '  hocComponent.propTypes = {}',
    '',
    '  return hocComponent',
    '}',
    '',
  ],
};

const typeofSnippet: OthersSnippet = {
  key: 'typeofSnippet',
  prefix: 'tpf',
  body: [`typeof ${Placeholders.FirstTab}`],
};

export default [
  exportDefault,
  exportDestructing,
  exportAs,
  exportNamedFunction,
  exportDefaultFunction,
  exportDefaultNamedFunction,
  method,
  propertyGet,
  propertySet,
  forEach,
  forOf,
  forIn,
  anonymousFunction,
  namedFunction,
  destructingObject,
  destructingArray,
  setInterval,
  setTimeOut,
  promise,
  destructProps,
  destructState,
  classConstructor,
  emptyState,
  componentDidMount,
  shouldComponentUpdate,
  componentDidUpdate,
  componentWillUnmount,
  getDerivedStateFromProps,
  getSnapshotBeforeUpdate,
  createContext,
  createRef,
  componentSetStateObject,
  componentSetStateFunc,
  componentProps,
  componentState,
  bindThis,
  commentBigBlock,
  hocComponentWithRedux,
  hocComponent,
  typeofSnippet,
];
