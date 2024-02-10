import { make } from "@susisu/eslint-config";
import globals from "globals";

export default make({}, [
  {
    languageOptions: {
      globals: {
        ...globals.es2021,
        ...globals.node,
      },
    },
  },
]);
