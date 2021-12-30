import { SnippetPlaceholders } from '../types';

export const reactComponent = ["import React, { Component } from 'react'", ''];
export const react = ["import React from 'react'", ''];
export const reactPureComponent = [
  "import React, { PureComponent } from 'react'",
  '',
];
export const reactPropTypes = [
  "import React from 'react'",
  "import PropTypes from 'prop-types'",
  '',
];

export const reactWithReduxConnect = [
  "import React from 'react'",
  "import { connect } from 'react-redux'",
  '',
];

export const reactComponentWithReduxConnect = [
  "import React, { Component } from 'react'",
  "import { connect } from 'react-redux'",
  '',
];

export const reactWithMemo = ["import React, { memo } from 'react'", ''];

export const reduxComponentExport = [
  '',
  'const mapStateToProps = (state) => ({})',
  '',
  'const mapDispatchToProps = {}',
  '',
  `export default connect(mapStateToProps, mapDispatchToProps)(${SnippetPlaceholders.FileName})`,
  '',
];

export const innerComponent = [
  '  return (',
  '    <div>',
  `      ${SnippetPlaceholders.LastTab}`,
  '    </div>',
  '  )',
];

export const innerComponentReturn = [
  '  render() {',
  '    return (',
  '      <div>',
  `        ${SnippetPlaceholders.LastTab}`,
  '      </div>',
  '    )',
  '  }',
];

export const exportDefault = [
  '',
  `export default ${SnippetPlaceholders.FileName}`,
  '',
];

export const propsTypeInterface = [
  `${SnippetPlaceholders.TypeInterface} Props {}`,
  '',
];
export const stateTypeInterface = [
  `${SnippetPlaceholders.TypeInterface} State {}`,
  '',
];
export const propsStateInterface = [
  ...propsTypeInterface,
  ...stateTypeInterface,
  '',
];
