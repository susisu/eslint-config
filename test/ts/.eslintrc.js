"use strict";

module.exports = {
  "extends"      : ["../../presets/ts"],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType" : "module",
    "project"    : "./tsconfig.json",
  },
  "env": {
    "es6": true,
  },
};
