"use strict";

const { OFF, WRN, ERR } = require("../lib/levels");
const { removeOffRules } = require("../lib/utils");

const possibleProblems = {
  "array-callback-return": ERR,
  "constructor-super": ERR,
  "for-direction": WRN,
  "getter-return": ERR,
  "no-async-promise-executor": ERR,
  "no-await-in-loop": WRN,
  "no-class-assign": ERR,
  "no-compare-neg-zero": ERR,
  "no-cond-assign": [WRN, "always"],
  "no-const-assign": ERR,
  "no-constant-binary-expression": ERR,
  "no-constant-condition": [WRN, {
    "checkLoops": false,
  }],
  "no-constructor-return": ERR,
  "no-control-regex": OFF,
  "no-debugger": ERR,
  "no-dupe-args": ERR,
  "no-dupe-class-members": ERR,
  "no-dupe-else-if": ERR,
  "no-dupe-keys": ERR,
  "no-duplicate-case": ERR,
  // disabled because no extension rule is provided by typescript-eslint
  // instead, use import/no-duplicates for consistency
  "no-duplicate-imports": OFF,
  "no-empty-character-class": ERR,
  "no-empty-pattern": ERR,
  "no-ex-assign": ERR,
  "no-fallthrough": ERR,
  "no-func-assign": ERR,
  "no-import-assign": ERR,
  "no-inner-declarations": ERR,
  "no-invalid-regexp": ERR,
  "no-irregular-whitespace": ERR,
  "no-loss-of-precision": ERR,
  "no-misleading-character-class": ERR,
  "no-new-symbol": ERR,
  "no-obj-calls": ERR,
  "no-promise-executor-return": ERR,
  "no-prototype-builtins": ERR,
  "no-self-assign": ERR,
  "no-self-compare": ERR,
  "no-setter-return": ERR,
  "no-sparse-arrays": ERR,
  "no-template-curly-in-string": WRN,
  "no-this-before-super": ERR,
  "no-undef": ERR,
  "no-unexpected-multiline": ERR,
  "no-unmodified-loop-condition": WRN,
  "no-unreachable": ERR,
  "no-unreachable-loop": ERR,
  "no-unsafe-finally": ERR,
  "no-unsafe-negation": [ERR, {
    "enforceForOrderingRelations": true,
  }],
  "no-unsafe-optional-chaining": [ERR, {
    "disallowArithmeticOperators": true,
  }],
  "no-unused-private-class-members": ERR,
  "no-unused-vars": [ERR, {
    "ignoreRestSiblings": true,
    "caughtErrors": "all",
    "argsIgnorePattern": "^_",
    "destructuredArrayIgnorePattern": "^_",
    "caughtErrorsIgnorePattern": "^_",
  }],
  "no-use-before-define": [WRN, {
    "functions": false,
    "allowNamedExports": true,
  }],
  "no-useless-backreference": ERR,
  "require-atomic-updates": WRN,
  "use-isnan": [ERR, {
    "enforceForSwitchCase": true,
    "enforceForIndexOf": true,
  }],
  "valid-typeof": ERR,
};

const suggestions = {
  "accessor-pairs": OFF,
  "arrow-body-style": [ERR, "as-needed"],
  "block-scoped-var": ERR,
  "camelcase": ERR,
  "capitalized-comments": OFF,
  "class-methods-use-this": OFF,
  "complexity": OFF,
  "consistent-return": ERR,
  "consistent-this": OFF,
  "curly": ERR,
  "default-case": ERR,
  "default-case-last": ERR,
  "default-param-last": ERR,
  "dot-notation": OFF,
  "eqeqeq": ERR,
  "func-name-matching": ERR,
  "func-names": OFF,
  "func-style": [ERR, "declaration", {
    "allowArrowFunctions": true,
  }],
  "grouped-accessor-pairs": [ERR, "getBeforeSet"],
  "guard-for-in": WRN,
  "id-denylist": OFF,
  "id-length": OFF,
  "id-match": OFF,
  "init-declarations": OFF,
  "logical-assignment-operators": OFF,
  "max-classes-per-file": OFF,
  "max-depth": OFF,
  "max-lines": OFF,
  "max-lines-per-function": OFF,
  "max-nested-callbacks": OFF,
  "max-params": OFF,
  "max-statements": OFF,
  "multiline-comment-style": OFF,
  "new-cap": [ERR, {
    "capIsNewExceptions": ["BigInt"],
  }],
  "no-alert": ERR,
  "no-array-constructor": ERR,
  "no-bitwise": OFF,
  "no-caller": ERR,
  "no-case-declarations": ERR,
  "no-confusing-arrow": OFF,
  "no-console": WRN,
  "no-continue": OFF,
  "no-delete-var": ERR,
  "no-div-regex": OFF,
  "no-else-return": OFF,
  "no-empty": ERR,
  "no-empty-function": OFF,
  "no-eq-null": ERR,
  "no-eval": ERR,
  "no-extend-native": ERR,
  "no-extra-bind": ERR,
  "no-extra-boolean-cast": [ERR, {
    "enforceForLogicalOperands": true,
  }],
  "no-extra-label": ERR,
  "no-extra-semi": ERR,
  "no-floating-decimal": ERR,
  "no-global-assign": ERR,
  "no-implicit-coercion": [ERR, {
    // `!!` is exceptionally allowed because it is a very frequently used pattern
    "allow": ["!!"],
  }],
  "no-implicit-globals": [ERR, {
    "lexicalBindings": true,
  }],
  "no-implied-eval": ERR,
  "no-inline-comments": OFF,
  "no-invalid-this": [WRN, {
    "capIsConstructor": false,
  }],
  "no-iterator": ERR,
  "no-label-var": ERR,
  "no-labels": OFF,
  "no-lone-blocks": ERR,
  "no-lonely-if": OFF,
  "no-loop-func": ERR,
  "no-magic-numbers": OFF,
  "no-mixed-operators": OFF,
  "no-multi-assign": ERR,
  "no-multi-str": ERR,
  "no-negated-condition": OFF,
  "no-nested-ternary": OFF,
  "no-new": ERR,
  "no-new-func": OFF,
  "no-new-object": ERR,
  "no-new-wrappers": ERR,
  "no-nonoctal-decimal-escape": ERR,
  "no-octal": ERR,
  "no-octal-escape": ERR,
  "no-param-reassign": ERR,
  "no-plusplus": [ERR, {
    "allowForLoopAfterthoughts": true,
  }],
  "no-proto": ERR,
  "no-redeclare": ERR,
  "no-regex-spaces": ERR,
  "no-restricted-exports": OFF,
  "no-restricted-globals": OFF,
  "no-restricted-imports": OFF,
  "no-restricted-properties": OFF,
  "no-restricted-syntax": OFF,
  "no-return-assign": ERR,
  "no-return-await": ERR,
  "no-script-url": OFF,
  "no-sequences": ERR,
  "no-shadow": OFF,
  "no-shadow-restricted-names": ERR,
  "no-ternary": OFF,
  "no-throw-literal": ERR,
  "no-undef-init": OFF,
  "no-undefined": OFF,
  "no-underscore-dangle": OFF,
  "no-unneeded-ternary": ERR,
  "no-unused-expressions": [ERR, {
    // JSXs are recognized as pure expressions
    "enforceForJSX": true,
  }],
  "no-unused-labels": ERR,
  "no-useless-call": ERR,
  "no-useless-catch": ERR,
  "no-useless-computed-key": [ERR, {
    "enforceForClassMembers": true,
  }],
  "no-useless-concat": ERR,
  "no-useless-constructor": ERR,
  "no-useless-escape": ERR,
  "no-useless-rename": ERR,
  "no-useless-return": ERR,
  "no-var": ERR,
  "no-void": ERR,
  "no-warning-comments": WRN,
  "no-with": ERR,
  "object-shorthand": [ERR, "always"],
  "one-var": [ERR, "never"],
  "one-var-declaration-per-line": OFF,
  "operator-assignment": OFF,
  "prefer-arrow-callback": [ERR, {
    "allowNamedFunctions": true,
    "allowUnboundThis": true,
  }],
  "prefer-const": ERR,
  "prefer-destructuring": OFF,
  "prefer-exponentiation-operator": ERR,
  "prefer-named-capture-group": OFF,
  "prefer-numeric-literals": ERR,
  // disabled because it's too early to require ES2022
  "prefer-object-has-own": OFF,
  "prefer-object-spread": ERR,
  "prefer-promise-reject-errors": [ERR, {
    "allowEmptyReject": false,
  }],
  "prefer-regex-literals": ERR,
  "prefer-rest-params": ERR,
  "prefer-spread": ERR,
  "prefer-template": OFF,
  "quote-props": [ERR, "consistent"],
  "radix": ERR,
  "require-await": ERR,
  "require-unicode-regexp": OFF,
  "require-yield": ERR,
  "sort-imports": OFF,
  "sort-keys": OFF,
  "sort-vars": OFF,
  "spaced-comment": [ERR, "always"],
  "strict": ERR,
  "symbol-description": ERR,
  "vars-on-top": ERR,
  "yoda": OFF,
};

const layoutAndFormatting = {
  "array-bracket-newline": OFF,
  "array-bracket-spacing": [ERR, "never"],
  "array-element-newline": OFF,
  "arrow-parens": [ERR, "as-needed"],
  "arrow-spacing": [ERR, {
    "before": true,
    "after": true,
  }],
  "block-spacing": [ERR, "always"],
  "brace-style": [ERR, "1tbs", {
    "allowSingleLine": true,
  }],
  "comma-dangle": [ERR, {
    "arrays": "always-multiline",
    "objects": "always-multiline",
    "imports": "always-multiline",
    "exports": "always-multiline",
    "functions": "never",
  }],
  "comma-spacing": [ERR, {
    "before": false,
    "after": true,
  }],
  "comma-style": [ERR, "last"],
  "computed-property-spacing": [ERR, "never"],
  "dot-location": [ERR, "property"],
  "eol-last": ERR,
  "func-call-spacing": [ERR, "never"],
  "function-call-argument-newline": OFF,
  "function-paren-newline": OFF,
  "generator-star-spacing": [ERR, {
    "before": false,
    "after": true,
    "method": {
      "before": true,
      "after": false,
    },
  }],
  "implicit-arrow-linebreak": OFF,
  "indent": [ERR, 2, {
    "SwitchCase": 1,
    "VariableDeclarator": "first",
    "ignoredNodes": ["ConditionalExpression"],
  }],
  "jsx-quotes": [ERR, "prefer-double"],
  "key-spacing": [ERR, {
    "beforeColon": false,
    "afterColon": true,
  }],
  "keyword-spacing": [ERR, {
    "before": true,
    "after": true,
  }],
  "line-comment-position": OFF,
  "linebreak-style": [ERR, "unix"],
  "lines-around-comment": OFF,
  "lines-between-class-members": [ERR, "always", {
    "exceptAfterSingleLine": true,
  }],
  "max-len": [WRN, {
    "code": 100,
    "tabWidth": 2,
  }],
  "max-statements-per-line": OFF,
  "multiline-ternary": OFF,
  "new-parens": ERR,
  "newline-per-chained-call": OFF,
  "no-extra-parens": OFF,
  "no-mixed-spaces-and-tabs": ERR,
  "no-multi-spaces": OFF,
  "no-multiple-empty-lines": [ERR, {
    "max": 2,
    "maxBOF": 0,
    "maxEOF": 0,
  }],
  "no-tabs": ERR,
  "no-trailing-spaces": ERR,
  "no-whitespace-before-property": ERR,
  "nonblock-statement-body-position": [ERR, "beside"],
  "object-curly-newline": OFF,
  "object-curly-spacing": [ERR, "always"],
  "object-property-newline": OFF,
  "operator-linebreak": [ERR, "before", {
    "overrides": {
      "=": "after",
      "+=": "after",
      "-=": "after",
      "*=": "after",
      "/=": "after",
      "%=": "after",
      "**=": "after",
      "<<=": "after",
      ">>=": "after",
      ">>>=": "after",
      "&=": "after",
      "^=": "after",
      "|=": "after",
      "&&=": "after",
      "||=": "after",
      "??=": "after",
    },
  }],
  "padded-blocks": [ERR, "never"],
  "padding-line-between-statements": OFF,
  "quotes": [ERR, "double"],
  "rest-spread-spacing": [ERR, "never"],
  "semi": [ERR, "always"],
  "semi-spacing": [ERR, {
    "before": false,
    "after": true,
  }],
  "semi-style": [ERR, "last"],
  "space-before-blocks": [ERR, "always"],
  "space-before-function-paren": [ERR, {
    "anonymous": "always",
    "named": "never",
  }],
  "space-in-parens": [ERR, "never"],
  "space-infix-ops": ERR,
  "space-unary-ops": [ERR, {
    "words": true,
    "nonwords": false,
  }],
  "switch-colon-spacing": [ERR, {
    "before": false,
    "after": true,
  }],
  "template-curly-spacing": OFF,
  "template-tag-spacing": [ERR, "never"],
  "unicode-bom": [ERR, "never"],
  "wrap-iife": ERR,
  "wrap-regex": OFF,
  "yield-star-spacing": [ERR, {
    "before": false,
    "after": true,
  }],
};

module.exports = {
  rules: removeOffRules(
    {
      ...possibleProblems,
      ...suggestions,
      ...layoutAndFormatting,
    }
  ),
};
