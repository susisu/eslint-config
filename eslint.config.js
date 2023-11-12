"use strict";

const globals = require("globals");
const { config, map } = require(".");

module.exports = [
  ...map(
    {
      files: ["**/*.js"],
    },
    [
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
    ]
  ),
  ...map(
    {
      files: ["**/*.mjs"],
    },
    [
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
    ]
  ),
];
