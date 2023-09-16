"use strict";

const { describe, it } = require("node:test");
const assert = require("node:assert/strict");

const { removeDisabledRules, map } = require("./utils");
const { OFF, OFF_INT, WRN, WRN_INT, ERR, ERR_INT } = require("./levels");

describe("removeDisabledRules", () => {
  it("removes all disabled rules", () => {
    assert.deepEqual(
      removeDisabledRules({
        "rule-off": OFF,
        "rule-off-int": OFF_INT,
        "rule-warning": WRN,
        "rule-warning-int": WRN_INT,
        "rule-error": ERR,
        "rule-error-int": ERR_INT,
      }),
      {
        "rule-warning": WRN,
        "rule-warning-int": WRN_INT,
        "rule-error": ERR,
        "rule-error-int": ERR_INT,
      }
    );
  });
});

describe("map", () => {
  it("creates an array of configs with each element merged shallowly with the base config", () => {
    const configs = map({
      files: ["**/*.js"],
      ignores: ["**/*.test.js"],
    }, [
      {
        rules: {
          "rule-a": ERR,
        },
      },
      {
        ignores: ["**/*.test.js", "**/*.spec.js"],
        rules: {
          "rule-b": ERR,
        },
      },
    ]);
    assert.deepEqual(configs, [
      {
        files: ["**/*.js"],
        ignores: ["**/*.test.js"],
        rules: {
          "rule-a": ERR,
        },
      },
      {
        files: ["**/*.js"],
        ignores: ["**/*.test.js", "**/*.spec.js"],
        rules: {
          "rule-b": ERR,
        },
      },
    ]);
  });
});
