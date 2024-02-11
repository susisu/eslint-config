import type { FlatESLintConfig } from "eslint-define-config";
import { defineFlatConfig } from "eslint-define-config";

import stylisticPlugin from "@stylistic/eslint-plugin";

import { js as jsRules, stylistic as stylisticRules } from "../rules";

export function config(): FlatESLintConfig {
  return defineFlatConfig({
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
  });
}
