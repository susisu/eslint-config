"use strict";

const jsRules = require("../lib/rules/js");

module.exports = () => {
  return {
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules: jsRules.rules,
  };
};
