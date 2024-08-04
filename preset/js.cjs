"use strict";

const { __internal__rules: rules } = require("../lib/index.cjs");

/** @deprecated */
module.exports = {
  reportUnusedDisableDirectives: true,
  plugins: ["@stylistic"],
  rules: {
    ...rules.js,
    ...rules.stylistic,
  },
};
