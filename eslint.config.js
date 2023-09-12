"use strict";

const globals = require("globals");
const config = require(".");

module.exports = [
  {
    ...config.js,
    files: ["*.js", "{lib,preset,config}/**/*.js"],
    languageOptions: {
      ...config.js.languageOptions,
      ecmaVersion: 2021,
      sourceType: "commonjs",
      globals: {
        ...globals.es2021,
        ...globals.node,
      },
    },
  },
];
