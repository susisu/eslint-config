"use strict";

const { OFF, OFF_INT } = require("./levels");

/**
 * Removes all disabled rules.
 * @template {Record<string, unknown>} T
 * @param {T} rules
 * @returns {T}
 */
function removeDisabledRules(rules) {
  return Object.fromEntries(
    [...Object.entries(rules)].filter(([, value]) => {
      const level = Array.isArray(value) ? value[0] : value;
      return !(level === OFF || level === OFF_INT);
    })
  );
}

/**
 * Creates an array of configs with each element merged shallowly with the base config.
 * @template Base
 * @template Config
 * @param {Base} base The base config.
 * @param {readonly Config[]} configs An array of configs.
 * @returns {(Base & Config)[]} A new array of configs.
 */
function map(base, configs) {
  return configs.map((config) => ({ ...base, ...config }));
}

module.exports = {
  removeDisabledRules,
  map,
};
