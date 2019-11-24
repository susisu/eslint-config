"use strict";

const { OFF, WRN, ERR } = require("./levels");
const { removeOffRules } = require("./utils");

const overrides = {
  "brace-style" : OFF,
  "camelcase"   : OFF,
  "comma-dangle": [ERR, {
    "arrays"   : "always-multiline",
    "objects"  : "always-multiline",
    "imports"  : "always-multiline",
    "exports"  : "always-multiline",
    "functions": "only-multiline",
  }],
  "func-call-spacing"          : OFF,
  "indent"                     : OFF,
  "no-dupe-class-members"      : OFF,
  "no-empty-function"          : OFF,
  "no-extra-parens"            : OFF,
  "no-magic-numbers"           : OFF,
  "no-unused-expressions"      : OFF,
  "no-unused-vars"             : OFF,
  "no-use-before-define"       : OFF,
  "no-useless-constructor"     : OFF,
  "quotes"                     : OFF,
  "semi"                       : OFF,
  "space-before-function-paren": OFF,
};

const possibleErrors = {
  "@typescript-eslint/no-misused-new": ERR,
};

const bestPractices = {
  "@typescript-eslint/ban-ts-ignore"      : WRN,
  "@typescript-eslint/ban-types"          : ERR,
  "@typescript-eslint/no-dynamic-delete"  : OFF,
  "@typescript-eslint/no-empty-function"  : OFF,
  "@typescript-eslint/no-empty-interface" : OFF,
  "@typescript-eslint/no-explicit-any"    : WRN,
  "@typescript-eslint/no-extraneous-class": [ERR, {
    "allowConstructorOnly": true,
    "allowEmpty"          : true,
  }],
  "@typescript-eslint/no-magic-numbers": OFF,
  "@typescript-eslint/no-namespace"    : [ERR, {
    "allowDeclarations"   : true,
    "allowDefinitionFiles": true,
  }],
  "@typescript-eslint/no-non-null-assertion"      : WRN,
  "@typescript-eslint/no-parameter-properties"    : OFF,
  "@typescript-eslint/no-require-imports"         : WRN,
  "@typescript-eslint/no-this-alias"              : [ERR, { "allowDestructuring": true }],
  "@typescript-eslint/no-type-alias"              : OFF,
  "@typescript-eslint/no-untyped-public-signature": [WRN, { "ignoredMethods": ["constructor"] }],
  "@typescript-eslint/no-unused-expressions"      : ERR,
  "@typescript-eslint/prefer-for-of"              : OFF,
  "@typescript-eslint/prefer-namespace-keyword"   : ERR,
  "@typescript-eslint/triple-slash-reference"     : [ERR, { "types": "prefer-import" }],
};

const variables = {
  "@typescript-eslint/no-unused-vars"      : [ERR, { "argsIgnorePattern": "^_" }],
  "@typescript-eslint/no-use-before-define": [WRN, { "functions": false, "typedefs": false }],
};

const stylisticIssues = {
  "@typescript-eslint/adjacent-overload-signatures": ERR,
  "@typescript-eslint/array-type"                  : [ERR, {
    "default" : "array-simple",
    "readonly": "array-simple",
  }],
  "@typescript-eslint/brace-style"               : [ERR, "1tbs", { "allowSingleLine": true }],
  "@typescript-eslint/camelcase"                 : [ERR, { "properties": "never" }],
  "@typescript-eslint/class-name-casing"         : ERR,
  "@typescript-eslint/consistent-type-assertions": [ERR, {
    "assertionStyle"             : "as",
    "objectLiteralTypeAssertions": "allow-as-parameter",
  }],
  "@typescript-eslint/consistent-type-definitions"  : OFF,
  "@typescript-eslint/explicit-function-return-type": [ERR, {
    "allowExpressions"             : true,
    "allowTypedFunctionExpressions": true,
    "allowHigherOrderFunctions"    : true,
  }],
  "@typescript-eslint/explicit-member-accessibility": [ERR, { "accessibility": "no-public" }],
  "@typescript-eslint/func-call-spacing"            : [ERR, "never"],
  "@typescript-eslint/generic-type-naming"          : [ERR, "^_?[A-Z]"],
  "@typescript-eslint/indent"                       : [ERR, 2, {
    "SwitchCase"        : 1,
    "VariableDeclarator": "first",
    "ignoredNodes"      : ["ConditionalExpression"],
  }],
  "@typescript-eslint/interface-name-prefix" : OFF,
  "@typescript-eslint/member-delimiter-style": [ERR, {
    "multiline": {
      "delimiter"  : "semi",
      "requireLast": true,
    },
    "singleline": {
      "delimiter"  : "semi",
      "requireLast": true,
    },
    "overrides": {
      "typeLiteral": {
        "multiline": {
          "delimiter"  : "comma",
          "requireLast": true,
        },
        "singleline": {
          "delimiter"  : "comma",
          "requireLast": false,
        },
      },
    },
  }],
  "@typescript-eslint/member-naming"              : OFF,
  "@typescript-eslint/member-ordering"            : OFF,
  "@typescript-eslint/no-array-constructor"       : OFF, // use core no-array-constructor rule
  "@typescript-eslint/no-extra-parens"            : OFF,
  "@typescript-eslint/no-inferrable-types"        : OFF,
  "@typescript-eslint/no-var-requires"            : OFF,
  "@typescript-eslint/prefer-function-type"       : OFF,
  "@typescript-eslint/quotes"                     : [ERR, "double"],
  "@typescript-eslint/semi"                       : [ERR, "always"],
  "@typescript-eslint/space-before-function-paren": [ERR, {
    "anonymous": "always",
    "named"    : "never",
  }],
  "@typescript-eslint/type-annotation-spacing": [ERR, {
    "before"   : false,
    "after"    : true,
    "overrides": {
      "arrow": {
        "before": true,
        "after" : true,
      },
    },
  }],
  "@typescript-eslint/typedef": [WRN, {
    "arrayDestructuring"       : false,
    "arrowParameter"           : false,
    "memberVariableDeclaration": true,
    "objectDestructuring"      : false,
    "parameter"                : true,
    "propertyDeclaration"      : true,
    "variableDeclaration"      : false,
  }],
  "@typescript-eslint/unified-signatures": OFF,
};

const ecmaScript6 = {
  "@typescript-eslint/no-useless-constructor": OFF,
};

const rules = Object.assign({},
  overrides,
  removeOffRules(
    Object.assign({},
      possibleErrors,
      bestPractices,
      variables,
      stylisticIssues,
      ecmaScript6
    )
  )
);

module.exports = {
  "plugins": ["@typescript-eslint"],
  "rules"  : rules,
};
