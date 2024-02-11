import { config } from "@susisu/eslint-config";
import globals from "globals";

export default config({ tsProject: false }, [
  {
    languageOptions: {
      globals: {
        ...globals.es2021,
        ...globals.node,
      },
    },
  },
]);
