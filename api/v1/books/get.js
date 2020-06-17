import database from '../../server/src/models';
import express from 'express';
const app = express();

app.get('/', (req, res) => {
  database.Books.findAll().then((data) => {
    return res.json({
      type: true,
      data,
    })
  }).catch((err) => {
    return res.json({
      type: false,
      message: err.toString(),
    })
  })
});

module.exports = app;