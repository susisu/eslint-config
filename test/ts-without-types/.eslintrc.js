"use strict";

module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "script",
  },
  env: {
    es6: true,
    node: true,
  },
  overrides: [
    {
      files: ["./src/**/*.ts"],
      extends: ["../../preset/ts-without-types"],
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
      },
      env: {
        es6: true,
      },
    },
  ],
};
