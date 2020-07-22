# @susisu/eslint-config
[![Build Status](https://travis-ci.com/susisu/eslint-config.svg?branch=master)](https://travis-ci.com/susisu/eslint-config)

## Requirements
- eslint >= 7.4.0 < 8

## Installation
``` shell
# npm
npm i -D eslint @susisu/eslint-config
# yarn
yarn add -D eslint @susisu/eslint-config
```

## Usage
Extend a preset in your .eslintrc file.

- `@susisu/eslint-config/preset/es`: ECMAScript
- `@susisu/eslint-config/preset/ts`: TypeScript
- `@susisu/eslint-config/preset/ts-types`: TypeScript with type information

Example:

``` json
{
  "extends": ["@susisu/eslint-config/preset/es"],
  "parserOptions": {
    "ecmaVersion": 2019
  },
  "env": {
    "es6": true,
    "node": true
  }
}
```

## License
[MIT License](http://opensource.org/licenses/mit-license.php)

## Author
Susisu ([GitHub](https://github.com/susisu), [Twitter](https://twitter.com/susisu2413))
