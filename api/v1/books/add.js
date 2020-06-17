import database from '../../server/src/models';
import express from 'express';
const app = express();

// app.post('/', (req, res) => {
//   database.Book.create({title: req.body.title}, (err, data) => {
//     return res.json({
//       type: true,
//     }); 
//   })
// });

app.post('/', (req, res) => {
  database.Books.create(req.body).then(() => {
    return res.json({
      type: true,
      message: '',
    })
  }).catch((err) => {
    return res.json({
      type: false,
      message: err.toString(),
    })
  });
});

module.exports = app;