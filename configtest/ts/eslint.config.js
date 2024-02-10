import { make } from "@susisu/eslint-config";
import globals from "globals";

export default make(
  {
    sourceType: "module",
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
