"use strict";

const jsRules = require("../lib/rules/js");

module.exports = {
  linterOptions: {
    reportUnusedDisableDirectives: true,
  },
  rules: jsRules.rules,
};
