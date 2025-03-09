import type { ESLint, Linter } from "eslint";

import stylisticPlugin from "@stylistic/eslint-plugin";

import { js as jsRules, stylistic as stylisticRules } from "../rules/index.js";

export function config(): Linter.Config {
  return {
    name: "@susisu/eslint-config/js",
    linterOptions: {
      reportUnusedDisableDirectives: "warn",
      reportUnusedInlineConfigs: "warn",
    },
    plugins: {
      // eslint-disable-next-line @susisu/safe-typescript/no-type-assertion
      "@stylistic": stylisticPlugin as ESLint.Plugin,
    },
    rules: {
      ...jsRules,
      ...stylisticRules,
    },
  };
}
