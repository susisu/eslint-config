# @susisu/eslint-config

[![CI](https://github.com/susisu/eslint-config/actions/workflows/ci.yml/badge.svg)](https://github.com/susisu/eslint-config/actions/workflows/ci.yml)

## Requirements

- eslint >= 8.56.0 < 9

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

## eslintrc

There are three preset configurations for JavaScript and TypeScript:

- `@susisu/eslint-config/preset/js`: preset for JavaScript
- `@susisu/eslint-config/preset/ts`: preset for TypeScript + rules that require type information
- `@susisu/eslint-config/preset/ts-without-types`: preset for TypeScript

To use a preset, extend it in your eslintrc file.

``` json
{
  "overrides": [
    {
      "files": ["**/*.js"],
      "extends": ["@susisu/eslint-config/preset/js"],
      "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
      },
      "rules": {
        "no-console": "off"
      }
    }
  ]
}
```

## Flat Config (beta)

The package provides a factory function that configures all language settings and rules for each file type.

``` js
import { config } from "@susisu/eslint-config";

export default config(
  // options
  {
    // Default sourceType for .js files  (default: "module")
    jsSourceType: "module",
    // Set as languageOptions.parserOptions.project for TypeScript files (default: true)
    tsProject: true,
    // If true, mixes eslint-config-prettier to disable formatting rules (default: true)
    prettier: true,
  },
  // custom flat configs
  [
    {
      files: ["/path/to/file.js"],
      rules: {
        "no-console": "off",
      },
    },
  ],
);
```

## Error levels

- `error`: problems that should be fixed in most of the projects and contexts
- `warn`: problems that might be fixed depending on the project or context, or just notifications (like highlighting TODO comments)

## License

[MIT License](http://opensource.org/licenses/mit-license.php)

## Author

Susisu ([GitHub](https://github.com/susisu), [Twitter](https://twitter.com/susisu2413))
