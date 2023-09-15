"use strict";

const { describe, it } = require("node:test");
const assert = require("node:assert/strict");

const { removeDisabledRules } = require("../lib/utils");
const { OFF, OFF_INT, WRN, WRN_INT, ERR, ERR_INT } = require("../lib/levels");

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
