# @susisu/eslint-config

[![CI](https://github.com/susisu/eslint-config/actions/workflows/ci.yml/badge.svg)](https://github.com/susisu/eslint-config/actions/workflows/ci.yml)

## Requirements

- eslint >= 9.19.0 < 10

## Installation

``` shell
# npm
npm i -D eslint @susisu/eslint-config
# yarn
yarn add -D eslint @susisu/eslint-config
# pnpm
pnpm add -D eslint @susisu/eslint-config
```

## Usage

*NOTE: Formatting rules are not enabled. I recommend using [Prettier](https://prettier.io).*

The package provides a factory function that configures all language settings and rules for each file type.

### Minimum setup

``` js
import { config } from "@susisu/eslint-config";

export default config({
  tsconfigRootDir: import.meta.dirname,
});
```

### Options and custom configs

``` js
export default config(
  // Options
  {
    // Enable recommended rules. (default: true)
    recommendedRules: true,
    // Default sourceType for .js files.  (default: "module")
    jsSourceType: "module",
    // Set languageOptions.parserOptions.projectService for TypeScript files. (default: true)
    // If both `tsProjectService` and `tsProject` are enabled, only `tsProjectService` will have effect.
    tsProjectService: true,
    // Set languageOptions.parserOptions.project for TypeScript files. (default: false)
    tsProject: false,
    // Set languageOptions.parserOptions.tsconfigRootDir for TypeScript files. (default: undefined)
    tsconfigRootDir: undefined,
    // If true, mixes eslint-config-prettier to disable formatting rules. (default: true)
    prettier: true,
  },
  // Custom configs
  // You can use the same feature as `defineConfig()`, like `extends`.
  // See https://eslint.org/blog/2025/03/flat-config-extends-define-config-global-ignores/
  [
    {
      files: ["/path/to/file.js"],
      extends: [somePlugin.recommended],
      rules: {
        "no-console": "off",
      },
    },
  ],
);
);
```

### What does `config()` do?

- Set linter options
  - Enable `reportUnusedDisableDirectives`
  - Enable `reportUnusedInlineConfigs`
- Install plugins
  - [typescript-eslint](https://typescript-eslint.io) (rule prefix: `@typescript-eslint/*`)
  - [ESLint Stylistic](https://eslint.style) (rule prefix: `@stylistic/*`)
  - [eslint-plugin-safe-typescript](https://github.com/susisu/eslint-plugin-safe-typescript) (rule prefix: `@susisu/safe-typescript/*`)
- Set language options for JS and TS files
  - Set `sourceType: "module"` for .js, .mjs, .ts, .tsx, .cts, .mts
  - Set `sourceType: "commonjs"` for .cjs
  - Enable typescript-eslint parser and typed linting for TS files
- Enable recommended rules
- Apply custom configs
- Disable rules conflicting with Prettier

See [the source code](https://github.com/susisu/eslint-config/blob/master/src/config/index.ts) for more details.

## Error levels

- `error`: problems that should be fixed in most of the projects and contexts
- `warn`: problems that might be fixed depending on the project or context, or just notifications (like highlighting TODO comments)

## License

[MIT License](http://opensource.org/licenses/mit-license.php)

## Author

Susisu ([GitHub](https://github.com/susisu), [Twitter](https://twitter.com/susisu2413))
