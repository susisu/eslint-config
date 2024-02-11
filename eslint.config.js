import { config } from "@susisu/eslint-config-stable";
import globals from "globals";

export default config({}, [
  {
    languageOptions: {
      globals: {
        ...globals.es2021,
        ...globals.node,
      },
    },
  },
]);
