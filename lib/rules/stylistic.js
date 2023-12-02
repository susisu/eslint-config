"use strict";

// const { OFF, WRN, ERR } = require("../levels");
const { removeDisabledRules } = require("../utils");

const rules = {};

module.exports = {
  rules: removeDisabledRules(rules),
};
