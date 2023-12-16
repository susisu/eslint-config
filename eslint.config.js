"use strict";

const globals = require("globals");
const prettierConfig = require("eslint-config-prettier");
const { config, map } = require(".");

module.exports = [
  ...map({ files: ["**/*.ts"] }, [
    config.tsTypeChecked(),
    {
      languageOptions: {
        sourceType: "module",
        parserOptions: {
          project: "./tsconfig.json",
        },
        globals: {
          ...globals.es2021,
          ...globals.node,
        },
      },
    },
  ]),
  ...map({ files: ["**/*.js"] }, [
    config.js(),
    {
      languageOptions: {
        sourceType: "commonjs",
        globals: {
          ...globals.es2021,
          ...globals.node,
        },
      },
    },
  ]),
  ...map({ files: ["**/*.mjs"] }, [
    config.js(),
    {
      languageOptions: {
        sourceType: "module",
        globals: {
          ...globals.es2021,
          ...globals.node,
        },
      },
    },
  ]),
  prettierConfig,
];
