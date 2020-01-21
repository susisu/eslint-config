"use strict";

const { OFF, WRN, ERR } = require("./levels");
const { removeOffRules } = require("./utils");

const overrides = {
  "no-throw-literal": OFF,
  "require-await"   : OFF,
};

const bestPractices = {
  "@typescript-eslint/await-thenable"          : ERR,
  "@typescript-eslint/no-floating-promises"    : WRN,
  "@typescript-eslint/no-for-in-array"         : WRN,
  "@typescript-eslint/no-implied-eval"         : ERR,
  "@typescript-eslint/no-misused-promises"     : WRN,
  "@typescript-eslint/no-throw-literal"        : WRN,
  "@typescript-eslint/no-unnecessary-condition": [WRN, {
    "ignoreRhs"                  : true,
    "allowConstantLoopConditions": true,
    "checkArrayPredicates"       : true,
  }],
  "@typescript-eslint/no-unnecessary-qualifier"      : OFF,
  "@typescript-eslint/no-unnecessary-type-arguments" : OFF,
  "@typescript-eslint/no-unnecessary-type-assertion" : WRN,
  "@typescript-eslint/prefer-includes"               : WRN,
  "@typescript-eslint/prefer-nullish-coalescing"     : OFF, // to be tested
  "@typescript-eslint/prefer-readonly"               : OFF,
  "@typescript-eslint/prefer-regexp-exec"            : WRN,
  "@typescript-eslint/prefer-string-starts-ends-with": ERR,
  "@typescript-eslint/promise-function-async"        : OFF,
  "@typescript-eslint/require-array-sort-compare"    : OFF,
  "@typescript-eslint/require-await"                 : WRN,
  "@typescript-eslint/restrict-plus-operands"        : [WRN, { "checkCompoundAssignments": true }],
  "@typescript-eslint/restrict-template-expressions" : OFF, // disabled for the sake of `any`
  "@typescript-eslint/return-await"                  : OFF,
  "@typescript-eslint/strict-boolean-expressions"    : OFF,
  "@typescript-eslint/unbound-method"                : ERR,
};

const rules = Object.assign({},
  overrides,
  removeOffRules(
    Object.assign({},
      bestPractices
    )
  )
);

module.exports = {
  "plugins": ["@typescript-eslint"],
  "rules"  : rules,
};
