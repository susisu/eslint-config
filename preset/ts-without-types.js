"use strict";

const tsRules = require("../lib/rules/ts");
const stylisticRules = require("../lib/rules/stylistic");

module.exports = {
  reportUnusedDisableDirectives: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "@susisu/safe-typescript", "@stylistic"],
  rules: {
    ...tsRules.rules,
    ...stylisticRules.rules,
  },
};
