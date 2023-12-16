"use strict";

const { __internal__rules: rules } = require("../lib/index.cjs");

module.exports = {
  reportUnusedDisableDirectives: true,
  plugins: ["@stylistic"],
  rules: {
    ...rules.js,
    ...rules.stylistic,
  },
};
