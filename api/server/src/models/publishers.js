'use strict';
module.exports = (sequelize, DataTypes) => {
  const Publishers = sequelize.define('Publishers', {
    name: DataTypes.STRING
  }, {});
  Publishers.associate = function(models) {
    // associations can be defined here
    Publishers.belongsToMany(models.Books, {through: 'BooksAuthors'});
  };
  return Publishers;
};