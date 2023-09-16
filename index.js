"use strict";

const js = require("./config/js");
const ts = require("./config/ts");
const tsTypeChecked = require("./config/ts-type-checked");

const { map } = require("./lib/utils");

module.exports = {
  config: {
    js,
    ts,
    tsTypeChecked,
  },
  map,
};
