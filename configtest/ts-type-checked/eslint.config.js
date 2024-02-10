import { make } from "@susisu/eslint-config";
import globals from "globals";

export default make(
  {
    sourceType: "module",
    tsProject: "tsconfig.json",
  },
  [
    {
      languageOptions: {
        globals: {
          ...globals.es2021,
          ...globals.node,
        },
      },
    },
  ],
);
