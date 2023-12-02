"use strict";

const tsEslintParser = require("@typescript-eslint/parser");

const tsEslintPlugin = require("@typescript-eslint/eslint-plugin");
const safeTsPlugin = require("@susisu/eslint-plugin-safe-typescript");
const stylisticPlugin = require("@stylistic/eslint-plugin");

const tsRules = require("../lib/rules/ts");
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
      "@stylistic": stylisticPlugin,
    },
    rules: {
      ...tsRules.rules,
      ...stylisticRules.rules,
    },
  };
};
