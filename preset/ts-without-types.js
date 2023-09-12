"use strict";

const ts = require("../lib/rules/ts");

module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "@susisu/safe-typescript"],
  rules: ts.rules,
};
