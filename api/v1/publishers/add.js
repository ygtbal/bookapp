import database from '../../server/src/models';
import express from 'express';
const app = express();

app.post('/', (req, res) => {
  console.log('add');
  database.Publishers.create(req.body).then(() => {
    return res.json({
      type: true,
      message: '',
    });
  }).catch((err) => {
    return res.json({
      type: false,
      message: err.toString(),
    });
  })
});

module.exports = app;