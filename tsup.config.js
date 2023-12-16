"use strict";

const { defineConfig } = require("tsup");

module.exports = defineConfig({
  entry: ["src/index.ts"],
  outDir: "./lib",
  format: ["esm", "cjs"],
  splitting: false,
  sourcemap: true,
  dts: true,
  clean: true,
});
