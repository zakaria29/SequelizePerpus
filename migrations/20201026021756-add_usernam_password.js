'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn(
      'petugas',
      'username',
      { type: Sequelize.STRING }
    )

    await queryInterface.addColumn(
      'petugas',
      'password',
      { type: Sequelize.STRING }
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn("petugas","username")
    await queryInterface.removeColumn("petugas","password")
  }
};
