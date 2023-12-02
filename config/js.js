"use strict";

const stylisticPlugin = require("@stylistic/eslint-plugin");

const jsRules = require("../lib/rules/js");
const stylisticRules = require("../lib/rules/stylistic");

module.exports = () => {
  return {
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    plugins: {
      "@stylistic": stylisticPlugin,
    },
    rules: {
      ...jsRules.rules,
      ...stylisticRules.rules,
    },
  };
};
