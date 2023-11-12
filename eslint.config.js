"use strict";

const globals = require("globals");
const prettierConfig = require("eslint-config-prettier");
const { config, map } = require(".");

module.exports = [
  ...map(
    {
      files: ["**/*.js"],
    },
    [
      config.js,
      prettierConfig,
      {
        languageOptions: {
          sourceType: "commonjs",
          globals: {
            ...globals.es2021,
            ...globals.node,
          },
        },
      },
    ],
  ),
  ...map(
    {
      files: ["**/*.mjs"],
    },
    [
      config.js,
      prettierConfig,
      {
        languageOptions: {
          sourceType: "module",
          globals: {
            ...globals.es2021,
            ...globals.node,
          },
        },
      },
    ],
  ),
];
