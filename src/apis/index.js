/**
 * Apis module.
 * @module apis
 */
const status = require('http-status');

module.exports = (app, repo) => {

  // TODO: Add apis 

  // If a request is not handled, send bad response
  app.all('*', (req, res, next) => {
    res.sendStatus(status.OK);
  });
};
