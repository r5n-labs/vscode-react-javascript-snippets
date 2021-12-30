module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },

  plugins: ["simple-import-sort"],

  rules: {
    "babel/no-unused-expressions": "off",
    "import/extensions": "off",
    "import/named": "off",
    "import/no-unresolved": "off",

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
  },
  globals: {
    __DEV__: true,
    jasmine: true,
  },
};
