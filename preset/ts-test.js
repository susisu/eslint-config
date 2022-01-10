"use strict";

const { OFF } = require("../lib/levels");

const overrides = {
  "@typescript-eslint/no-unsafe-argument": OFF,
  "@typescript-eslint/no-unsafe-assignment": OFF,
  "@typescript-eslint/no-unsafe-call": OFF,
  "@typescript-eslint/no-unsafe-member-access": OFF,
  "@typescript-eslint/no-unsafe-return": OFF,
};

module.exports = {
  extends: ["./ts"],
  rules: {
    ...overrides,
  },
};
