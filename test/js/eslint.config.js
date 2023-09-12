"use strict";

const globals = require("globals");
const config = require("../..");

module.exports = [
  {
    ...config.js,
    files: ["src/**/*.js"],
    languageOptions: {
      ...config.js.languageOptions,
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...globals.es2021,
        ...globals.node,
      },
    },
  },
];
