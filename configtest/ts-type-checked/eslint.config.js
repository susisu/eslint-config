import { config, map } from "@susisu/eslint-config";
import globals from "globals";

export default [
  ...map({ files: ["**/*.ts"] }, [
    config.tsTypeChecked(),
    {
      languageOptions: {
        sourceType: "module",
        parserOptions: {
          project: "tsconfig.json",
        },
        globals: {
          ...globals.es2021,
          ...globals.node,
        },
      },
    },
  ]),
];
