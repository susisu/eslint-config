"use strict";

module.exports = {
  "extends"      : ["../../preset/ts-types"],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType" : "module",
    "project"    : "./tsconfig.json"
  },
  "env": {
    "es6": true,
  },
};
