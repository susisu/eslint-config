import type { Linter } from "eslint";

import stylisticPlugin from "@stylistic/eslint-plugin";

import { js as jsRules, stylistic as stylisticRules } from "../rules";

export function config(): Linter.Config {
  return {
    linterOptions: {
      reportUnusedDisableDirectives: true,
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
