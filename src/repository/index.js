/**
 * Repository module.
 *
 * @module repository
 */

/**
 * Connect repositories to database
 * @param {Object} database module
 */
const connect = (db) => {
  return new Promise((resolve, reject) => {
    if (!db) {
      return reject(new Error('Repo connection failed because db is empty'));
    }

    // TODO: Add ORM layer

    resolve(Object.assign({}, { /* TODO: add Repos */ }));
  });
};

module.exports = Object.assign({}, { connect });
