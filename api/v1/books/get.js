import database from '../../server/src/models';
import express from 'express';
const app = express();

app.get('/', (req, res) => {
  database.Books.belongsToMany(database.Publishers, {through: database.BooksAuthors});
  database.Books.belongsTo(database.Authors, {foreignKey: 'author_id'});
  database.Books.findAll({include: [{model: database.Publishers, required: false}, {model: database.Authors, required: true}]}).then((data) => {
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