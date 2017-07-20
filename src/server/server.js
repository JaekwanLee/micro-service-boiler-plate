/**
 * Server Module
 *
 * @module server/server
 */
const express = require('express');
const bodyParser = require('body-parser');
const api = require('../apis/');

/**
 * Start a server
 * @param {Object} server config Object
 * @param {Object} Repository module
 */
const start = (settings, repo) => {
  return new Promise((resolve, reject) => {
    if (!repo) {
      reject(new Error('Server must be started with repository.'));
    }

    if (!settings.port) {
      reject(new Error('Server must be started with a port number'));
    }

    const app = express();

    // TODO: Add middlewares
    app.use(bodyParser.json());

    // Set up apis 
    api(app, repo);

    // Start server
    const server = app.listen(settings.port, () => resolve(server));
  });
};

module.exports = Object.assign({}, {start});
