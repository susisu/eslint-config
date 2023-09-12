"use strict";

const tsRules = require("../lib/rules/ts");

module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "@susisu/safe-typescript"],
  rules: tsRules.rules,
};
