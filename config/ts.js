"use strict";

const tsEslintParser = require("@typescript-eslint/parser");

const tsEslintPlugin = require("@typescript-eslint/eslint-plugin");
const safeTsPlugin = require("@susisu/eslint-plugin-safe-typescript");

const tsRules = require("../lib/rules/ts");

module.exports = () => {
  return {
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
    rules: tsRules.rules,
  };
};
