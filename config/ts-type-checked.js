"use strict";

const tsEslintParser = require("@typescript-eslint/parser");

const tsEslintPlugin = require("@typescript-eslint/eslint-plugin");
const safeTsPlugin = require("@susisu/eslint-plugin-safe-typescript");

const tsTypeCheckedRules = require("../lib/rules/ts-type-checked");

module.exports = {
  linterOptions: {
    reportUnusedDisableDirectives: true,
  },
  languageOptions: {
    parser: tsEslintParser,
  },
  plugins: {
    "@typescript-eslint": tsEslintPlugin,
    "@susisu/safe-typescript": safeTsPlugin,
  },
  rules: tsTypeCheckedRules.rules,
};
