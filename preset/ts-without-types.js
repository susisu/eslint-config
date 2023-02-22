"use strict";

const { OFF, WRN, ERR } = require("../lib/levels");
const { removeOffRules } = require("../lib/utils");

const overrides = {
  "block-spacing": OFF,
  "brace-style": OFF,
  // overridden by @typescript-eslint/naming-convention
  "camelcase": OFF,
  "comma-dangle": OFF,
  "comma-spacing": OFF,
  "default-param-last": OFF,
  "func-call-spacing": OFF,
  "indent": OFF,
  "init-declarations": OFF,
  "key-spacing": OFF,
  "keyword-spacing": OFF,
  "lines-between-class-members": OFF,
  "no-array-constructor": OFF,
  "no-dupe-class-members": OFF,
  "no-empty-function": OFF,
  "no-extra-parens": OFF,
  "no-extra-semi": OFF,
  "no-invalid-this": OFF,
  "no-loop-func": OFF,
  "no-loss-of-precision": OFF,
  "no-magic-numbers": OFF,
  "no-redeclare": OFF,
  "no-restricted-imports": OFF,
  "no-shadow": OFF,
  "no-unused-expressions": OFF,
  "no-unused-vars": OFF,
  "no-use-before-define": OFF,
  "no-useless-constructor": OFF,
  "object-curly-spacing": OFF,
  "padding-line-between-statements": OFF,
  "quotes": OFF,
  "semi": OFF,
  "space-before-blocks": OFF,
  "space-before-function-paren": OFF,
  "space-infix-ops": OFF,
};

const possibleProblems = {
  "@typescript-eslint/ban-ts-comment": [ERR, {
    "ts-expect-error": true,
  }],
  "@typescript-eslint/class-literal-property-style": OFF,
  "@typescript-eslint/explicit-function-return-type": [ERR, {
    "allowExpressions": true,
    "allowTypedFunctionExpressions": true,
    "allowHigherOrderFunctions": true,
  }],
  "@typescript-eslint/explicit-member-accessibility": [ERR, {
    "accessibility": "no-public",
  }],
  "@typescript-eslint/explicit-module-boundary-types": [WRN, {
    "allowTypedFunctionExpressions": true,
    "allowHigherOrderFunctions": true,
    "allowDirectConstAssertionInArrowFunctions": false,
    "shouldTrackReferences": true,
  }],
  "@typescript-eslint/no-confusing-non-null-assertion": OFF,
  "@typescript-eslint/no-dupe-class-members": ERR,
  "@typescript-eslint/no-duplicate-enum-values": ERR,
  "@typescript-eslint/no-extra-non-null-assertion": ERR,
  "@typescript-eslint/no-import-type-side-effects": ERR,
  "@typescript-eslint/no-invalid-void-type": OFF,
  "@typescript-eslint/no-loss-of-precision": ERR,
  "@typescript-eslint/no-misused-new": ERR,
  "@typescript-eslint/no-non-null-asserted-nullish-coalescing": ERR,
  "@typescript-eslint/no-non-null-asserted-optional-chain": ERR,
  "@typescript-eslint/no-non-null-assertion": WRN,
  "@typescript-eslint/no-require-imports": ERR,
  "@typescript-eslint/no-unsafe-declaration-merging": ERR,
  "@typescript-eslint/no-unused-vars": [ERR, {
    "ignoreRestSiblings": true,
    "caughtErrors": "all",
    "argsIgnorePattern": "^_",
    "destructuredArrayIgnorePattern": "^_",
    "caughtErrorsIgnorePattern": "^_",
  }],
  "@typescript-eslint/no-use-before-define": [WRN, {
    "functions": false,
    "typedefs": false,
    "allowNamedExports": true,
  }],
  "@typescript-eslint/no-useless-constructor": ERR,
  "@typescript-eslint/no-var-requires": OFF,
  "@typescript-eslint/parameter-properties": OFF,
  "@typescript-eslint/prefer-ts-expect-error": ERR,
};

const suggestions = {
  "@typescript-eslint/adjacent-overload-signatures": ERR,
  "@typescript-eslint/array-type": [ERR, {
    "default": "array-simple",
    "readonly": "array-simple",
  }],
  "@typescript-eslint/ban-tslint-comment": OFF,
  "@typescript-eslint/ban-types": [ERR, {
    "extendDefaults": true,
    "types": {
      "Object": {
        "message": "Use {} instead",
      },
      "{}": false,
    },
  }],
  "@typescript-eslint/comma-spacing": [ERR, {
    "before": false,
    "after": true,
  }],
  "@typescript-eslint/consistent-generic-constructors": OFF,
  "@typescript-eslint/consistent-indexed-object-style": OFF,
  "@typescript-eslint/consistent-type-assertions": [ERR, {
    "assertionStyle": "as",
    "objectLiteralTypeAssertions": "allow-as-parameter",
  }],
  "@typescript-eslint/consistent-type-definitions": OFF,
  // to be investigated
  "@typescript-eslint/consistent-type-imports": OFF,
  "@typescript-eslint/default-param-last": ERR,
  "@typescript-eslint/init-declarations": OFF,
  "@typescript-eslint/member-delimiter-style": [ERR, {
    "multiline": {
      "delimiter": "semi",
      "requireLast": true,
    },
    "singleline": {
      "delimiter": "semi",
      "requireLast": true,
    },
    "overrides": {
      "typeLiteral": {
        "multiline": {
          "delimiter": "comma",
          "requireLast": true,
        },
        "singleline": {
          "delimiter": "comma",
          "requireLast": false,
        },
      },
    },
  }],
  "@typescript-eslint/member-ordering": OFF,
  // disabled to allow @typescript-eslint/unbound-method rule to work
  "@typescript-eslint/method-signature-style": OFF,
  "@typescript-eslint/naming-convention": [WRN, {
    "selector": "variableLike",
    "format": ["camelCase", "PascalCase"],
    "leadingUnderscore": "allow",
    "trailingUnderscore": "allow",
  }, {
    "selector": "variable",
    "format": ["camelCase", "PascalCase", "UPPER_CASE"],
    "leadingUnderscore": "allow",
    "trailingUnderscore": "allow",
  }, {
    "selector": "memberLike",
    "format": ["camelCase"],
    "leadingUnderscore": "allow",
    "trailingUnderscore": "allow",
  }, {
    "selector": [
      "objectLiteralProperty",
      "typeProperty",
      "objectLiteralMethod",
      "typeMethod",
    ],
    "format": ["camelCase", "PascalCase", "UPPER_CASE"],
    "leadingUnderscore": "allow",
    "trailingUnderscore": "allow",
  }, {
    "selector": [
      "objectLiteralProperty",
      "typeProperty",
      "objectLiteralMethod",
      "typeMethod",
    ],
    "modifiers": ["requiresQuotes"],
    "format": null,
  }, {
    "selector": "typeLike",
    "format": ["PascalCase"],
    "leadingUnderscore": "allow",
    "trailingUnderscore": "allow",
  }],
  "@typescript-eslint/no-array-constructor": ERR,
  "@typescript-eslint/no-dynamic-delete": OFF,
  "@typescript-eslint/no-empty-function": OFF,
  "@typescript-eslint/no-empty-interface": OFF,
  "@typescript-eslint/no-explicit-any": WRN,
  "@typescript-eslint/no-extra-semi": ERR,
  "@typescript-eslint/no-extraneous-class": [ERR, {
    "allowConstructorOnly": true,
    "allowEmpty": true,
    "allowWithDecorator": true,
  }],
  "@typescript-eslint/no-inferrable-types": OFF,
  "@typescript-eslint/no-invalid-this": [WRN, {
    "capIsConstructor": false,
  }],
  "@typescript-eslint/no-loop-func": ERR,
  "@typescript-eslint/no-magic-numbers": OFF,
  "@typescript-eslint/no-namespace": [ERR, {
    "allowDeclarations": true,
    "allowDefinitionFiles": true,
  }],
  "@typescript-eslint/no-redeclare": ERR,
  "@typescript-eslint/no-restricted-imports": OFF,
  "@typescript-eslint/no-shadow": OFF,
  "@typescript-eslint/no-this-alias": [ERR, {
    "allowDestructuring": true,
  }],
  "@typescript-eslint/no-type-alias": OFF,
  "@typescript-eslint/no-unnecessary-type-constraint": OFF,
  "@typescript-eslint/no-unused-expressions": [ERR, {
    "enforceForJSX": true,
  }],
  "@typescript-eslint/no-useless-empty-export": WRN,
  "@typescript-eslint/prefer-as-const": ERR,
  "@typescript-eslint/prefer-enum-initializers": OFF,
  "@typescript-eslint/prefer-for-of": OFF,
  "@typescript-eslint/prefer-function-type": OFF,
  "@typescript-eslint/prefer-literal-enum-member": OFF,
  "@typescript-eslint/prefer-namespace-keyword": ERR,
  "@typescript-eslint/prefer-optional-chain": OFF,
  "@typescript-eslint/sort-type-union-intersection-members": OFF,
  "@typescript-eslint/triple-slash-reference": [ERR, {
    "types": "prefer-import",
  }],
  "@typescript-eslint/typedef": [WRN, {
    "arrayDestructuring": false,
    "arrowParameter": false,
    "memberVariableDeclaration": true,
    "objectDestructuring": false,
    "parameter": false,
    "propertyDeclaration": true,
    "variableDeclaration": false,
  }],
  "@typescript-eslint/unified-signatures": OFF,
};

const layoutAndFormatting = {
  "@typescript-eslint/block-spacing": [ERR, "always"],
  "@typescript-eslint/brace-style": [ERR, "1tbs", {
    "allowSingleLine": true,
  }],
  "@typescript-eslint/comma-dangle": [ERR, {
    "arrays": "always-multiline",
    "objects": "always-multiline",
    "imports": "always-multiline",
    "exports": "always-multiline",
    "functions": "never",
    "enums": "always-multiline",
    "generics": "never",
    "tuples": "always-multiline",
  }],
  "@typescript-eslint/func-call-spacing": [ERR, "never"],
  "@typescript-eslint/indent": [ERR, 2, {
    "SwitchCase": 1,
    "VariableDeclarator": "first",
    "ignoredNodes": ["ConditionalExpression"],
  }],
  "@typescript-eslint/key-spacing": [ERR, {
    "beforeColon": false,
    "afterColon": true,
  }],
  "@typescript-eslint/keyword-spacing": [ERR, {
    "before": true,
    "after": true,
  }],
  "@typescript-eslint/lines-between-class-members": [ERR, "always", {
    "exceptAfterSingleLine": true,
  }],
  "@typescript-eslint/no-extra-parens": OFF,
  "@typescript-eslint/object-curly-spacing": [ERR, "always"],
  "@typescript-eslint/padding-line-between-statements": OFF,
  "@typescript-eslint/quotes": [ERR, "double"],
  "@typescript-eslint/semi": [ERR, "always"],
  "@typescript-eslint/space-before-blocks": [ERR, "always"],
  "@typescript-eslint/space-before-function-paren": [ERR, {
    "anonymous": "always",
    "named": "never",
  }],
  "@typescript-eslint/space-infix-ops": ERR,
  "@typescript-eslint/type-annotation-spacing": [ERR, {
    "before": false,
    "after": true,
    "overrides": {
      "arrow": {
        "before": true,
        "after": true,
      },
    },
  }],
};

const safeTypeScript = {
  "@susisu/safe-typescript/no-object-assign": WRN,
  "@susisu/safe-typescript/no-type-assertion": WRN,
};

module.exports = {
  extends: ["./js"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "@susisu/safe-typescript"],
  rules: {
    ...overrides,
    ...removeOffRules(
      {
        ...possibleProblems,
        ...suggestions,
        ...layoutAndFormatting,
        ...safeTypeScript,
      }
    ),
  },
};
