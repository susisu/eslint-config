"use strict";

const globals = require("globals");
const merge = require("lodash.merge");
const config = require(".");

module.exports = [
  merge(
    config.js,
    {
      files: ["*.js", "{lib,preset,config}/**/*.js"],
      languageOptions: {
        ecmaVersion: 2021,
        sourceType: "commonjs",
        globals: {
          ...globals.es2021,
          ...globals.node,
        },
      },
    }
  ),
];
