# is-constructor
This is a utility I wrote to deem if something is a constructor. It's checks are fairly verbose, so I'd welcome the opportunity to see PRs with suggestions on better checking if something is a constructor.

## Usage

ES5/NodeJS:
```js
var isConstructor = require('is-constructor');

isConstructor(/* your thing to test */);
```

ES6/TypeScript:
```ts
import * as isConstructor from 'is-constructor';

isConstructor(/* your thing to test */);
```
