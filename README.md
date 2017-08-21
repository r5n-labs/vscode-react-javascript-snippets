# VS Code ES7 React/Redux/React-Native/JS snippets

[![Version](https://vsmarketplacebadge.apphb.com/version/dsznajder.es7-react-js-snippets.svg)](https://vsmarketplacebadge.apphb.com/version-short/dsznajder.es7-react-js-snippets.svg)
[![Install](https://vsmarketplacebadge.apphb.com/installs/dsznajder.es7-react-js-snippets.svg)](https://vsmarketplacebadge.apphb.com/installs-short/dsznajder.es7-react-js-snippets.svg)
[![Ratings](https://vsmarketplacebadge.apphb.com/rating-short/dsznajder.es7-react-js-snippets.svg)](https://vsmarketplacebadge.apphb.com/rating-short/dsznajder.es7-react-js-snippets.svg)

This extension provide you Javascript and React/Redux snippets in ES7 with babel plugins features for [Vs Code](https://code.visualstudio.com/)

Here is direct link to marketplace [ES7 React/Redux/React-Native/JS Snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

## Supported languages (file extensions)
* JavaScript (.js)
* JavaScript React (.jsx)

## Snippets info
Every space inside `{ }` and `( )` means that this is pushed into next line :)
`$` represent each step after `tab`.

# Basic Methods
|Prefix|Method|
|-------:|-------|
|`imp→`|`import moduleName from 'module'`|
|`imn→`|`import 'module'`|
|`imd→`|`import { destructuredModule } from 'module'`|
|`ime→`|`import * as alias from 'module'`|
|`ima→`|`import { originalName as aliasName} from 'module'`|
|`enf→`|`export const functionName = (params) => { }`|
|`edf→`|`export default (params) => { }`|
|`met→`|`methodName = (params) => { }`|
|`fre→`|`arrayName.forEach(element => { }`|
|`fof→`|`for(let itemName of objectName { }`|
|`fin→`|`for(let itemName in objectName { }`|
|`anfn→`|`(params) => { }`|
|`nfn→`|`const functionName = (params) => { }`|
|`dob→`|`const {propName} = objectToDescruct`|
|`dar→`|`const [propName] = arrayToDescruct`|
|`sti→`|`setInterval(() => { }, intervalTime`|
|`sto→`|`setTimeout(() => { }, delayTime`|
|`prom→`|`return new Promise((resolve, reject) => { }`|

# React
|Prefix|Method|
|-------:|-------|
|`imr→`|`import React from 'react'`|
|`imrc→`|`import React, { Component } from 'react'`|
|`imrcp→`|`import React, { Component } from 'react' & import PropTypes from 'prop-types'`|
|`imrpc→`|`import React, { PureComponent } from 'react';`|
|`imrpcp→`|`import React, { PureComponent } from 'react' & import PropTypes from 'prop-types'`|
|`redux`|`import { connect } from 'react-redux' & import { bindActionCreators } from 'redux'`|
|`rconst→`|`constructor(props) with this.state`|
|`rconc→`|`constructor(props, context) with this.state`|
|`est→`|`this.state = { }`|
|`cwm→`|`componentWillMount = () => { }`|
|`cdm→`|`componentDidMount = () => { }`|
|`cwr→`|`componentWillReceiveProps = (nextProps) => { }`|
|`scu→`|`shouldComponentUpdate = (nextProps, nextState) => { }`|
|`cwup→`|`componentWillUpdate = (nextProps, nextState) => { }`|
|`cdup→`|`componentDidUpdate = (prevProps, prevState) => { }`|
|`cwun→`|`componentWillUnmount = () => { }`|
|`ren→`|`render() { return( ) }`|
|`sst→`|`this.setState({ })`|
|`ssf→`|`this.setState((state, props) => return { })`|
|`props→`|`this.props.propName`|
|`state→`|`this.state.stateName`|

# React Native
|Prefix|Method|
|-------:|-------|
|`imrn→`|`import { $1 } from 'react-native'`|

# Redux
|Prefix|Method|
|-------:|-------|
|`rxaction→`|`redux action template`|
|`rxconst→`|`export const $1 = '$1'`|
|`rxreducer→`|`redux reducer template`|
|`rxselect→`|`redux selector template`|

# PropTypes
|Prefix|Method|
|-------:|-------|
|`pta→`|`PropTypes.array`|
|`ptar→`|`PropTypes.array.isRequired`|
|`ptb→`|`PropTypes.bool`|
|`ptbr→`|`PropTypes.bool.isRequired`|
|`ptf→`|`PropTypes.func`|
|`ptfr→`|`PropTypes.func.isRequired`|
|`ptn→`|`PropTypes.number`|
|`ptnr→`|`PropTypes.number.isRequired`|
|`pto→`|`PropTypes.object`|
|`ptor→`|`PropTypes.object.isRequired`|
|`pts→`|`PropTypes.string`|
|`ptsr→`|`PropTypes.string.isRequired`|
|`ptnd→`|`PropTypes.node`|
|`ptndr→`|`PropTypes.node.isRequired`|
|`ptel→`|`PropTypes.element`|
|`ptelr→`|`PropTypes.element.isRequired`|
|`pti→`|`PropTypes.instanceOf(name)`|
|`ptir→`|`PropTypes.instanceOf(name).isRequired`|
|`pte→`|`PropTypes.oneOf([name])`|
|`pter→`|`PropTypes.oneOf([name]).isRequired`|
|`ptet→`|`PropTypes.oneOfType([name])`|
|`ptetr→`|`PropTypes.oneOfType([name]).isRequired`|
|`ptao→`|`PropTypes.arrayOf(name)`|
|`ptaor→`|`PropTypes.arrayOf(name).isRequired`|
|`ptoo→`|`PropTypes.objectOf(name)`|
|`ptoor→`|`PropTypes.objectOf(name).isRequired`|
|`ptsh→`|`PropTypes.shape({ })`|
|`ptshr→`|`PropTypes.shape({ }).isRequired`|

# Console
|Prefix|Method|
|-------:|-------|
|`clg→`|`console.log(object)`|
|`cas→`|`console.assert(expression,object)`|
|`ccl→`|`console.clear()`|
|`cco→`|`console.count(label)`|
|`cdi→`|`console.dir`|
|`cer→`|`console.error(object)`|
|`cgr→`|`console.group(label)`|
|`cge→`|`console.groupEnd()`|
|`ctr→`|`console.trace(object)`|
|`cwa→`|`console.warn`|
|`cin→`|`console.info`|

# React Components
## `rcc`
```javascript
import React, { Component } from 'react';

export default class $1 extends Component {
  render() {
    return (
      <div>
        $2
      </div>
    );
  }
}
```
## `rce`
```javascript
import React, { Component } from 'react';

export class $1 extends Component {
  render() {
    return (
      <div>
        $2
      </div>
    );
  }
}
export default $1;
```
## `rcep`
```javascript
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class $1 extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        $2
      </div>
    );
  }
}

export default $1;
```
## `rpc`
```javascript
import React, { PureComponent } from 'react';

export default class $1 extends PureComponent {
  render() {
    return (
      <div>
        $2
      </div>
    );
  }
}
```
## `rpcp`
```javascript
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class $1 extends PureComponent {
  static propTypes = {

  }

  render() {
    return (
      <div>
        $2
      </div>
    );
  }
}
```
## `rccp`
```javascript
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class $1 extends Component {
  static propTypes = {
    $2: $3
  }

  render() {
    return (
      <div>
        $4
      </div>
    );
  }
}
```
## `rcredux`
```javascript
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export class $1 extends Component {
  static propTypes = {
    $2: $3
  }

  render() {
    return (
      <div>
        $4
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)($1);
```
## `reduxmap`
```javascript
const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => bindActionCreators({

}, dispatch);
```

# React Native Components
## `rnc`
```javascript
import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class $1 extends Component {
  render() {
    return (
      <View>
        <Text> $2 </Text>
      </View>
    );
  }
}
```
## `rnce`
```javascript
import React, { Component } from 'react';
import { Text, View } from 'react-native';

export class $1 extends Component {
  render() {
    return (
      <View>
        <Text> $2 </Text>
      </View>
    );
  }
}

export default $1
```

# Others
## `desc`
```javascript
describe('$1', () => {
  $2
});
```

## `test`
```javascript
test('should $1', () => {
  $2
});
```

## `tit`
```javascript
it('should $1', () => {
  $2
});
```

## `stest`
```javascript
import { ${1: ComponentName }, mapStateToProps, mapDispatchToProps } from '${2:path}/${1:ComponentName}';

describe('<${1:ComponentName} />', () => {
  const defaultProps = {

  };

  const setup = buildSetup(${1: ComponentName }, defaultProps);

  test('render', () => {
    expect(setup().wrapper).toMatchSnapshot();
  });
});
```
## `sjtest`
```javascript
import toJson from 'enzyme-to-json';
import { ${1:ComponentName} }, mapStateToProps, mapDispatchToProps } from '${2:path}/${1:ComponentName}';

describe('<${1:ComponentName} />', () => {
  const defaultProps = {

  };

  const setup = buildSetup(${1: ComponentName }, defaultProps);

  test('render', () => {
    expect(toJson(setup().wrapper)).toMatchSnapshot();
  });
})
```
