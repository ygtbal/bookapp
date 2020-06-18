'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      queryInterface.changeColumn('BooksAuthors', 'BookId', {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      });
      queryInterface.changeColumn('BooksAuthors', 'PublisherId', {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
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
