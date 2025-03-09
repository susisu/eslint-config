import { describe, it, expect } from "vitest";
import { levels, intLevels, removeDisabledRules } from "./common.js";

describe("removeDisabledRules", () => {
  it("removes all disabled rules", () => {
    const actual = removeDisabledRules({
      "rule-off": levels.off,
      "rule-off-int": intLevels.off,
      "rule-warning": levels.warn,
      "rule-warning-int": intLevels.warn,
      "rule-error": levels.error,
      "rule-error-int": intLevels.error,
    });
    const expected = {
      "rule-warning": levels.warn,
      "rule-warning-int": intLevels.warn,
      "rule-error": levels.error,
      "rule-error-int": intLevels.error,
    };
    expect(actual).toEqual(expected);
  });
});
