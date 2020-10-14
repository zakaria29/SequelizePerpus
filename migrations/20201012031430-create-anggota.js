'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('anggota', {
      id_anggota: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      kode_anggota: {
        type: Sequelize.STRING
      },
      nama_anggota: {
        type: Sequelize.STRING
      },
      jk_anggota: {
        type: Sequelize.CHAR
      },
      jurusan_anggota: {
        type: Sequelize.STRING
      },
      no_telp_anggota: {
        type: Sequelize.STRING
      },
      alamat_anggota: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('anggota');
  }
};