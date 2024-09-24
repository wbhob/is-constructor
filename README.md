# is-constructor

[![CI](https://github.com/wbhob/is-constructor/actions/workflows/ci.yml/badge.svg)](https://github.com/wbhob/is-constructor/actions/workflows/ci.yml)

This utility function determines whether a given value is a constructor function. It performs a series of checks to accurately identify constructors, including class constructors and legacy function constructors.

Key features:
- Accurately identifies both modern class constructors and legacy function constructors
- Handles edge cases and corner cases
- Written in TypeScript with full type support
- Lightweight with no dependencies

While the current implementation is robust, I'm always open to suggestions for improvements or optimizations. If you have ideas on how to enhance the accuracy or performance of the checks, please feel free to submit a pull request or open an issue for discussion.

## Usage

ES5/NodeJS:

```js
var isConstructor = require("is-constructor");

isConstructor(/* your thing to test */);
```

ES6/TypeScript:

```ts
import * as isConstructor from "is-constructor";

isConstructor(/* your thing to test */);
```
