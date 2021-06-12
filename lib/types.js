"use strict";

const { OFF, WRN, ERR } = require("./levels");
const { removeOffRules } = require("./utils");

const overrides = {
  "dot-notation": OFF,
  "no-throw-literal": OFF,
  "require-await": OFF,
};

const possibleErrors = {
  "@typescript-eslint/no-unsafe-argument": WRN,
  "@typescript-eslint/no-unsafe-assignment": WRN,
  "@typescript-eslint/no-unsafe-call": WRN,
  "@typescript-eslint/no-unsafe-member-access": WRN,
  "@typescript-eslint/no-unsafe-return": WRN,
  "@typescript-eslint/prefer-readonly-parameter-types": OFF, // to be tested
};

const bestPractices = {
  "@typescript-eslint/await-thenable": ERR,
  "@typescript-eslint/dot-notation": OFF,
  "@typescript-eslint/no-base-to-string": WRN,
  "@typescript-eslint/no-confusing-void-expression": [ERR, { "ignoreArrowShorthand": true }],
  "@typescript-eslint/no-floating-promises": [WRN, { "ignoreVoid": false }],
  "@typescript-eslint/no-for-in-array": WRN,
  "@typescript-eslint/no-implied-eval": ERR,
  "@typescript-eslint/no-misused-promises": WRN,
  "@typescript-eslint/no-throw-literal": WRN,
  "@typescript-eslint/no-unnecessary-condition": [WRN, {
    "allowConstantLoopConditions": true,
  }],
  "@typescript-eslint/no-unnecessary-qualifier": OFF,
  "@typescript-eslint/no-unnecessary-type-arguments": OFF,
  "@typescript-eslint/no-unnecessary-type-assertion": WRN,
  "@typescript-eslint/non-nullable-type-assertion-style": OFF,
  "@typescript-eslint/prefer-includes": WRN,
  "@typescript-eslint/prefer-nullish-coalescing": OFF,
  "@typescript-eslint/prefer-readonly": OFF,
  "@typescript-eslint/prefer-reduce-type-parameter": ERR,
  "@typescript-eslint/prefer-regexp-exec": WRN,
  "@typescript-eslint/prefer-string-starts-ends-with": ERR,
  "@typescript-eslint/promise-function-async": OFF,
  "@typescript-eslint/require-array-sort-compare": OFF,
  "@typescript-eslint/require-await": WRN,
  "@typescript-eslint/restrict-plus-operands": [WRN, {
    "checkCompoundAssignments": true,
  }],
  "@typescript-eslint/restrict-template-expressions": [WRN, { "allowNumber": true }],
  "@typescript-eslint/return-await": OFF,
  "@typescript-eslint/strict-boolean-expressions": OFF,
  "@typescript-eslint/switch-exhaustiveness-check": WRN,
  "@typescript-eslint/unbound-method": ERR,
};

const stylisticIssues = {
  "@typescript-eslint/no-unnecessary-boolean-literal-compare": [ERR, {
    "allowComparingNullableBooleansToTrue": true,
    "allowComparingNullableBooleansToFalse": true,
  }],
};

const rules = Object.assign({},
  overrides,
  removeOffRules(
    Object.assign({},
      possibleErrors,
      bestPractices,
      stylisticIssues
    )
  )
);

module.exports = {
  plugins: ["@typescript-eslint"],
  rules,
};
