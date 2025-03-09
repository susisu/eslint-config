import { describe, it, expect } from "vitest";
import type { ConfigWithExtends } from "./index.js";
import { map, expand } from "./index.js";
import type { Linter } from "eslint";

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

describe("expand", () => {
  it.each<{ input: ConfigWithExtends[]; output: Linter.Config[] }>([
    {
      input: [],
      output: [],
    },
    {
      input: [
        {
          files: ["foo/*.js"],
          ignores: ["foo/*.test.js"],
          extends: [
            {
              rules: {
                "rule-a": "error",
              },
            },
          ],
          rules: {
            "rule-b": "error",
          },
        },
      ],
      output: [
        {
          files: ["foo/*.js"],
          ignores: ["foo/*.test.js"],
          rules: {
            "rule-a": "error",
          },
        },
        {
          files: ["foo/*.js"],
          ignores: ["foo/*.test.js"],
          rules: {
            "rule-b": "error",
          },
        },
      ],
    },
    {
      input: [
        {
          files: ["foo/*.js"],
          ignores: ["foo/*.test.js"],
          extends: [
            {
              files: ["bar/*.js"],
              ignores: ["bar/*.test.js"],
              rules: {
                "rule-a": "error",
              },
            },
          ],
          rules: {
            "rule-b": "error",
          },
        },
      ],
      output: [
        {
          files: ["foo/*.js"],
          ignores: ["foo/*.test.js"],
          rules: {
            "rule-a": "error",
          },
        },
        {
          files: ["foo/*.js"],
          ignores: ["foo/*.test.js"],
          rules: {
            "rule-b": "error",
          },
        },
      ],
    },
    {
      input: [
        {
          extends: [
            {
              files: ["foo/*.js"],
              ignores: ["foo/*.test.js"],
              rules: {
                "rule-a": "error",
              },
            },
          ],
          rules: {
            "rule-b": "error",
          },
        },
      ],
      output: [
        {
          files: ["foo/*.js"],
          ignores: ["foo/*.test.js"],
          rules: {
            "rule-a": "error",
          },
        },
        {
          rules: {
            "rule-b": "error",
          },
        },
      ],
    },
    {
      input: [
        {
          files: undefined,
          ignores: undefined,
          extends: [
            {
              files: ["foo/*.js"],
              ignores: ["foo/*.test.js"],
              rules: {
                "rule-a": "error",
              },
            },
          ],
          rules: {
            "rule-b": "error",
          },
        },
      ],
      output: [
        {
          files: ["foo/*.js"],
          ignores: ["foo/*.test.js"],
          rules: {
            "rule-a": "error",
          },
        },
        {
          files: undefined,
          ignores: undefined,
          rules: {
            "rule-b": "error",
          },
        },
      ],
    },
  ])("expands configurations with `extends`", ({ input, output }) => {
    expect(expand(input)).toEqual(output);
  });
});
