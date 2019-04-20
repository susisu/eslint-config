"use strict";

const { OFF, OFF_INT } = require("./levels");

function removeOffRules(rules) {
  const newRules = {};
  for (const name of Object.keys(rules)) {
    const level = Array.isArray(rules[name]) ? rules[name][0] : rules[name];
    if (level === OFF || level === OFF_INT) {
      continue;
    }
    newRules[name] = rules[name];
  }
  return newRules;
}

module.exports = {
  removeOffRules,
};
