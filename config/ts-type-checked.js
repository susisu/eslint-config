"use strict";

const tsEslintParser = require("@typescript-eslint/parser");

const tsEslintPlugin = require("@typescript-eslint/eslint-plugin");
const safeTsPlugin = require("@susisu/eslint-plugin-safe-typescript");
const styliticPlugin = require("@stylistic/eslint-plugin");

const tsTypeCheckedRules = require("../lib/rules/ts-type-checked");
const stylisticRules = require("../lib/rules/stylistic");

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
      "@stylistic": styliticPlugin,
    },
    rules: {
      ...tsTypeCheckedRules.rules,
      ...stylisticRules.rules,
    },
  };
};
