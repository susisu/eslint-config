"use strict";

const jsRules = require("../lib/rules/js");

module.exports = {
  reportUnusedDisableDirectives: true,
  rules: jsRules.rules,
};
