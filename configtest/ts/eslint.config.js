"use strict";

const globals = require("globals");
const { config, map } = require("../..");

module.exports = [
  ...map(
    {
      files: ["**/*.ts"],
    },
    [
      config.ts(),
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
