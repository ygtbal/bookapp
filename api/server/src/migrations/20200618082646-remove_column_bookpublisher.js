'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
     queryInterface.removeColumn('BooksAuthors', 'BookId'); 
      queryInterface.removeColumn('BooksAuthors', 'PublisherId');
      queryInterface.addColumn('BooksAuthors', 'BookId', {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      });
      queryInterface.addColumn('BooksAuthors', 'PublisherId', {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      });
    

      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  },
};
