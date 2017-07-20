/**
 * DB module.
 * @module config/database
 */

/**
 * Connect config
 * @param {Object} db config Object
 * @param {Object} event EventEmitter
 */
const connect = (config, eventEmitor) => {
  // TODO: connect DB and send 'db.ready' with db connection
  eventEmitor.emit('db.ready', {} /* db object to return */);
};

module.exports = Object.assign({}, {connect});
