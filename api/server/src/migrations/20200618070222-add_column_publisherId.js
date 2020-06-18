'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      queryInterface.addColumn('BooksAuthors', 'PublisherId', {
        type: Sequelize.INTEGER,
        allowNull: false,
      });
      queryInterface.removeColumn('BooksAuthors', 'AuthorId');
    

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
