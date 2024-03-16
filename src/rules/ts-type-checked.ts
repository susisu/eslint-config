import type { Rules } from "./common";
import { levels, removeDisabledRules } from "./common";
import { rules as tsRules } from "./ts";

const { off, warn, error } = levels;

const overrides: Rules = {
  "consistent-return": off,
  "dot-notation": off,
  "no-implied-eval": off,
  "no-throw-literal": off,
  "prefer-destructuring": off,
  "prefer-promise-reject-errors": off,
  "require-await": off,
};

const possibleProblems: Rules = {
  "@typescript-eslint/await-thenable": error,
  "@typescript-eslint/no-array-delete": error,
  "@typescript-eslint/no-confusing-void-expression": [error, { ignoreArrowShorthand: true }],
  "@typescript-eslint/no-floating-promises": [warn, { ignoreVoid: false }],
  "@typescript-eslint/no-for-in-array": warn,
  "@typescript-eslint/no-misused-promises": [
    warn,
    { checksConditionals: true, checksVoidReturn: true },
  ],
  "@typescript-eslint/no-mixed-enums": warn,
  "@typescript-eslint/no-throw-literal": [
    error,
    { allowThrowingAny: false, allowThrowingUnknown: false },
  ],
  "@typescript-eslint/no-unsafe-argument": warn,
  "@typescript-eslint/no-unsafe-assignment": warn,
  "@typescript-eslint/no-unsafe-call": warn,
  "@typescript-eslint/no-unsafe-member-access": warn,
  "@typescript-eslint/no-unsafe-return": warn,
  "@typescript-eslint/no-unsafe-unary-minus": error,
  "@typescript-eslint/no-useless-template-literals": error,
  "@typescript-eslint/prefer-reduce-type-parameter": error,
  "@typescript-eslint/require-array-sort-compare": off,
  "@typescript-eslint/restrict-plus-operands": warn,
  "@typescript-eslint/restrict-template-expressions": [warn, { allowNumber: true }],
  "@typescript-eslint/return-await": off,
  "@typescript-eslint/unbound-method": error,
};

const suggestions: Rules = {
  "@typescript-eslint/consistent-return": error,
  "@typescript-eslint/consistent-type-exports": off,
  "@typescript-eslint/dot-notation": off,
  "@typescript-eslint/no-base-to-string": warn,
  "@typescript-eslint/no-duplicate-type-constituents": off,
  "@typescript-eslint/no-implied-eval": error,
  "@typescript-eslint/no-meaningless-void-operator": error,
  "@typescript-eslint/no-redundant-type-constituents": error,
  "@typescript-eslint/no-unnecessary-boolean-literal-compare": [
    error,
    { allowComparingNullableBooleansToTrue: true, allowComparingNullableBooleansToFalse: true },
  ],
  "@typescript-eslint/no-unnecessary-condition": [warn, { allowConstantLoopConditions: true }],
  "@typescript-eslint/no-unnecessary-qualifier": off,
  "@typescript-eslint/no-unnecessary-type-arguments": off,
  "@typescript-eslint/no-unnecessary-type-assertion": error,
  "@typescript-eslint/no-unsafe-enum-comparison": error,
  "@typescript-eslint/non-nullable-type-assertion-style": off,
  "@typescript-eslint/prefer-destructuring": off,
  "@typescript-eslint/prefer-find": error,
  "@typescript-eslint/prefer-includes": warn,
  "@typescript-eslint/prefer-nullish-coalescing": off,
  "@typescript-eslint/prefer-promise-reject-errors": [error, { allowEmptyReject: false }],
  // to be investigated
  "@typescript-eslint/prefer-readonly": off,
  "@typescript-eslint/prefer-readonly-parameter-types": off,
  "@typescript-eslint/prefer-regexp-exec": warn,
  "@typescript-eslint/prefer-return-this-type": off,
  "@typescript-eslint/prefer-string-starts-ends-with": error,
  "@typescript-eslint/promise-function-async": off,
  "@typescript-eslint/require-await": warn,
  "@typescript-eslint/strict-boolean-expressions": off,
  // "default-case" enforces the requirement for a `default` case.
  // "switch-exhaustiveness-check" is enabled for additional information.
  "@typescript-eslint/switch-exhaustiveness-check": [
    warn,
    { allowDefaultCaseForExhaustiveSwitch: true, requireDefaultForNonUnion: true },
  ],
};

const layoutAndFormatting: Rules = {};

const safeTypeScript: Rules = {
  "@susisu/safe-typescript/no-unsafe-object-enum-method": warn,
  "@susisu/safe-typescript/no-unsafe-object-property-check": warn,
  "@susisu/safe-typescript/no-unsafe-object-property-overwrite": warn,
};

export const rules = removeDisabledRules({
  ...tsRules,
  ...overrides,
  ...possibleProblems,
  ...suggestions,
  ...layoutAndFormatting,
  ...safeTypeScript,
});
