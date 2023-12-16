"use strict";

const tsTypeCheckedRules = require("../lib/rules/ts-type-checked");
const stylisticRules = require("../lib/rules/stylistic");

module.exports = {
  reportUnusedDisableDirectives: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "@susisu/safe-typescript", "@stylistic"],
  rules: {
    ...tsTypeCheckedRules.rules,
    ...stylisticRules.rules,
  },
};
