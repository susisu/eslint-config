"use strict";

module.exports = {
  extends: ["@susisu/eslint-config/preset/js"],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  env: {
    es6: true,
    node: true,
  },
  overrides: [
    {
      files: ["*.ts"],
      extends: ["@susisu/eslint-config/preset/ts-without-types"],
    },
    {
      files: ["*.strict.ts"],
      extends: ["@susisu/eslint-config/preset/ts"],
    },
  ],
};
