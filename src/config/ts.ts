import type { FlatESLintConfig } from "eslint-define-config";
import { defineFlatConfig } from "eslint-define-config";

import tsEslintParser from "@typescript-eslint/parser";

import tsEslintPlugin from "@typescript-eslint/eslint-plugin";
import safeTsPlugin from "@susisu/eslint-plugin-safe-typescript";
import stylisticPlugin from "@stylistic/eslint-plugin";

import { ts as tsRules, stylistic as stylisticRules } from "../rules";

export function make(): FlatESLintConfig {
  return defineFlatConfig({
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    languageOptions: {
      parser: tsEslintParser,
    },
    plugins: {
      "@typescript-eslint": tsEslintPlugin,
      "@susisu/safe-typescript": safeTsPlugin,
      "@stylistic": stylisticPlugin,
    },
    rules: {
      ...tsRules,
      ...stylisticRules,
    },
  });
}
