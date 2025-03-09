import { describe, it, expect } from "vitest";
import type { ConfigWithExtends } from "./index.js";
import { expand } from "./index.js";
import type { Linter } from "eslint";

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
