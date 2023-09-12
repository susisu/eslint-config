"use strict";

const globals = require("globals");
const config = require("../..");

module.exports = [
  {
    ...config.ts,
    files: ["src/**/*.ts"],
    languageOptions: {
      ...config.ts.languageOptions,
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...globals.es2021,
        ...globals.node,
      },
    },
  },
];
