import { config } from "@susisu/eslint-config";
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
