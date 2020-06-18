'use strict';
module.exports = (sequelize, DataTypes) => {
  const BooksAuthors = sequelize.define('BooksAuthors', {
    BookId: DataTypes.INTEGER,
    PublisherId: DataTypes.INTEGER
  }, {});
  BooksAuthors.associate = function(models) {
    // associations can be defined here
  };
  return BooksAuthors;
};