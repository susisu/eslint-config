"use strict";

const globals = require("globals");
const config = require("../..");

module.exports = [
  {
    ...config.tsTypeChecked,
    files: ["src/**/*.ts"],
    languageOptions: {
      ...config.tsTypeChecked.languageOptions,
      ecmaVersion: 2021,
      sourceType: "module",
      parserOptions: {
        project: "tsconfig.json",
      },
      globals: {
        ...globals.es2021,
        ...globals.node,
      },
    },
  },
];
