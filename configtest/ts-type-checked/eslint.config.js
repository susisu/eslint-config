"use strict";

const globals = require("globals");
const { config, map } = require("../..");

module.exports = [
  ...map(
    {
      files: ["**/*.ts"],
    },
    [
      config.tsTypeChecked,
      {
        languageOptions: {
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
    ]
  ),
];
