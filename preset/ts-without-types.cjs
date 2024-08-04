"use strict";

const { __internal__rules: rules } = require("../lib/index.cjs");

/** @deprecated */
module.exports = {
  reportUnusedDisableDirectives: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "@susisu/safe-typescript", "@stylistic"],
  rules: {
    ...rules.ts,
    ...rules.stylistic,
  },
};
