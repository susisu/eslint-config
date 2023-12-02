# @susisu/eslint-config

[![CI](https://github.com/susisu/eslint-config/workflows/CI/badge.svg)](https://github.com/susisu/eslint-config/actions?query=workflow%3ACI)

## Requirements

- eslint >= 8.50.0 < 9

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

There are three preset configurations for JavaScript and TypeScript:

- `config.js`: preset for JavaScript
- `config.ts`: preset for TypeScript
- `config.tsTypeChecked`: preset for TypeScript + rules that require type information

The package also provides a utility function `map(base, configs)` to easily extend configurations.

``` js
import { config, map } from "@susisu/eslint-config";

export default [
  ...map(
    {
      files: ["**/*.js"],
    },
    [
      config.js(),
      {
        languageOptions: {
          sourceType: "module",
        },
        rules: {
          "no-console": "off",
        },
      },
    ],
  ),
];
```

The above code is equal to

``` js
import { config } from "@susisu/eslint-config";

export default [
  {
    files: ["**/*.js"],
    ...config.js(),
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "module",
    },
    rules: {
      "no-console": "off",
    },
  },
];
```

## Error levels

- `error`: problems that should be fixed in most of the projects and contexts
- `warn`: problems that might be fixed depending on the project or context, or just notifications (like highlighting TODO comments)

## License

[MIT License](http://opensource.org/licenses/mit-license.php)

## Author

Susisu ([GitHub](https://github.com/susisu), [Twitter](https://twitter.com/susisu2413))
