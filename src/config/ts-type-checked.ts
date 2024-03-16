import type { ESLint } from "eslint";
import type { FlatESLintConfig } from "eslint-define-config";
import { defineFlatConfig } from "eslint-define-config";

import tsEslintParser from "@typescript-eslint/parser";

import tsEslintPlugin from "@typescript-eslint/eslint-plugin";
import safeTsPlugin from "@susisu/eslint-plugin-safe-typescript";
import stylisticPlugin from "@stylistic/eslint-plugin";

import { tsTypeChecked as tsTypeCheckedRules, stylistic as stylisticRules } from "../rules";

export function config(): FlatESLintConfig {
  return defineFlatConfig({
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    languageOptions: {
      parser: tsEslintParser,
    },
    plugins: {
      // eslint-disable-next-line @susisu/safe-typescript/no-type-assertion
      "@typescript-eslint": tsEslintPlugin as unknown as ESLint.Plugin,
      "@susisu/safe-typescript": safeTsPlugin,
      // eslint-disable-next-line @susisu/safe-typescript/no-type-assertion
      "@stylistic": stylisticPlugin as ESLint.Plugin,
    },
    rules: {
      ...tsTypeCheckedRules,
      ...stylisticRules,
    },
  });
}
