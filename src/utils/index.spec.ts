import { describe, it, expect } from "vitest";
import { map } from ".";

describe("map", () => {
  it("creates an array of configs with each element merged shallowly with the base config", () => {
    const actual = map(
      {
        files: ["**/*.js"],
        ignores: ["**/*.test.js"],
      },
      [
        {
          rules: {
            "rule-a": "error",
          },
        },
        {
          ignores: ["**/*.test.js", "**/*.spec.js"],
          rules: {
            "rule-b": "error",
          },
        },
      ],
    );
    const expected = [
      {
        files: ["**/*.js"],
        ignores: ["**/*.test.js"],
        rules: {
          "rule-a": "error",
        },
      },
      {
        files: ["**/*.js"],
        ignores: ["**/*.test.js", "**/*.spec.js"],
        rules: {
          "rule-b": "error",
        },
      },
    ];
    expect(actual).toEqual(expected);
  });
});
