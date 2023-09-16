"use strict";

const globals = require("globals");
const { config, map } = require("../..");

module.exports = [
  ...map(
    {
      files: ["**/*.js"],
    },
    [
      config.js,
      {
        languageOptions: {
          ecmaVersion: 2021,
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
