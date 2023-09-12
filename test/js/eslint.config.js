"use strict";

const globals = require("globals");
const merge = require("lodash.merge");
const config = require("../..");

module.exports = [
  merge(
    config.js,
    {
      files: ["src/**/*.js"],
      languageOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        globals: {
          ...globals.es2021,
          ...globals.node,
        },
      },
    }
  ),
];
