import database from '../../server/src/models';
import express from 'express';
const app = express();

app.get('/', (req, res) => {
  database.Authors.findAll().then((data) => {
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

app.post('/withBook', (req, res) => {
  // first
  database.Books.belongsTo(database.Authors, {foreignKey: 'author_id'});
  //second
  // database.Authors.hasMany(database.Books, {foreignKey: 'author_id'});
  database.Books.findAll({include: [{model: database.Authors, required: true}]}).then((data) => {
    return res.json({
      type: true,
      data,
    });
  });
  // second
  // database.Authors.findAll({include: [{model: database.Books, required: true}]}).then((data) => {
  //   return res.json({
  //     type: true,
  //     data,
  //   });
  // });
});

module.exports = app;