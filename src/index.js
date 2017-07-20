/**
 * Service name 
 * @author <Author>
 */
'use strict';

const {EventEmitter} = require('events');
const server = require('./server/server');
const repository = require('./repository/');
const config = require('./config/');
const mediator = new EventEmitter();

console.log('--- <Name of service> Service ---');
console.log('Connecting to repository...');

process.on('uncaughtException', (err) => {
  console.error('Unhandled Exception', err);
});

process.on('uncaughtRejection', (err, promise) => {
  console.error('Unhandled Rejection', err);
});

/* Triggered when db is ready */
mediator.on('db.ready', (db) => {
  // when db is ready, let's connect our repo logic to db
  repository.connect(db)
    .then((repo) => {
      // once it connected, let's start our server !
      server.start(config.serverSettings, repo)
        .then(app => {
          console.log(`Server started succesfully, on port ${config.serverSettings.port}`);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

/* Set up DB */
config.db.connect(config.dbSettings, mediator);
