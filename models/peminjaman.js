'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class peminjaman extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.anggota, {
        foreignKey: "id_anggota",
        as: "anggota"
      })

      this.belongsTo(models.petugas, {
        foreignKey: "id_petugas",
        as: "petugas"
      })

      this.belongsTo(models.buku, {
        foreignKey: "id_buku",
        as: "buku"
      })
    }
  };
  peminjaman.init({
    id_peminjaman: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    tanggal_pinjam: DataTypes.DATE,
    tanggal_kembali: DataTypes.DATE,
    id_buku: DataTypes.INTEGER,
    id_anggota: DataTypes.INTEGER,
    id_petugas: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'peminjaman',
  });
  return peminjaman;
};