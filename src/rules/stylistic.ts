import type { Rules } from "./common";
import { levels, removeDisabledRules } from "./common";

const { error } = levels;

export const rules: Rules = removeDisabledRules({
  "@stylistic/lines-between-class-members": [error, "always", { exceptAfterSingleLine: true }],
  "@stylistic/spaced-comment": [error, "always"],
});
