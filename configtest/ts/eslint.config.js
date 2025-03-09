import { config } from "@susisu/eslint-config";
import globals from "globals";

export default config(
  {
    tsconfigRootDir: import.meta.dirname,
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
