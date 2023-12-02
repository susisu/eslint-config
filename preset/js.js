"use strict";

const jsRules = require("../lib/rules/js");
const stylisticRules = require("../lib/rules/stylistic");

module.exports = {
  reportUnusedDisableDirectives: true,
  plugins: ["@stylistic"],
  rules: {
    ...jsRules.rules,
    ...stylisticRules.rules,
  },
};
