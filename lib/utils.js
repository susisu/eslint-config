"use strict";

const { OFF, OFF_INT } = require("./levels");

function removeDisabledRules(rules) {
  return Object.fromEntries(
    [...Object.entries(rules)].filter(([, value]) => {
      const level = Array.isArray(value) ? value[0] : value;
      return !(level === OFF || level === OFF_INT);
    })
  );
}

module.exports = {
  removeDisabledRules,
};
