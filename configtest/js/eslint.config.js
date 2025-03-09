import { config } from "@susisu/eslint-config";
import globals from "globals";

export default config(
  {
    tsProjectService: false,
  },
  {
    languageOptions: {
      globals: {
        ...globals.es2023,
        ...globals.node,
      },
    },
  },
);
