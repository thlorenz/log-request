'use strict';
var log = require('npmlog')
  , colors = require('ansicolors');

function renderMethod(m) {
  m = m.toUpperCase();
  switch(m) {
    case 'GET': return colors.green(m);
    case 'POST': return colors.blue('POS');
    case 'PUT': return colors.brightBlue(m);
    case 'DELETE': return colors.red('DEL');
  }
}

/**
 * Logs method and url of the given request.
 *
 * @name exports
 * @function
 * @param req {Object} request
 * @param res {Object} (optional) response -  needed to work as connect/express middleware
 * @param next {Function} (optional) needed - to work as connect/express middleware
 */
module.exports = function logRequest(req, res, next) {
  if (typeof res === 'function') next = res;

  log.http('request', renderMethod(req.method), req.url);
  if (next) next();
};
