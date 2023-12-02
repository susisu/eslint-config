"use strict";

const styliticPlugin = require("@stylistic/eslint-plugin");

const jsRules = require("../lib/rules/js");
const stylisticRules = require("../lib/rules/stylistic");

module.exports = () => {
  return {
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    plugins: {
      "@stylistic": styliticPlugin,
    },
    rules: {
      ...jsRules.rules,
      ...stylisticRules.rules,
    },
  };
};
