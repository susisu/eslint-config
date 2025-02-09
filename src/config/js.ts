import type { Linter } from "eslint";

import stylisticPlugin from "@stylistic/eslint-plugin";

import { js as jsRules, stylistic as stylisticRules } from "../rules";

export function config(): Linter.Config {
  return {
    name: "@susisu/eslint-config/js",
    linterOptions: {
      reportUnusedDisableDirectives: "warn",
      reportUnusedInlineConfigs: "warn",
    },
    plugins: {
      "@stylistic": stylisticPlugin,
    },
    rules: {
      ...jsRules,
      ...stylisticRules,
    },
  };
}
