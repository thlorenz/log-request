# log-request

Small wrapper around npmlog that logs http requests in nice colors.

```js
var express = require('express');
var app = express();

app
  .use(require('log-request'))
  .listen(3000);
```

## Status

Alpha, tests pending -- use at your own risk.

## Installation

    npm install log-request

## API

```
/**
 * Logs method and url of the given request.
 *
 * @name exports
 * @function
 * @param req {Object} request
 * @param res {Object} (optional) response -  needed to work as connect/express middleware
 * @param next {Function} (optional) needed - to work as connect/express middleware
 */
```

## License

MIT
