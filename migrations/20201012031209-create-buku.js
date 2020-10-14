'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('buku', {
      id_buku: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_rak: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references : {
          model : "rak",
          key: "id_rak" // primary key of rak
        }
      },
      judul_buku: {
        type: Sequelize.STRING
      },
      penulis_buku: {
        type: Sequelize.STRING
      },
      penerbit_buku: {
        type: Sequelize.STRING
      },
      tahun_penerbit: {
        type: Sequelize.STRING
      },
      stok: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('buku');
  }
};