# VS Code React/JavaScript ES7 snippets

This extension provide you Javascript and React snippets in ES7 with babel plugins features for [Vs Code](https://code.visualstudio.com/)

## Supported languages (file extensions)
* JavaScript (.js)
* JavaScript React (.jsx)

## Release Notes

### 0.1.3

Specify React Components snippets, improve mapping componentNames and add static prop

### 0.1.2

Initial release of React and JS snippets basic on ES7 and babel plugins syntax

## Snippets

Every space inside `{ }` and `( )` means that this is pushed into next line :)

# React Components

## `rcc`
```javascript
import React, { Component } from 'react';

export default class componentName extends Component {
  render() {
    return (
      <div>

      </div>
    );
  }
}
```
## `rccp`
```javascript
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class componentName extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>

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

export class componentName extends Component {
  static propTypes = {
prop: PropTypes
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(componentName);
```
## `reduxmap`
```javascript
const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => bindActionCreators({

}, dispatch);
```

# React

|Prefix|Method|
|-------:|-------|
|`imr→`|`import React from 'react'`|
|`imrc→`|`import React, { Component } from 'react'`|
|`imrcp→`|`import React, { Component } from 'react' & import PropTypes from 'prop-types'`|
|`rcc→`|`Basic React component with import and export statement`|
|`rccp→`|`Basic React component with import and export statement + PropTypes`|
|`rcredux→`|`Basic React component with import and export statement + PropTypes connected to Redux by bindActionCreators`|
|`reduxmap→`|`mapState & mapDispatch to props statement`|
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
