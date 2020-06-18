import database from '../../server/src/models';
import express from 'express';
const app = express();


// app.post('/', (req, res) => {
//   database.Books.create(req.body).then(() => {
//     return res.json({
//       type: true,
//       message: '',
//     })
//   }).catch((err) => {
//     return res.json({
//       type: false,
//       message: err.toString(),
//     })
//   });
// });

app.post('/', (req, res) => {
  const book = {author_id: req.body.author_id, title: req.body.title};
  const publisher = {publisher_id: req.body.publisher_id};
  database.Books.create(book).then((book) => {
    database.Publishers.findOne({where: {id: publisher['publisher_id']}}).then((foundPublisher) => {
      if (!foundPublisher) {
        return res.json({
          type: false,
          message: 'Yayın evi bulunamadı',
        })
      }
      database.BooksAuthors.create({BookId: book.id, PublisherId: foundPublisher.id}).then(() => {
        return res.json({
          type: true,
          book,
        })
      }).catch((err) => {
        return res.json({
          type: false,
          message: err.toString(),
        })
      });
    }).catch((err) => {
      return res.json({
        type: false,
        message: err.toString(),
      })
    })
  })
});

module.exports = app;