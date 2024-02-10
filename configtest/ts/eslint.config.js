import { make } from "@susisu/eslint-config";
import globals from "globals";

export default make({ tsProject: false }, [
  {
    languageOptions: {
      globals: {
        ...globals.es2021,
        ...globals.node,
      },
    },
  },
]);
