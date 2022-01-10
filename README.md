# @susisu/eslint-config
[![CI](https://github.com/susisu/eslint-config/workflows/CI/badge.svg)](https://github.com/susisu/eslint-config/actions?query=workflow%3ACI)

## Requirements
- eslint >= 8.5.0 < 9

## Installation
``` shell
# npm
npm i -D eslint @susisu/eslint-config
# yarn
yarn add -D eslint @susisu/eslint-config
```

## Usage
Extend a preset in your .eslintrc file.

- `@susisu/eslint-config/preset/js`: for JavaScript files
- `@susisu/eslint-config/preset/ts`: for TypeScript files
- `@susisu/eslint-config/preset/ts-test`: for TypeScript test files
- `@susisu/eslint-config/preset/ts-without-types`: for TypeScript files (without using type information)

Example:

``` json
{
  "extends": ["@susisu/eslint-config/preset/js"],
  "parserOptions": {
    "ecmaVersion": 2021
  },
  "env": {
    "es6": true,
    "node": true
  }
}
```

## Error levels
- `error`: problems that should be fixed in most of the projects and contexts
- `warn`: problems that might be fixed depending on the project or context, or just notifications (like highlighting TODO comments)

## License
[MIT License](http://opensource.org/licenses/mit-license.php)

## Author
Susisu ([GitHub](https://github.com/susisu), [Twitter](https://twitter.com/susisu2413))
