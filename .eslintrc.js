"use strict";

module.exports = {
  extends: ["./preset/js"],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "script",
  },
  env: {
    es6: true,
    node: true,
  },
};
