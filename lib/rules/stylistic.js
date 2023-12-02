"use strict";

const { ERR } = require("../levels");
const { removeDisabledRules } = require("../utils");

const rules = {
  "@stylistic/lines-between-class-members": [
    ERR,
    "always",
    {
      exceptAfterSingleLine: true,
    },
  ],
  "@stylistic/spaced-comment": [ERR, "always"],
};

module.exports = {
  rules: removeDisabledRules(rules),
};
