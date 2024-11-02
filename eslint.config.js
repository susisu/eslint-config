import { config } from "@susisu/eslint-config-stable";
import globals from "globals";

export default config(
  {
    tsconfigRootDir: import.meta.dirname,
  },
  [
    {
      languageOptions: {
        globals: {
          ...globals.es2023,
          ...globals.node,
        },
      },
    },
  ],
);
