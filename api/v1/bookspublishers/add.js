import database from '../../server/src/models';
import express from 'express';
const app = express();

app.post('/', (req, res) => {
  console.log(req.body);
  const BookId = parseInt(req.body.BookId);
  const PublisherId = parseInt(req.body.PublisherId);
  database.BooksAuthors.create({BookId, PublisherId}).then(() => {
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