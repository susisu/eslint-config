"use strict";

const tsTypeChecked = require("../lib/rules/ts-type-checked");

module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "@susisu/safe-typescript"],
  rules: tsTypeChecked.rules,
};
