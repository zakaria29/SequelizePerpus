'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pengembalian', {
      id_pengembalian: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tanggal_pengembalian: {
        type: Sequelize.DATE
      },
      denda: {
        type: Sequelize.DOUBLE
      },
      id_buku: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references : {
          model: "buku",
          key: "id_buku"
        }
      },
      id_anggota: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references : {
          model: "anggota",
          key: "id_anggota"
        }
      },
      id_petugas: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references : {
          model: "petugas",
          key: "id_petugas"
        }
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
    await queryInterface.dropTable('pengembalian');
  }
};