import { SnippetMapping, SnippetPlaceholders } from '../types';

type ImportsMappings = {
  import: 'imp';
  importAs: 'ima';
  importBrowserRouter: 'imbr';
  importBrowserRouterWithRouteAndNavLink: 'imrr';
  importDestructing: 'imd';
  importEverything: 'ime';
  importNoModuleName: 'imn';
  importPropTypes: 'impt';
  importReact: 'imr';
  importReactDom: 'imrd';
  importReactWithComponent: 'imrc';
  importReactWithComponentAndPropTypes: 'imrcp';
  importReactWithMemo: 'imrm';
  importReactWithMemoAndPropTypes: 'imrmp';
  importReactWithPureComponent: 'imrpc';
  importReactWithPureComponentAndPropTypes: 'imrpcp';
  importReduxConnect: 'redux';
  importRouterLink: 'imbrl';
  importRouterNavLink: 'imbrnl';
  importRouterSetup: 'imbrc';
  importRouterSwitch: 'imbrs';
};

export type ImportsSnippet = SnippetMapping<ImportsMappings>;

/**
 * react, react-dom & prop-types
 */
const importReact: ImportsSnippet = {
  key: 'importReact',
  prefix: 'imr',
  body: ["import React from 'react'", ''],
};

const importReactDom: ImportsSnippet = {
  key: 'importReactDom',
  prefix: 'imrd',
  body: ["import ReactDOM from 'react-dom'", ''],
};

const importReactWithComponent: ImportsSnippet = {
  key: 'importReactWithComponent',
  prefix: 'imrc',
  body: ["import React, { Component } from 'react'", ''],
};

const importReactWithComponentAndPropTypes: ImportsSnippet = {
  key: 'importReactWithComponentAndPropTypes',
  prefix: 'imrcp',
  body: [
    "import React, { Component } from 'react'",
    "import PropTypes from 'prop-types'",
    '',
  ],
};

const importReactWithPureComponent: ImportsSnippet = {
  key: 'importReactWithPureComponent',
  prefix: 'imrpc',
  body: ["import React, { PureComponent } from 'react'", ''],
};

const importReactWithPureComponentAndPropTypes: ImportsSnippet = {
  key: 'importReactWithPureComponentAndPropTypes',
  prefix: 'imrpcp',
  body: [
    "import React, { PureComponent } from 'react'",
    "import PropTypes from 'prop-types'",
    '',
  ],
};

const importReactWithMemo: ImportsSnippet = {
  key: 'importReactWithMemo',
  prefix: 'imrm',
  body: ["import React, { memo } from 'react'", ''],
};

const importReactWithMemoAndPropTypes: ImportsSnippet = {
  key: 'importReactWithMemoAndPropTypes',
  prefix: 'imrmp',
  body: [
    "import React, { memo } from 'react'",
    "import PropTypes from 'prop-types'",
    '',
  ],
};

const importPropTypes: ImportsSnippet = {
  key: 'importPropTypes',
  prefix: 'impt',
  body: ["import PropTypes from 'prop-types'", ''],
};

/**
 * react-router
 */

const importBrowserRouter: ImportsSnippet = {
  key: 'importBrowserRouter',
  prefix: 'imbr',
  body: ["import { BrowserRouter as Router } from 'react-router-dom'", ''],
};

const importBrowserRouterWithRouteAndNavLink: ImportsSnippet = {
  key: 'importBrowserRouterWithRouteAndNavLink',
  prefix: 'imrr',
  body: [
    "import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'",
    '',
  ],
};

const importRouterSetup: ImportsSnippet = {
  key: 'importRouterSetup',
  prefix: 'imbrc',
  body: ["import { Route, Switch, NavLink, Link } from 'react-router-dom'", ''],
};

const importRouterSwitch: ImportsSnippet = {
  key: 'importRouterSwitch',
  prefix: 'imbrs',
  body: ["import { Switch } from 'react-router-dom'", ''],
};

const importRouterLink: ImportsSnippet = {
  key: 'importRouterLink',
  prefix: 'imbrl',
  body: ["import { Link } from 'react-router-dom'", ''],
};

const importRouterNavLink: ImportsSnippet = {
  key: 'importRouterNavLink',
  prefix: 'imbrnl',
  body: ["import { NavLink } from 'react-router-dom'", ''],
};

/**
 * Others
 */

const importSnippet: ImportsSnippet = {
  key: 'import',
  prefix: 'imp',
  body: [
    `import ${SnippetPlaceholders.SecondTab} from '${SnippetPlaceholders.FirstTab}'`,
    SnippetPlaceholders.LastTab,
  ],
};

const importNoModuleName: ImportsSnippet = {
  key: 'importNoModuleName',
  prefix: 'imn',
  body: [
    `import '${SnippetPlaceholders.FirstTab}'`,
    SnippetPlaceholders.LastTab,
  ],
};

const importDestructing: ImportsSnippet = {
  key: 'importDestructing',
  prefix: 'imd',
  body: [
    `import { ${SnippetPlaceholders.SecondTab} } from '${SnippetPlaceholders.FirstTab}'`,
    SnippetPlaceholders.LastTab,
  ],
};

const importEverything: ImportsSnippet = {
  key: 'importEverything',
  prefix: 'ime',
  body: [
    `import * as ${SnippetPlaceholders.SecondTab} from '${SnippetPlaceholders.FirstTab}'`,
    SnippetPlaceholders.LastTab,
  ],
};

const importAs: ImportsSnippet = {
  key: 'importAs',
  prefix: 'ima',
  body: [
    `import { ${SnippetPlaceholders.SecondTab} as ${SnippetPlaceholders.ThirdTab} } from '${SnippetPlaceholders.FirstTab}'`,
    SnippetPlaceholders.LastTab,
  ],
};

export default [
  importAs,
  importBrowserRouter,
  importBrowserRouterWithRouteAndNavLink,
  importDestructing,
  importEverything,
  importNoModuleName,
  importPropTypes,
  importReact,
  importReactDom,
  importReactWithComponent,
  importReactWithComponentAndPropTypes,
  importReactWithMemo,
  importReactWithMemoAndPropTypes,
  importReactWithPureComponent,
  importReactWithPureComponentAndPropTypes,
  importRouterLink,
  importRouterNavLink,
  importRouterSetup,
  importRouterSwitch,
  importSnippet,
];
