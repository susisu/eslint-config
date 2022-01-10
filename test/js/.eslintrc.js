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
      files: ["./src/**/*.js"],
      extends: ["../../preset/js"],
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
