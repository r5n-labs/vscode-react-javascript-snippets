import { SnippetMapping, SnippetPlaceholders } from '../types';

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
  body: [`export default ${SnippetPlaceholders.LastTab}`, ''],
};

const exportDestructing: OthersSnippet = {
  key: 'exportDestructing',
  prefix: 'exd',
  body: [
    `export { ${SnippetPlaceholders.SecondTab} } from '${SnippetPlaceholders.FirstTab}'`,
    SnippetPlaceholders.LastTab,
  ],
};

const exportAs: OthersSnippet = {
  key: 'exportAs',
  prefix: 'exa',
  body: [
    `export { ${SnippetPlaceholders.SecondTab} as ${SnippetPlaceholders.ThirdTab} } from '${SnippetPlaceholders.FirstTab}'`,
    SnippetPlaceholders.LastTab,
  ],
};

const exportNamedFunction: OthersSnippet = {
  key: 'exportNamedFunction',
  prefix: 'enf',
  body: [
    `export const ${SnippetPlaceholders.FirstTab} = (${SnippetPlaceholders.SecondTab}) => {${SnippetPlaceholders.LastTab}}`,
    '',
  ],
  description: 'Export named function',
};

const exportDefaultFunction: OthersSnippet = {
  key: 'exportDefaultFunction',
  prefix: 'edf',
  body: [
    `export default (${SnippetPlaceholders.FirstTab}) => {${SnippetPlaceholders.LastTab}}`,
    '',
  ],
  description: 'Export default function',
};

const exportDefaultNamedFunction: OthersSnippet = {
  key: 'exportDefaultNamedFunction',
  prefix: 'ednf',
  body: [
    `export default function ${SnippetPlaceholders.FirstTab}(${SnippetPlaceholders.SecondTab}) {${SnippetPlaceholders.LastTab}}`,
    '',
  ],
  description: 'Export default named function',
};

const method: OthersSnippet = {
  key: 'method',
  prefix: 'met',
  body: [
    `${SnippetPlaceholders.FirstTab} = (${SnippetPlaceholders.SecondTab}) => {${SnippetPlaceholders.LastTab}}`,
    '',
  ],
  description: 'Creates a method inside a class',
};

const propertyGet: OthersSnippet = {
  key: 'propertyGet',
  prefix: 'pge',
  body: [
    `get ${SnippetPlaceholders.FirstTab}() {`,
    `  return this.${SnippetPlaceholders.LastTab}`,
    '}',
    '',
  ],
  description: 'Creates a getter property inside a class',
};

const propertySet: OthersSnippet = {
  key: 'propertySet',
  prefix: 'pse',
  body: [
    `set ${SnippetPlaceholders.FirstTab}(${SnippetPlaceholders.SecondTab}) {${SnippetPlaceholders.LastTab}}`,
    '',
  ],
  description: 'Creates a setter property inside a class',
};

const forEach: OthersSnippet = {
  key: 'forEach',
  prefix: 'fre',
  body: [
    `${SnippetPlaceholders.FirstTab}.forEach(${SnippetPlaceholders.SecondTab} => {`,
    `  ${SnippetPlaceholders.LastTab}`,
    '})',
    '',
  ],
  description: 'Creates a forEach statement',
};

const forOf: OthersSnippet = {
  key: 'forOf',
  prefix: 'fof',
  body: [
    `for(let ${SnippetPlaceholders.FirstTab} of ${SnippetPlaceholders.SecondTab}) {`,
    `  ${SnippetPlaceholders.LastTab}`,
    '}',
    '',
  ],
  description: 'Iterating over property names of iterable objects',
};

const forIn: OthersSnippet = {
  key: 'forIn',
  prefix: 'fin',
  body: [
    `for(let ${SnippetPlaceholders.FirstTab} in ${SnippetPlaceholders.SecondTab}) {`,
    `  ${SnippetPlaceholders.LastTab}`,
    '}',
    '',
  ],
  description: 'Iterating over property values of iterable objects',
};

const anonymousFunction: OthersSnippet = {
  key: 'anonymousFunction',
  prefix: 'anfn',
  body: [
    `(${SnippetPlaceholders.FirstTab}) => {`,
    `  ${SnippetPlaceholders.SecondTab}`,
    '}',
  ],
  description: 'Creates an anonymous function',
};

const namedFunction: OthersSnippet = {
  key: 'namedFunction',
  prefix: 'nfn',
  body: [
    `const ${SnippetPlaceholders.FirstTab} = (${SnippetPlaceholders.SecondTab}) => {`,
    `  ${SnippetPlaceholders.ThirdTab}`,
    '}',
    '',
  ],
  description: 'Creates a named function',
};

const destructingObject: OthersSnippet = {
  key: 'destructingObject',
  prefix: 'dob',
  body: [
    `const {${SnippetPlaceholders.SecondTab}} = ${SnippetPlaceholders.FirstTab}`,
    '',
  ],
  description: 'Creates and assigns a local variable using object destructing',
};

const destructingArray: OthersSnippet = {
  key: 'destructingArray',
  prefix: 'dar',
  body: [
    `const [${SnippetPlaceholders.SecondTab}] = ${SnippetPlaceholders.FirstTab}`,
    '',
  ],
  description: 'Creates and assigns a local variable using array destructing',
};

const setInterval: OthersSnippet = {
  key: 'setInterval',
  prefix: 'sti',
  body: [
    'setInterval(() => {',
    `  ${SnippetPlaceholders.SecondTab}`,
    `}, ${SnippetPlaceholders.LastTab})`,
    '',
  ],
  description: 'Executes the given function at specified intervals',
};

const setTimeOut: OthersSnippet = {
  key: 'setTimeOut',
  prefix: 'sto',
  body: [
    'setTimeout(() => {',
    `  ${SnippetPlaceholders.SecondTab}`,
    `}, ${SnippetPlaceholders.FirstTab})`,
    '',
  ],
  description: 'Executes the given function after the specified delay',
};

const promise: OthersSnippet = {
  key: 'promise',
  prefix: 'prom',
  body: [
    'return new Promise((resolve, reject) => {',
    `  ${SnippetPlaceholders.LastTab}`,
    '})',
    '',
  ],
  description: 'Creates and returns a new Promise in the standard ES7 syntax',
};

const destructProps: OthersSnippet = {
  key: 'destructProps',
  prefix: 'cp',
  body: [`const { ${SnippetPlaceholders.LastTab} } = this.props`, ''],
  description: 'Creates and assigns a local variable using props destructing',
};

const destructState: OthersSnippet = {
  key: 'destructState',
  prefix: 'cs',
  body: [`const { ${SnippetPlaceholders.LastTab} } = this.state`, ''],
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
    `     ${SnippetPlaceholders.LastTab}`,
    '  }',
    '}',
    '',
  ],
  description:
    "Adds a default constructor for it('', () => {})the class that contains props as arguments",
};

const emptyState: OthersSnippet = {
  key: 'emptyState',
  prefix: 'est',
  body: ['state = {', `  ${SnippetPlaceholders.LastTab}`, '}', ''],
  description: 'Creates empty state object. To be used in a constructor.',
};

const componentDidMount: OthersSnippet = {
  key: 'componentDidMount',
  prefix: 'cdm',
  body: ['componentDidMount() {', `  ${SnippetPlaceholders.LastTab}`, '}', ''],
  description:
    'Invoked once, only on the client (not on the server), immediately after the initial rendering occurs.',
};

const shouldComponentUpdate: OthersSnippet = {
  key: 'shouldComponentUpdate',
  prefix: 'scu',
  body: [
    'shouldComponentUpdate(nextProps, nextState) {',
    `  ${SnippetPlaceholders.LastTab}`,
    '}',
    '',
  ],
  description:
    'Invoked before rendering when new props or state are being received. ',
};

const componentDidUpdate: OthersSnippet = {
  key: 'componentDidUpdate',
  prefix: 'cdup',
  body: [
    'componentDidUpdate(prevProps, prevState) {',
    `  ${SnippetPlaceholders.LastTab}`,
    '}',
    '',
  ],
  description:
    "Invoked immediately after the component's updates are flushed to the DOM.",
};

const componentWillUnmount: OthersSnippet = {
  key: 'componentWillUnmount',
  prefix: 'cwun',
  body: [
    'componentWillUnmount() {',
    `  ${SnippetPlaceholders.LastTab}`,
    '}',
    '',
  ],
  description:
    'Invoked immediately before a component is unmounted from the DOM.',
};

const getDerivedStateFromProps: OthersSnippet = {
  key: 'getDerivedStateFromProps',
  prefix: 'gdsfp',
  body: [
    'static getDerivedStateFromProps(props, state) {',
    `  ${SnippetPlaceholders.LastTab}`,
    '}',
  ],
  description:
    'Invoked right before calling the render method, both on the initial mount and on subsequent updates.',
};

const getSnapshotBeforeUpdate: OthersSnippet = {
  key: 'getSnapshotBeforeUpdate',
  prefix: 'gsbu',
  body: [
    'getSnapshotBeforeUpdate = (prevProps, prevState) => {',
    `  ${SnippetPlaceholders.LastTab}`,
    '}',
    '',
  ],
  description:
    'Called right before mutations are made (e.g. before the DOM is updated)',
};

const createContext: OthersSnippet = {
  key: 'createContext',
  prefix: 'rcontext',
  body: [`const ${SnippetPlaceholders.LastTab} = React.createContext()`, ''],
  description: 'Create React context',
};

const createRef: OthersSnippet = {
  key: 'createRef',
  prefix: 'cref',
  body: [`this.${SnippetPlaceholders.LastTab}Ref = React.createRef()`, ''],
  description: 'Create ref statement used inside constructor',
};

const componentSetStateObject: OthersSnippet = {
  key: 'componentSetStateObject',
  prefix: 'sst',
  body: [`this.setState({${SnippetPlaceholders.LastTab}})`, ''],
  description: 'Performs a shallow merge of nextState into current state',
};

const componentSetStateFunc: OthersSnippet = {
  key: 'componentSetStateFunc',
  prefix: 'ssf',
  body: [
    `this.setState((state, props) => { return { ${SnippetPlaceholders.LastTab} }})`,
    '',
  ],
  description: 'Performs a shallow merge of nextState into current state',
};

const componentProps: OthersSnippet = {
  key: 'componentProps',
  prefix: 'props',
  body: [`this.props.${SnippetPlaceholders.LastTab}`, ''],
  description: "Access component's props",
};

const componentState: OthersSnippet = {
  key: 'componentState',
  prefix: 'state',
  body: [`this.state.${SnippetPlaceholders.LastTab}`, ''],
};

const bindThis: OthersSnippet = {
  key: 'bindThis',
  prefix: 'bnd',
  body: [
    `this.${SnippetPlaceholders.FirstTab} = this.${SnippetPlaceholders.FirstTab}.bind(this)`,
    '',
  ],
  description: 'Binds this to a method',
};

const commentBigBlock: OthersSnippet = {
  key: 'commentBigBlock',
  prefix: 'cmmb',
  body: ['/**', ` * ${SnippetPlaceholders.LastTab}`, ' */'],
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
    `export const ${SnippetPlaceholders.FirstTab} = (WrappedComponent) => {`,
    '  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />',
    '',
    '  hocComponent.propTypes = {}',
    '',
    '  return hocComponent',
    '}',
    '',
    `export default WrapperComponent => connect(mapStateToProps, mapDispatchToProps)(${SnippetPlaceholders.FirstTab}(WrapperComponent))`,
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
  body: [`typeof ${SnippetPlaceholders.LastTab}`],
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
