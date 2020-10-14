'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('peminjaman', {
      id_peminjaman: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tanggal_pinjam: {
        type: Sequelize.DATE
      },
      tanggal_kembali: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('peminjaman');
  }
};