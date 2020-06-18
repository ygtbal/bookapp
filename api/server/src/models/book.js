'use strict';
module.exports = (sequelize, DataTypes) => {
  const Books = sequelize.define('Books', {
    title: DataTypes.STRING,
    author_id: DataTypes.INTEGER,
  }, {});
  Books.associate = function(models) {
    // associations can be defined here
    Books.belongsToMany(models.Publishers, {through: 'BooksAuthors'});
  };
  return Books;
};