"use strict";

const tsRules = require("../lib/rules/ts");

module.exports = {
  reportUnusedDisableDirectives: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "@susisu/safe-typescript"],
  rules: tsRules.rules,
};
