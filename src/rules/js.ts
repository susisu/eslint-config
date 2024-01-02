import type { Rules } from "./common";
import { levels, removeDisabledRules } from "./common";

const { off, warn, error } = levels;

const possibleProblems: Rules = {
  "array-callback-return": error,
  "constructor-super": error,
  "for-direction": warn,
  "getter-return": error,
  "no-async-promise-executor": error,
  "no-await-in-loop": warn,
  "no-class-assign": error,
  "no-compare-neg-zero": error,
  "no-cond-assign": [warn, "always"],
  "no-const-assign": error,
  "no-constant-binary-expression": error,
  "no-constant-condition": [warn, { checkLoops: false }],
  "no-constructor-return": error,
  "no-control-regex": off,
  "no-debugger": error,
  "no-dupe-args": error,
  "no-dupe-class-members": error,
  "no-dupe-else-if": error,
  "no-dupe-keys": error,
  "no-duplicate-case": error,
  // disabled because no extension rule is provided by typescript-eslint
  // use import/no-duplicates instead for consistency
  "no-duplicate-imports": off,
  "no-empty-character-class": error,
  "no-empty-pattern": error,
  "no-ex-assign": error,
  "no-fallthrough": error,
  "no-func-assign": error,
  "no-import-assign": error,
  "no-inner-declarations": error,
  "no-invalid-regexp": error,
  "no-irregular-whitespace": error,
  "no-loss-of-precision": error,
  "no-misleading-character-class": error,
  "no-new-native-nonconstructor": error,
  // replaced by no-new-native-nonconstructor
  "no-new-symbol": off,
  "no-obj-calls": error,
  "no-promise-executor-return": error,
  "no-prototype-builtins": error,
  "no-self-assign": error,
  "no-self-compare": error,
  "no-setter-return": error,
  "no-sparse-arrays": error,
  "no-template-curly-in-string": warn,
  "no-this-before-super": error,
  "no-undef": error,
  "no-unexpected-multiline": error,
  "no-unmodified-loop-condition": warn,
  "no-unreachable": error,
  "no-unreachable-loop": error,
  "no-unsafe-finally": error,
  "no-unsafe-negation": [error, { enforceForOrderingRelations: true }],
  "no-unsafe-optional-chaining": [error, { disallowArithmeticOperators: true }],
  "no-unused-private-class-members": error,
  "no-unused-vars": [
    error,
    {
      ignoreRestSiblings: true,
      caughtErrors: "all",
      argsIgnorePattern: "^_",
      destructuredArrayIgnorePattern: "^_",
      caughtErrorsIgnorePattern: "^_",
    },
  ],
  "no-use-before-define": [warn, { functions: false, allowNamedExports: true }],
  "no-useless-backreference": error,
  "require-atomic-updates": warn,
  "use-isnan": [error, { enforceForSwitchCase: true, enforceForIndexOf: true }],
  "valid-typeof": error,
};

const suggestions: Rules = {
  "accessor-pairs": off,
  "arrow-body-style": off,
  "block-scoped-var": error,
  camelcase: error,
  "capitalized-comments": off,
  "class-methods-use-this": off,
  complexity: off,
  "consistent-return": error,
  "consistent-this": off,
  curly: error,
  "default-case": error,
  "default-case-last": error,
  "default-param-last": error,
  "dot-notation": off,
  eqeqeq: error,
  "func-name-matching": error,
  "func-names": off,
  "func-style": [error, "declaration", { allowArrowFunctions: true }],
  "grouped-accessor-pairs": [error, "getBeforeSet"],
  "guard-for-in": warn,
  "id-denylist": off,
  "id-length": off,
  "id-match": off,
  "init-declarations": off,
  "logical-assignment-operators": off,
  "max-classes-per-file": off,
  "max-depth": off,
  "max-lines": off,
  "max-lines-per-function": off,
  "max-nested-callbacks": off,
  "max-params": off,
  "max-statements": off,
  "multiline-comment-style": off,
  "new-cap": [error, { capIsNewExceptions: ["BigInt"] }],
  "no-alert": error,
  "no-array-constructor": error,
  "no-bitwise": off,
  "no-caller": error,
  "no-case-declarations": error,
  "no-console": warn,
  "no-continue": off,
  "no-delete-var": error,
  "no-div-regex": off,
  "no-else-return": off,
  "no-empty": error,
  "no-empty-function": off,
  "no-empty-static-block": error,
  "no-eq-null": error,
  "no-eval": error,
  "no-extend-native": error,
  "no-extra-bind": error,
  "no-extra-boolean-cast": [error, { enforceForLogicalOperands: true }],
  "no-extra-label": error,
  "no-global-assign": error,
  // `!!` is exceptionally allowed because it is a very frequently used pattern
  "no-implicit-coercion": [error, { allow: ["!!"] }],
  "no-implicit-globals": [error, { lexicalBindings: true }],
  "no-implied-eval": error,
  "no-inline-comments": off,
  "no-invalid-this": [warn, { capIsConstructor: false }],
  "no-iterator": error,
  "no-label-var": error,
  "no-labels": off,
  "no-lone-blocks": error,
  "no-lonely-if": off,
  "no-loop-func": error,
  "no-magic-numbers": off,
  "no-multi-assign": error,
  "no-multi-str": error,
  "no-negated-condition": off,
  "no-nested-ternary": off,
  "no-new": error,
  "no-new-func": off,
  "no-new-wrappers": error,
  "no-nonoctal-decimal-escape": error,
  "no-object-constructor": error,
  "no-octal": error,
  "no-octal-escape": error,
  "no-param-reassign": error,
  "no-plusplus": [error, { allowForLoopAfterthoughts: true }],
  "no-proto": error,
  "no-redeclare": error,
  "no-regex-spaces": error,
  "no-restricted-exports": off,
  "no-restricted-globals": off,
  "no-restricted-imports": off,
  "no-restricted-properties": off,
  "no-restricted-syntax": off,
  "no-return-assign": error,
  "no-script-url": off,
  "no-sequences": error,
  "no-shadow": off,
  "no-shadow-restricted-names": error,
  "no-ternary": off,
  "no-throw-literal": error,
  "no-undef-init": off,
  "no-undefined": off,
  "no-underscore-dangle": off,
  "no-unneeded-ternary": error,
  // JSXs are mostly recognized as pure expressions
  "no-unused-expressions": [error, { enforceForJSX: true }],
  "no-unused-labels": error,
  "no-useless-call": error,
  "no-useless-catch": error,
  "no-useless-computed-key": [error, { enforceForClassMembers: true }],
  "no-useless-concat": error,
  "no-useless-constructor": error,
  "no-useless-escape": error,
  "no-useless-rename": error,
  "no-useless-return": error,
  "no-var": error,
  "no-void": error,
  "no-warning-comments": warn,
  "no-with": error,
  "object-shorthand": [error, "always"],
  "one-var": [error, "never"],
  "one-var-declaration-per-line": off,
  "operator-assignment": off,
  "prefer-arrow-callback": [error, { allowNamedFunctions: true, allowUnboundThis: true }],
  "prefer-const": error,
  "prefer-destructuring": off,
  "prefer-exponentiation-operator": error,
  "prefer-named-capture-group": off,
  "prefer-numeric-literals": error,
  // disabled because it's too early to require ES2022
  "prefer-object-has-own": off,
  "prefer-object-spread": error,
  "prefer-promise-reject-errors": [error, { allowEmptyReject: false }],
  "prefer-regex-literals": error,
  "prefer-rest-params": error,
  "prefer-spread": error,
  "prefer-template": off,
  radix: error,
  "require-await": warn,
  "require-unicode-regexp": off,
  "require-yield": error,
  "sort-imports": off,
  "sort-keys": off,
  "sort-vars": off,
  strict: error,
  "symbol-description": error,
  "vars-on-top": error,
  yoda: off,
};

const layoutAndFormatting: Rules = {
  "line-comment-position": off,
  "unicode-bom": [error, "never"],
};

export const rules = removeDisabledRules({
  ...possibleProblems,
  ...suggestions,
  ...layoutAndFormatting,
});
