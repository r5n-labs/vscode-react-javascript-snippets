# Snippets

## Snippets info

Every space inside `{ }` and `( )` means that this is pushed into next line :)
`$` represent each step after `tab`.

_TypeScript_ has own components and own snippets. Use search or just type `ts` before every component snippet.

I.E. `tsrcc`

<br>

### React Hooks

|                          Prefix | Method                                                                    |
| ------------------------------: | ------------------------------------------------------------------------- |
|            `useStateSnippet→`   | `const [state, setState] = useState(initialValue)`                        |
|           `useEffectSnippet→`   | `useEffect` with cleanup function and dependency array                    |
|          `useContextSnippet→`   | `const value = useContext(MyContext)`                                      |
|          `useReducerSnippet→`   | `const [state, dispatch] = useReducer(reducer, initial, init)`            |
|         `useCallbackSnippet→`   | `useCallback` with dependency array                                       |
|             `useMemoSnippet→`   | `useMemo` with dependency array                                           |
|              `useRefSnippet→`   | `const ref = useRef(initialValue)`                                        |
| `useImperativeHandleSnippet→`   | `useImperativeHandle` with ref and factory                                |
|     `useLayoutEffectSnippet→`   | `useLayoutEffect` with cleanup and dependency array                       |
|               `useIdSnippet→`   | `const id = useId()`                                                      |
|       `useTransitionSnippet→`   | `const [isPending, startTransition] = useTransition()`                    |
|    `useDeferredValueSnippet→`   | `const deferred = useDeferredValue(value)`                                |
|                  `useSnippet→`  | `const value = use(resource)` (Promises or Context)                       |
|      `useActionStateSnippet→`   | `useActionState` with async handler, returns `[state, action, isPending]` |
|       `useFormStatusSnippet→`   | `const { pending, data, method, action } = useFormStatus()` (from `react-dom`) |
|       `useOptimisticSnippet→`   | `useOptimistic` with state and updater function                           |

### Basic Methods

|  Prefix | Method                                              |
| ------: | --------------------------------------------------- |
|  `imp→` | `import moduleName from 'module'`                   |
|  `imn→` | `import 'module'`                                   |
|  `imd→` | `import { destructuredModule } from 'module'`       |
|  `ime→` | `import * as alias from 'module'`                   |
|  `ima→` | `import { originalName as aliasName} from 'module'` |
|  `exp→` | `export default moduleName`                         |
|  `exd→` | `export { destructuredModule } from 'module'`       |
|  `exa→` | `export { originalName as aliasName} from 'module'` |
|  `enf→` | `export const functionName = (params) => { }`       |
|  `edf→` | `export default (params) => { }`                    |
| `ednf→` | `export default function functionName(params) { }`  |
|  `met→` | `methodName = (params) => { }`                      |
|  `fre→` | `arrayName.forEach(element => { }`                  |
|  `fof→` | `for(let itemName of objectName { }`                |
|  `fin→` | `for(let itemName in objectName { }`                |
| `anfn→` | `(params) => { }`                                   |
|  `nfn→` | `const functionName = (params) => { }`              |
|  `dob→` | `const {propName} = objectToDescruct`               |
|  `dar→` | `const [propName] = arrayToDescruct`                |
|  `sti→` | `setInterval(() => { }, intervalTime`               |
|  `sto→` | `setTimeout(() => { }, delayTime`                   |
| `prom→` | `return new Promise((resolve, reject) => { }`       |
|  `pge→` | `get propertyName() { }`                            |
|  `pse→` | `set propertyName(value) { }`                       |
|  `tpf→` | `typeof operand`                                    |
| `cmmb→` | `comment block`                                     |
|   `cp→` | `const { } = this.props`                            |
|   `cs→` | `const { } = this.state`                            |

### React

|      Prefix | Method                                                                      |
| ----------: | --------------------------------------------------------------------------- |
|      `imr→` | `import React from 'react'`                                                 |
|     `imrd→` | `import ReactDOM from 'react-dom'`                                          |
|     `imrc→` | `import { Component } from 'react'`                                         |
|    `imrcp→` | `import { Component } from 'react'` + `import PropTypes from 'prop-types'`  |
|    `imrpc→` | `import { PureComponent } from 'react'`                                     |
|   `imrpcp→` | `import { PureComponent } from 'react'` + `import PropTypes from 'prop-types'` |
|     `imrm→` | `import { memo } from 'react'`                                              |
|    `imrmp→` | `import { memo } from 'react'` + `import PropTypes from 'prop-types'`       |
|     `impt→` | `import PropTypes from 'prop-types'`                                        |
|     `imrr→` | `import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom'` |
|     `imbr→` | `import { BrowserRouter as Router} from 'react-router-dom'`                 |
|    `imbrc→` | `import { Routes, Route, NavLink, Link } from 'react-router-dom'`           |
|    `imbrl→` | `import { Link } from 'react-router-dom'`                                   |
|   `imbrnl→` | `import { NavLink } from 'react-router-dom'`                                |
|    `imrrs→` | `import { Routes, Route } from 'react-router-dom'`                          |
|    `imcbr→` | `import { createBrowserRouter, RouterProvider } from 'react-router-dom'`    |
|    `imnav→` | `import { useNavigate } from 'react-router-dom'`                            |
|    `impar→` | `import { useParams } from 'react-router-dom'`                              |
|     `imsp→` | `import { useSearchParams } from 'react-router-dom'`                        |
|     `imld→` | `import { useLoaderData } from 'react-router-dom'`                          |
|    `imfet→` | `import { useFetcher } from 'react-router-dom'`                             |
|    `redux→` | `import { connect } from 'react-redux'`                                     |
|   `rconst→` | `constructor(props) { }` with state initialization                          |
|      `est→` | `this.state = { }`                                                          |
|      `cdm→` | `componentDidMount = () => { }`                                             |
|      `scu→` | `shouldComponentUpdate = (nextProps, nextState) => { }`                     |
|     `cdup→` | `componentDidUpdate = (prevProps, prevState) => { }`                        |
|     `cwun→` | `componentWillUnmount = () => { }`                                          |
|    `gdsfp→` | `static getDerivedStateFromProps(nextProps, prevState) { }`                 |
|     `gsbu→` | `getSnapshotBeforeUpdate = (prevProps, prevState) => { }`                   |
|      `sst→` | `this.setState({ })`                                                        |
|      `ssf→` | `this.setState((state, props) => return { })`                               |
|    `props→` | `this.props.propName`                                                       |
|    `state→` | `this.state.stateName`                                                      |
| `rcontext→` | `const $1 = React.createContext()`                                          |
|     `cref→` | `this.$1Ref = React.createRef()`                                            |
|      `bnd→` | `this.methodName = this.methodName.bind(this)`                              |

### React Native

|     Prefix | Method                                           |
| ---------: | ------------------------------------------------ |
|    `imrn→` | `import { $1 } from 'react-native'`              |
| `rnstyle→` | `const styles = StyleSheet.create({})`            |
|     `rnc→` | React Native class component                     |
|    `rncs→` | React Native class component with StyleSheet      |
|    `rnce→` | React Native class component with named export    |
|    `rnpc→` | React Native PureComponent                        |
|   `rnpce→` | React Native PureComponent with named export      |
|     `rnf→` | React Native functional component                 |
|    `rnfe→` | React Native functional component with named export |
|    `rnfs→` | React Native functional component with StyleSheet  |
|   `rnfes→` | React Native functional component with StyleSheet and named export |

### Redux

|       Prefix | Method                    |
| -----------: | ------------------------- |
|  `rxaction→` | `redux action template`   |
|   `rxconst→` | `export const $1 = '$1'`  |
| `rxreducer→` | `redux reducer template`  |
|  `rxselect→` | `redux selector template` |
|   `rxslice→` | `redux slice template`    |
|  `rxslicex→` | `redux slice with extraReducers (pending/fulfilled/rejected)` |
|   `rxthunk→` | `redux createAsyncThunk template` |
|     `rxapi→` | `RTK Query createApi with fetchBaseQuery` |

### PropTypes

|    Prefix | Method                                   |
| --------: | ---------------------------------------- |
|    `pta→` | `PropTypes.array`                        |
|   `ptar→` | `PropTypes.array.isRequired`             |
|    `ptb→` | `PropTypes.bool`                         |
|   `ptbr→` | `PropTypes.bool.isRequired`              |
|    `ptf→` | `PropTypes.func`                         |
|   `ptfr→` | `PropTypes.func.isRequired`              |
|    `ptn→` | `PropTypes.number`                       |
|   `ptnr→` | `PropTypes.number.isRequired`            |
|    `pto→` | `PropTypes.object`                       |
|   `ptor→` | `PropTypes.object.isRequired`            |
|    `pts→` | `PropTypes.string`                       |
|   `ptsr→` | `PropTypes.string.isRequired`            |
|   `ptnd→` | `PropTypes.node`                         |
|  `ptndr→` | `PropTypes.node.isRequired`              |
|   `ptel→` | `PropTypes.element`                      |
|  `ptelr→` | `PropTypes.element.isRequired`           |
|    `pti→` | `PropTypes.instanceOf(name)`             |
|   `ptir→` | `PropTypes.instanceOf(name).isRequired`  |
|    `pte→` | `PropTypes.oneOf([name])`                |
|   `pter→` | `PropTypes.oneOf([name]).isRequired`     |
|   `ptet→` | `PropTypes.oneOfType([name])`            |
|  `ptetr→` | `PropTypes.oneOfType([name]).isRequired` |
|   `ptao→` | `PropTypes.arrayOf(name)`                |
|  `ptaor→` | `PropTypes.arrayOf(name).isRequired`     |
|   `ptoo→` | `PropTypes.objectOf(name)`               |
|  `ptoor→` | `PropTypes.objectOf(name).isRequired`    |
|   `ptsh→` | `PropTypes.shape({ })`                   |
|  `ptshr→` | `PropTypes.shape({ }).isRequired`        |
|   `ptex→` | `PropTypes.exact({ })`                   |
|  `ptexr→` | `PropTypes.exact({ }).isRequired`        |
|  `ptany→` | `PropTypes.any`                          |

### Console

| Prefix | Method                                                       |
| ------ | ------------------------------------------------------------ |
| `clg→` | `console.log(object)`                                        |
| `clo→` | `` console.log(`object`, object) ``                          |
| `clj→` | `` console.log(`object`, JSON.stringify(object, null, 2)) `` |
| `ctm→` | `` console.time(`timeId`) ``                                 |
| `cte→` | `` console.timeEnd(`timeId`) ``                              |
| `cas→` | `console.assert(expression,object)`                          |
| `ccl→` | `console.clear()`                                            |
| `cco→` | `console.count(label)`                                       |
| `cdi→` | `console.dir`                                                |
| `cer→` | `console.error(object)`                                      |
| `cgr→` | `console.group(label)`                                       |
| `cge→` | `console.groupEnd()`                                         |
| `ctr→` | `console.trace(object)`                                      |
| `cwa→` | `console.warn`                                               |
| `cin→` | `console.info`                                               |
| `ctl→` | `console.table`                                              |

### React 19 Directives

| Prefix | Method                           |
| -----: | -------------------------------- |
|  `usc` | `'use client'` directive         |
|  `uss` | `'use server'` directive         |

### React Router v6 Setup

|      Prefix | Method                                                            |
| ----------: | ----------------------------------------------------------------- |
| `rtrsetup→` | Full `createBrowserRouter` setup with `RouterProvider` and routes  |
|   `rtrla→`  | Route module with `loader`, `action`, and `useLoaderData`         |

### React Components

> **Note:** Examples below show output with `importReactOnTop` set to `false` (default). When enabled, component snippets will include `import React from 'react'` at the top.

### `rcc`

```javascript
import { Component } from 'react'

export default class FileName extends Component {
  render() {
    return <>$2</>
  }
}
```

### `rce`

```javascript
import { Component } from 'react'

export class FileName extends Component {
  render() {
    return <>$2</>
  }
}

export default $1
```

### `rcep`

```javascript
import { Component } from 'react'
import PropTypes from 'prop-types'

export class FileName extends Component {
  static propTypes = {}

  render() {
    return <>$2</>
  }
}

export default $1
```

### `rpc`

```javascript
import { PureComponent } from 'react'

export default class FileName extends PureComponent {
  render() {
    return <>$2</>
  }
}
```

### `rpcp`

```javascript
import { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class FileName extends PureComponent {
  static propTypes = {}

  render() {
    return <>$2</>
  }
}
```

### `rpce`

```javascript
import { PureComponent } from 'react'
import PropTypes from 'prop-types'

export class FileName extends PureComponent {
  static propTypes = {}

  render() {
    return <>$2</>
  }
}

export default FileName
```

### `rccp`

```javascript
import { Component } from 'react'
import PropTypes from 'prop-types'

export default class FileName extends Component {
  static propTypes = {
    $2: $3,
  }

  render() {
    return <>$4</>
  }
}
```

### `rfcp`

```javascript
import PropTypes from 'prop-types'

function $1(props) {
  return <>$0</>
}

$1.propTypes = {}

export default $1
```

### `rfc`

```javascript
export default function $1() {
  return <>$0</>
}
```

### `rfce`

```javascript
function $1() {
  return <>$0</>
}

export default $1
```

### `rafcp`

```javascript
import PropTypes from 'prop-types'

const $1 = (props) => {
  return <>$0</>
}

$1.propTypes = {}

export default $1
```

### `rafc`

```javascript
export const $1 = () => {
  return <>$0</>
}
```

### `rafce`

```javascript
const $1 = () => {
  return <>$0</>
}

export default $1
```

### `rmc`

```javascript
import { memo } from 'react'

export default memo(function $1() {
  return <>$0</>
})
```

### `rmcp`

```javascript
import { memo } from 'react'
import PropTypes from 'prop-types'

const $1 = memo(function $1(props) {
  return <>$0</>
})

$1.propTypes = {}

export default $1
```

### `rcredux`

```javascript
import { Component } from 'react'
import { connect } from 'react-redux'

export class FileName extends Component {
  render() {
    return <>$4</>
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(FileName)
```

### `rcreduxp`

```javascript
import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class FileName extends Component {
  static propTypes = {
    $2: $3,
  }

  render() {
    return <>$4</>
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(FileName)
```

### `rfcredux`

```javascript
import { connect } from 'react-redux'

export const FileName = () => {
  return <>$4</>
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(FileName)
```

### `reduxmap`

```javascript
const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}
```

## TypeScript Components

All TypeScript component snippets use `type` for Props/State by default. Change to `interface` via the `typescriptPropsStatePrefix` setting.

|      Prefix | Method                                                       |
| ----------: | ------------------------------------------------------------ |
|   `exptp→`  | `export type` definition                                     |
|  `expint→`  | `export interface` definition                                |
|   `tsrcc→`  | TypeScript class component with Props/State                  |
|   `tsrce→`  | TypeScript class component with named export                 |
|  `tsrfce→`  | TypeScript functional component with named export            |
|   `tsrfc→`  | TypeScript functional component with default export          |
| `tsrafce→`  | TypeScript arrow function component with named export        |
|  `tsrafc→`  | TypeScript arrow function component                          |
|   `tsrpc→`  | TypeScript PureComponent                                     |
|  `tsrpce→`  | TypeScript PureComponent with named export                   |
| `tsrcredux→`| TypeScript class component with Redux                        |
|   `tsrnf→`  | TypeScript React Native arrow function component             |
|  `tsrnfs→`  | TypeScript React Native arrow function with StyleSheet       |

## React Native Components

### `rnc`

```javascript
import { Component } from 'react'
import { Text, View } from 'react-native'

export default class FileName extends Component {
  render() {
    return (
      <View>
        <Text> $2 </Text>
      </View>
    )
  }
}
```

### `rnf`

```javascript
import { View, Text } from 'react-native'

export default function $1() {
  return (
    <View>
      <Text> $2 </Text>
    </View>
  )
}
```

### `rnfs`

```javascript
import { StyleSheet, View, Text } from 'react-native'

export default function $1() {
  return (
    <View>
      <Text> $2 </Text>
    </View>
  )
}

const styles = StyleSheet.create({})
```

### `rnfe`

```javascript
import { View, Text } from 'react-native'

const $1 = () => {
  return (
    <View>
      <Text> $2 </Text>
    </View>
  )
}

export default $1
```

### `rnfes`

```javascript
import { StyleSheet, View, Text } from 'react-native'

const $1 = () => {
  return (
    <View>
      <Text> $2 </Text>
    </View>
  )
}

export default $1

const styles = StyleSheet.create({})
```

### `rncs`

```javascript
import { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class FileName extends Component {
  render() {
    return (
      <View>
        <Text> $2 </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
```

### `rnce`

```javascript
import { Component } from 'react'
import { Text, View } from 'react-native'

export class FileName extends Component {
  render() {
    return (
      <View>
        <Text> $2 </Text>
      </View>
    )
  }
}

export default $1
```

## Others

### `cmmb`

```JS
/**
|--------------------------------------------------
| $1
|--------------------------------------------------
*/
```

### `desc`

```javascript
describe('$1', () => {
  $2
})
```

### `test`

```javascript
test('should $1', () => {
  $2
})
```

### `tit`

```javascript
it('should $1', () => {
  $2
})
```

### `tita`

```javascript
it('should $1', async () => {
  $2
})
```

### `testa`

```javascript
test('should $1', async () => {
  $2
})
```

### `stest`

```javascript
import renderer from 'react-test-renderer'

import { $1 } from '../$1'

describe('<$1 />', () => {
  const defaultProps = {}
  const wrapper = renderer.create(<$1 {...defaultProps} />)

  test('render', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
```

### `srtest`

```javascript
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'

import store from 'src/store'
import { $1 } from '../$1'

describe('<$1 />', () => {
  const defaultProps = {}
  const wrapper = renderer.create(
    <Provider store={store}>
      <$1 {...defaultProps} />)
    </Provider>,
  )

  test('render', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
```

### `sntest`

```javascript
import 'react-native'
import renderer from 'react-test-renderer'

import $1 from '../$1'

describe('<$1 />', () => {
  const defaultProps = {}

  const wrapper = renderer.create(<$1 {...defaultProps} />)

  test('render', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
```

### `snrtest`

```javascript
import 'react-native'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'

import store from 'src/store/configureStore'
import $1 from '../$1'

describe('<$1 />', () => {
  const defaultProps = {}
  const wrapper = renderer.create(
    <Provider store={store}>
      <$1 {...defaultProps} />
    </Provider>,
  )

  test('render', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
```

### `hocredux`

```javascript
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const mapStateToProps = (state) => ({})

export const mapDispatchToProps = {}

export const $1 = (WrappedComponent) => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />

  hocComponent.propTypes = {}

  return hocComponent
}

export default (WrapperComponent) =>
  connect(mapStateToProps, mapDispatchToProps)($1(WrapperComponent))
```

### `hoc`

```javascript
import PropTypes from 'prop-types'

export default (WrappedComponent) => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />

  hocComponent.propTypes = {}

  return hocComponent
}
```
