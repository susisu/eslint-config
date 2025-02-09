import type { ESLint, Linter } from "eslint";

import tsEslintParser from "@typescript-eslint/parser";

import tsEslintPlugin from "@typescript-eslint/eslint-plugin";
import safeTsPlugin from "@susisu/eslint-plugin-safe-typescript";
import stylisticPlugin from "@stylistic/eslint-plugin";

import { tsTypeChecked as tsTypeCheckedRules, stylistic as stylisticRules } from "../rules";

export function config(): Linter.Config {
  return {
    name: "@susisu/eslint-config/ts-type-checked",
    linterOptions: {
      reportUnusedDisableDirectives: "warn",
      reportUnusedInlineConfigs: "warn",
    },
    languageOptions: {
      parser: tsEslintParser,
    },
    plugins: {
      // eslint-disable-next-line @susisu/safe-typescript/no-type-assertion
      "@typescript-eslint": tsEslintPlugin as unknown as ESLint.Plugin,
      "@susisu/safe-typescript": safeTsPlugin,
      "@stylistic": stylisticPlugin,
    },
    rules: {
      ...tsTypeCheckedRules,
      ...stylisticRules,
    },
  };
}
