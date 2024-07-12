import type { Rules } from "./common";
import { levels, removeDisabledRules } from "./common";
import { rules as jsRules } from "./js";

const { off, warn, error } = levels;

const overrides: Rules = {
  // overridden by @typescript-eslint/naming-convention
  camelcase: off,
  "class-methods-use-this": off,
  "default-param-last": off,
  "init-declarations": off,
  "no-array-constructor": off,
  "no-dupe-class-members": off,
  "no-empty-function": off,
  "no-invalid-this": off,
  "no-loop-func": off,
  "no-loss-of-precision": off,
  "no-magic-numbers": off,
  "no-redeclare": off,
  "no-restricted-imports": off,
  "no-shadow": off,
  "no-unused-expressions": off,
  "no-unused-vars": off,
  "no-use-before-define": off,
  "no-useless-constructor": off,
};

const possibleProblems: Rules = {
  "@typescript-eslint/ban-ts-comment": [error, { "ts-expect-error": true }],
  "@typescript-eslint/class-literal-property-style": off,
  "@typescript-eslint/explicit-function-return-type": [
    error,
    {
      allowExpressions: true,
      allowTypedFunctionExpressions: true,
      allowHigherOrderFunctions: true,
    },
  ],
  "@typescript-eslint/explicit-member-accessibility": [error, { accessibility: "no-public" }],
  "@typescript-eslint/explicit-module-boundary-types": [
    warn,
    {
      allowTypedFunctionExpressions: true,
      allowHigherOrderFunctions: true,
      allowDirectConstAssertionInArrowFunctions: false,
    },
  ],
  "@typescript-eslint/no-confusing-non-null-assertion": off,
  "@typescript-eslint/no-dupe-class-members": error,
  "@typescript-eslint/no-duplicate-enum-values": error,
  "@typescript-eslint/no-extra-non-null-assertion": error,
  "@typescript-eslint/no-import-type-side-effects": error,
  "@typescript-eslint/no-invalid-void-type": off,
  "@typescript-eslint/no-loss-of-precision": error,
  "@typescript-eslint/no-misused-new": error,
  "@typescript-eslint/no-non-null-asserted-nullish-coalescing": error,
  "@typescript-eslint/no-non-null-asserted-optional-chain": error,
  "@typescript-eslint/no-non-null-assertion": warn,
  "@typescript-eslint/no-require-imports": error,
  "@typescript-eslint/no-unsafe-declaration-merging": error,
  "@typescript-eslint/no-unused-vars": [
    error,
    {
      ignoreRestSiblings: true,
      caughtErrors: "all",
      argsIgnorePattern: "^_",
      destructuredArrayIgnorePattern: "^_",
      caughtErrorsIgnorePattern: "^_",
    },
  ],
  "@typescript-eslint/no-use-before-define": [
    warn,
    { functions: false, typedefs: false, allowNamedExports: true },
  ],
  "@typescript-eslint/no-useless-constructor": error,
  // disabled because @typescript-eslint/no-require-imports forbids requires more strictly
  "@typescript-eslint/no-var-requires": off,
  "@typescript-eslint/parameter-properties": off,
};

const suggestions: Rules = {
  "@typescript-eslint/adjacent-overload-signatures": error,
  "@typescript-eslint/array-type": [error, { default: "array-simple", readonly: "array-simple" }],
  "@typescript-eslint/ban-tslint-comment": off,
  "@typescript-eslint/ban-types": [
    error,
    {
      extendDefaults: true,
      types: {
        Object: { message: "Use object instead", fixWith: "object" },
        // `{}` means "any non-nullish value", which includes `string`, `number`, etc.
        // `{ toString: () => string }` means "any non-nullish value with `toString`",
        // which also includes `string`, `number`, etc.
        // I don't know why only `{}` is banned.
        "{}": false,
      },
    },
  ],
  "@typescript-eslint/class-methods-use-this": off,
  "@typescript-eslint/consistent-generic-constructors": off,
  "@typescript-eslint/consistent-indexed-object-style": off,
  "@typescript-eslint/consistent-type-assertions": [
    error,
    { assertionStyle: "as", objectLiteralTypeAssertions: "allow-as-parameter" },
  ],
  "@typescript-eslint/consistent-type-definitions": off,
  "@typescript-eslint/consistent-type-imports": [
    error,
    { prefer: "type-imports", fixStyle: "separate-type-imports", disallowTypeAnnotations: true },
  ],
  "@typescript-eslint/default-param-last": error,
  "@typescript-eslint/init-declarations": off,
  "@typescript-eslint/member-delimiter-style": off,
  "@typescript-eslint/member-ordering": off,
  // disabled to allow @typescript-eslint/unbound-method rule to work
  "@typescript-eslint/method-signature-style": off,
  "@typescript-eslint/naming-convention": [
    warn,
    {
      selector: "variableLike",
      format: ["camelCase", "PascalCase"],
      leadingUnderscore: "allow",
      trailingUnderscore: "allow",
    },
    {
      selector: "variable",
      format: ["camelCase", "PascalCase", "UPPER_CASE"],
      leadingUnderscore: "allow",
      trailingUnderscore: "allow",
    },
    {
      selector: "memberLike",
      format: ["camelCase"],
      leadingUnderscore: "allow",
      trailingUnderscore: "allow",
    },
    {
      selector: ["objectLiteralProperty", "typeProperty", "objectLiteralMethod", "typeMethod"],
      format: ["camelCase", "PascalCase", "snake_case", "UPPER_CASE"],
      leadingUnderscore: "allow",
      trailingUnderscore: "allow",
    },
    {
      selector: ["objectLiteralProperty", "typeProperty", "objectLiteralMethod", "typeMethod"],
      modifiers: ["requiresQuotes"],
      format: null,
    },
    {
      selector: "import",
      format: ["camelCase", "PascalCase", "snake_case", "UPPER_CASE"],
      leadingUnderscore: "allow",
      trailingUnderscore: "allow",
    },
    {
      selector: "typeLike",
      format: ["PascalCase"],
      leadingUnderscore: "allow",
      trailingUnderscore: "allow",
    },
  ],
  "@typescript-eslint/no-array-constructor": error,
  "@typescript-eslint/no-dynamic-delete": off,
  "@typescript-eslint/no-empty-function": off,
  "@typescript-eslint/no-empty-interface": off,
  "@typescript-eslint/no-empty-object-type": off,
  "@typescript-eslint/no-explicit-any": warn,
  "@typescript-eslint/no-extraneous-class": [
    error,
    { allowConstructorOnly: true, allowEmpty: true, allowWithDecorator: true },
  ],
  "@typescript-eslint/no-inferrable-types": off,
  "@typescript-eslint/no-invalid-this": [warn, { capIsConstructor: false }],
  "@typescript-eslint/no-loop-func": error,
  "@typescript-eslint/no-magic-numbers": off,
  "@typescript-eslint/no-namespace": [
    error,
    { allowDeclarations: true, allowDefinitionFiles: true },
  ],
  "@typescript-eslint/no-redeclare": error,
  "@typescript-eslint/no-restricted-imports": off,
  "@typescript-eslint/no-shadow": off,
  "@typescript-eslint/no-this-alias": [error, { allowDestructuring: true }],
  "@typescript-eslint/no-unnecessary-type-constraint": off,
  "@typescript-eslint/no-unused-expressions": [error, { enforceForJSX: true }],
  "@typescript-eslint/no-useless-empty-export": warn,
  "@typescript-eslint/prefer-as-const": error,
  "@typescript-eslint/prefer-enum-initializers": off,
  "@typescript-eslint/prefer-for-of": off,
  "@typescript-eslint/prefer-function-type": off,
  "@typescript-eslint/prefer-literal-enum-member": off,
  "@typescript-eslint/prefer-namespace-keyword": error,
  "@typescript-eslint/prefer-optional-chain": off,
  "@typescript-eslint/triple-slash-reference": [error, { types: "prefer-import" }],
  "@typescript-eslint/typedef": [
    warn,
    {
      arrayDestructuring: false,
      arrowParameter: false,
      memberVariableDeclaration: true,
      objectDestructuring: false,
      parameter: false,
      propertyDeclaration: true,
      variableDeclaration: false,
    },
  ],
  "@typescript-eslint/unified-signatures": off,
};

const layoutAndFormatting: Rules = {};

const safeTypeScript: Rules = {
  "@susisu/safe-typescript/no-object-assign": warn,
  "@susisu/safe-typescript/no-type-assertion": warn,
};

export const rules = removeDisabledRules({
  ...jsRules,
  ...overrides,
  ...possibleProblems,
  ...suggestions,
  ...layoutAndFormatting,
  ...safeTypeScript,
});
