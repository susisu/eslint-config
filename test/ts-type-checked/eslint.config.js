"use strict";

const globals = require("globals");
const merge = require("lodash.merge");
const config = require("../..");

module.exports = [
  merge(
    config.tsTypeChecked,
    {
      files: ["src/**/*.ts"],
      languageOptions: {
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
    }
  ),
];
