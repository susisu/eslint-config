import { config, map } from "@susisu/eslint-config";
import globals from "globals";

export default [
  ...map({ files: ["**/*.js"] }, [
    config.js(),
    {
      languageOptions: {
        sourceType: "module",
        globals: {
          ...globals.es2021,
          ...globals.node,
        },
      },
    },
  ]),
];
