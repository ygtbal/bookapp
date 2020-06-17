import express from 'express';
const app = express();
const path = require('path');
const basename = path.basename(__filename);


// Route
const bookRoute = require('./books/index');
app.use('/books', bookRoute);

const authorRoute = require('./authors/index');
app.use('/authors', authorRoute);

require('fs')
    .readdirSync(__dirname)
    .filter((file) => {
      return (
        file.indexOf('.') !== 0) &&
      (file !== basename) &&
      (file.slice(-3) === '.js'
      );
    }).forEach((file) => {
      app.use(`/${file.split('.')[0]}`, require(__dirname + path.sep + file));
    });

module.exports = app;