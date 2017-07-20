/**
 * Config module.
 *
 * @module config/config
 */

/** Config related to server machine */
const serverSettings = {
  // TODO: Add server port
  port: process.env.PREFERENCE_PORT || 3000
};

/** Config related to database */
const dbSettings = {
  // TODO: Add db name, user name, passwd, ip, auth etc..
};

module.exports = Object.assign({}, { serverSettings, dbSettings });
