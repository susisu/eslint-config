"use strict";

const { OFF, WRN, ERR } = require("./levels");
const { removeOffRules } = require("./utils");

const overrides = {
  "brace-style"                : OFF,
  "camelcase"                  : OFF,
  "comma-dangle"               : OFF,
  "comma-spacing"              : OFF,
  "default-param-last"         : OFF,
  "func-call-spacing"          : OFF,
  "indent"                     : OFF,
  "init-declarations"          : OFF,
  "keyword-spacing"            : OFF,
  "lines-between-class-members": OFF,
  "no-array-constructor"       : OFF,
  "no-dupe-class-members"      : OFF,
  "no-duplicate-imports"       : OFF,
  "no-empty-function"          : OFF,
  "no-extra-parens"            : OFF,
  "no-extra-semi"              : OFF,
  "no-invalid-this"            : OFF,
  "no-loop-func"               : OFF,
  "no-loss-of-precision"       : OFF,
  "no-magic-numbers"           : OFF,
  "no-redeclare"               : OFF,
  "no-shadow"                  : OFF,
  "no-unused-expressions"      : OFF,
  "no-unused-vars"             : OFF,
  "no-use-before-define"       : OFF,
  "no-useless-constructor"     : OFF,
  "quotes"                     : OFF,
  "semi"                       : OFF,
  "space-before-function-paren": OFF,
};

const possibleErrors = {
  "@typescript-eslint/no-dupe-class-members"              : ERR,
  "@typescript-eslint/no-extra-parens"                    : OFF,
  "@typescript-eslint/no-extra-semi"                      : ERR,
  "@typescript-eslint/no-loss-of-precision"               : ERR,
  "@typescript-eslint/no-non-null-asserted-optional-chain": ERR,
};

const bestPractices = {
  "@typescript-eslint/adjacent-overload-signatures": ERR,
  "@typescript-eslint/ban-ts-comment"              : [WRN, {
    "ts-expect-error": true,
  }],
  "@typescript-eslint/ban-types": [ERR, {
    "extendDefaults": true,
    "types"         : {
      "Object": {
        "message": "Use {} instead",
      },
      "{}"    : false,
      "object": false,
    },
  }],
  "@typescript-eslint/class-literal-property-style": OFF,
  "@typescript-eslint/consistent-type-assertions"  : [ERR, {
    "assertionStyle"             : "as",
    "objectLiteralTypeAssertions": "allow-as-parameter",
  }],
  "@typescript-eslint/default-param-last"    : ERR,
  "@typescript-eslint/method-signature-style": OFF, // allow @ts-eslint/unbound-method rule to work
  "@typescript-eslint/no-duplicate-imports"  : ERR,
  "@typescript-eslint/no-dynamic-delete"     : OFF,
  "@typescript-eslint/no-empty-function"     : OFF,
  "@typescript-eslint/no-empty-interface"    : OFF,
  "@typescript-eslint/no-explicit-any"       : WRN,
  "@typescript-eslint/no-extraneous-class"   : [ERR, {
    "allowConstructorOnly": true,
    "allowEmpty"          : true,
    "allowWithDecorator"  : true,
  }],
  "@typescript-eslint/no-implicit-any-catch": OFF, // off until TS 4.0 becomes common
  "@typescript-eslint/no-inferrable-types"  : OFF,
  "@typescript-eslint/no-invalid-this"      : [WRN, { "capIsConstructor": false }],
  "@typescript-eslint/no-invalid-void-type" : OFF,
  "@typescript-eslint/no-loop-func"         : ERR,
  "@typescript-eslint/no-magic-numbers"     : OFF,
  "@typescript-eslint/no-misused-new"       : ERR,
  "@typescript-eslint/no-namespace"         : [ERR, {
    "allowDeclarations"   : true,
    "allowDefinitionFiles": true,
  }],
  "@typescript-eslint/no-redeclare"               : ERR,
  "@typescript-eslint/no-require-imports"         : WRN,
  "@typescript-eslint/no-this-alias"              : [ERR, { "allowDestructuring": true }],
  "@typescript-eslint/no-unused-expressions"      : ERR,
  "@typescript-eslint/no-unused-vars-experimental": OFF,
  "@typescript-eslint/no-useless-constructor"     : OFF,
  "@typescript-eslint/no-var-requires"            : OFF,
  "@typescript-eslint/prefer-as-const"            : WRN,
  "@typescript-eslint/prefer-enum-initializers"   : OFF,
  "@typescript-eslint/prefer-function-type"       : OFF,
  "@typescript-eslint/prefer-literal-enum-member" : OFF,
  "@typescript-eslint/prefer-namespace-keyword"   : ERR,
  "@typescript-eslint/prefer-optional-chain"      : OFF, // to be tested
  "@typescript-eslint/prefer-ts-expect-error"     : WRN,
  "@typescript-eslint/triple-slash-reference"     : [ERR, { "types": "prefer-import" }],
};

const variables = {
  "@typescript-eslint/init-declarations": OFF,
  "@typescript-eslint/naming-convention": [WRN, {
    "selector"          : "variableLike",
    "format"            : ["camelCase", "PascalCase"],
    "leadingUnderscore" : "allow",
    "trailingUnderscore": "allow",
  }, {
    "selector"          : "variable",
    "format"            : ["camelCase", "PascalCase", "UPPER_CASE"],
    "leadingUnderscore" : "allow",
    "trailingUnderscore": "allow",
  }, {
    "selector"          : "memberLike",
    "format"            : ["camelCase"],
    "leadingUnderscore" : "allow",
    "trailingUnderscore": "allow",
  }, {
    "selector"          : "property",
    "format"            : ["camelCase", "PascalCase", "UPPER_CASE"],
    "leadingUnderscore" : "allow",
    "trailingUnderscore": "allow",
  }, {
    "selector"          : "typeLike",
    "format"            : ["PascalCase"],
    "leadingUnderscore" : "allow",
    "trailingUnderscore": "allow",
  }],
  "@typescript-eslint/no-shadow"     : OFF,
  "@typescript-eslint/no-unused-vars": [ERR, {
    "ignoreRestSiblings": true,
    "argsIgnorePattern" : "^_",
    "caughtErrors"      : "all",
  }],
  "@typescript-eslint/no-use-before-define": [WRN, {
    "functions": false,
    "typedefs" : false,
  }],
  "@typescript-eslint/unified-signatures": OFF,
};

const stylisticIssues = {
  "@typescript-eslint/array-type": [ERR, {
    "default" : "array-simple",
    "readonly": "array-simple",
  }],
  "@typescript-eslint/ban-tslint-comment": OFF,
  "@typescript-eslint/brace-style"       : [ERR, "1tbs", { "allowSingleLine": true }],
  "@typescript-eslint/comma-dangle"      : [ERR, {
    "arrays"   : "always-multiline",
    "objects"  : "always-multiline",
    "imports"  : "always-multiline",
    "exports"  : "always-multiline",
    "functions": "never",
    "enums"    : "always-multiline",
    "generics" : "never",
    "tuples"   : "always-multiline",
  }],
  "@typescript-eslint/comma-spacing"                  : [ERR, { "before": false, "after": true }],
  "@typescript-eslint/consistent-indexed-object-style": OFF,
  "@typescript-eslint/consistent-type-imports"        : OFF, // to be investigated
  "@typescript-eslint/consistent-type-definitions"    : OFF,
  "@typescript-eslint/explicit-function-return-type"  : [ERR, {
    "allowExpressions"             : true,
    "allowTypedFunctionExpressions": true,
    "allowHigherOrderFunctions"    : true,
  }],
  "@typescript-eslint/explicit-member-accessibility" : [ERR, { "accessibility": "no-public" }],
  "@typescript-eslint/explicit-module-boundary-types": [WRN, {
    "allowTypedFunctionExpressions"            : true,
    "allowHigherOrderFunctions"                : true,
    "allowDirectConstAssertionInArrowFunctions": false,
    "shouldTrackReferences"                    : true,
  }],
  "@typescript-eslint/func-call-spacing": [ERR, "never"],
  "@typescript-eslint/indent"           : [ERR, 2, {
    "SwitchCase"        : 1,
    "VariableDeclarator": "first",
    "ignoredNodes"      : ["ConditionalExpression"],
  }],
  "@typescript-eslint/keyword-spacing"            : [ERR, { "before": true, "after": true }],
  "@typescript-eslint/lines-between-class-members": [ERR, "always", {
    "exceptAfterSingleLine": true,
  }],
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
  "@typescript-eslint/member-ordering"                : OFF,
  "@typescript-eslint/no-array-constructor"           : ERR,
  "@typescript-eslint/no-confusing-non-null-assertion": OFF,
  "@typescript-eslint/no-extra-non-null-assertion"    : ERR,
  "@typescript-eslint/no-non-null-assertion"          : WRN,
  "@typescript-eslint/no-parameter-properties"        : OFF,
  "@typescript-eslint/no-type-alias"                  : OFF,
  "@typescript-eslint/prefer-for-of"                  : OFF,
  "@typescript-eslint/quotes"                         : [ERR, "double"],
  "@typescript-eslint/semi"                           : [ERR, "always"],
  "@typescript-eslint/space-before-function-paren"    : [ERR, {
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
    "parameter"                : false,
    "propertyDeclaration"      : true,
    "variableDeclaration"      : false,
  }],
};

const rules = Object.assign({},
  overrides,
  removeOffRules(
    Object.assign({},
      possibleErrors,
      bestPractices,
      variables,
      stylisticIssues
    )
  )
);

module.exports = {
  "plugins": ["@typescript-eslint"],
  "rules"  : rules,
};
