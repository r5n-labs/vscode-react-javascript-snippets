module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },

  plugins: ["simple-import-sort"],
  extends: ["satya164"],

  rules: {
    "babel/no-unused-expressions": "off",
    "import/extensions": "off",
    "import/named": "off",
    "import/no-unresolved": "off",
    "jest/consistent-test-it": ["error", { fn: "test" }],
    "jest/no-truthy-falsy": "off",
    "jest/expect-expect": ["error", { assertFunctionNames: ["expect", "element"] }],

    "prettier/prettier": [
      "error",
      {
        bracketSameLine: false,
        bracketSpacing: true,
        printWidth: 100,
        semi: true,
        singleQuote: false,
        tabWidth: 2,
        trailingComma: "all",
        useTabs: false,
      },
    ],

    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Side effect imports.
          ["^\\u0000"],
          // Packages.
          ["^@?\\w"],
          ["^../"],
          ["^./"],
        ],
      },
    ],

    "@typescript-eslint/array-type": ["error", { default: "generic", readonly: "generic" }],
  },
  globals: {
    __DEV__: true,
    jasmine: true,
  },
};
