"use strict";

const tsTypeCheckedRules = require("../lib/rules/ts-type-checked");

module.exports = {
  reportUnusedDisableDirectives: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "@susisu/safe-typescript"],
  rules: tsTypeCheckedRules.rules,
};
