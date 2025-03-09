import type { Rules } from "./common.js";
import { levels, removeDisabledRules } from "./common.js";

const { error } = levels;

export const rules: Rules = removeDisabledRules({
  "@stylistic/lines-between-class-members": [error, "always", { exceptAfterSingleLine: true }],
  "@stylistic/spaced-comment": [error, "always"],
});
