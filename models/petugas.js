'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class petugas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.pengembalian, {
        foreignKey: "id_petugas",
        as: "pengembalian"
      })

      this.hasMany(models.peminjaman, {
        foreignKey: "id_petugas",
        as: "peminjaman"
      })
    }
  };
  petugas.init({
    id_petugas: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nama_petugas: DataTypes.STRING,
    jabatan_petugas: DataTypes.STRING,
    no_telp_petugas: DataTypes.STRING,
    alamat_petugas: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'petugas',
  });
  return petugas;
};