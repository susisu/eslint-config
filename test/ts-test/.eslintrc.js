"use strict";

module.exports = {
  "extends": ["../../preset/ts-test"],
  "parserOptions": {
    "ecmaVersion": 2021,
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "env": {
    "es6": true,
  },
};
