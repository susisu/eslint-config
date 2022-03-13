"use strict";

const { OFF, WRN, ERR } = require("../lib/levels");
const { removeOffRules } = require("../lib/utils");

const overrides = {
  "dot-notation": OFF,
  "no-implied-eval": OFF,
  "no-throw-literal": OFF,
  "require-await": OFF,
};

const possibleProblems = {
  "@typescript-eslint/await-thenable": ERR,
  "@typescript-eslint/no-confusing-void-expression": [ERR, {
    "ignoreArrowShorthand": true,
  }],
  "@typescript-eslint/no-floating-promises": [WRN, {
    "ignoreVoid": false,
  }],
  "@typescript-eslint/no-for-in-array": WRN,
  "@typescript-eslint/no-misused-promises": [WRN, {
    checksVoidReturn: {
      // to be enabled later
      attributes: false,
      properties: false,
      returns: false,
      variables: false,
    },
  }],
  "@typescript-eslint/no-throw-literal": [ERR, {
    "allowThrowingAny": false,
    "allowThrowingUnknown": false,
  }],
  "@typescript-eslint/no-unsafe-argument": WRN,
  "@typescript-eslint/no-unsafe-assignment": WRN,
  "@typescript-eslint/no-unsafe-call": WRN,
  "@typescript-eslint/no-unsafe-member-access": WRN,
  "@typescript-eslint/no-unsafe-return": WRN,
  "@typescript-eslint/prefer-reduce-type-parameter": ERR,
  "@typescript-eslint/require-array-sort-compare": OFF,
  "@typescript-eslint/restrict-plus-operands": [WRN, {
    "checkCompoundAssignments": true,
  }],
  "@typescript-eslint/restrict-template-expressions": [WRN, {
    "allowNumber": true,
  }],
  "@typescript-eslint/return-await": OFF,
  "@typescript-eslint/unbound-method": ERR,
};

const suggestions = {
  "@typescript-eslint/consistent-type-exports": OFF,
  "@typescript-eslint/dot-notation": OFF,
  "@typescript-eslint/no-base-to-string": WRN,
  "@typescript-eslint/no-implied-eval": ERR,
  "@typescript-eslint/no-meaningless-void-operator": ERR,
  "@typescript-eslint/no-redundant-type-constituents": ERR,
  "@typescript-eslint/no-unnecessary-boolean-literal-compare": [ERR, {
    "allowComparingNullableBooleansToTrue": true,
    "allowComparingNullableBooleansToFalse": true,
  }],
  "@typescript-eslint/no-unnecessary-condition": [WRN, {
    "allowConstantLoopConditions": true,
  }],
  "@typescript-eslint/no-unnecessary-qualifier": OFF,
  "@typescript-eslint/no-unnecessary-type-arguments": OFF,
  "@typescript-eslint/no-unnecessary-type-assertion": ERR,
  "@typescript-eslint/non-nullable-type-assertion-style": OFF,
  "@typescript-eslint/prefer-includes": WRN,
  "@typescript-eslint/prefer-nullish-coalescing": OFF,
  // to be investigated
  "@typescript-eslint/prefer-readonly": OFF,
  "@typescript-eslint/prefer-readonly-parameter-types": OFF,
  "@typescript-eslint/prefer-regexp-exec": WRN,
  "@typescript-eslint/prefer-return-this-type": OFF,
  "@typescript-eslint/prefer-string-starts-ends-with": ERR,
  "@typescript-eslint/promise-function-async": OFF,
  "@typescript-eslint/require-await": ERR,
  "@typescript-eslint/strict-boolean-expressions": OFF,
  "@typescript-eslint/switch-exhaustiveness-check": WRN,
};

const layoutAndFormatting = {};

module.exports = {
  extends: ["./ts-without-types"],
  rules: {
    ...overrides,
    ...removeOffRules(
      {
        ...possibleProblems,
        ...suggestions,
        ...layoutAndFormatting,
      }
    ),
  },
};
