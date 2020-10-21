'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class buku extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.rak, {
        foreignKey: "id_rak",
        as: "rak"
      })
    }
  };
  buku.init({
    id_buku: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_rak: DataTypes.INTEGER,
    judul_buku: DataTypes.STRING,
    penulis_buku: DataTypes.STRING,
    penerbit_buku: DataTypes.STRING,
    tahun_penerbit: DataTypes.STRING,
    stok: DataTypes.INTEGER,
    cover: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'buku',
    tableName: 'buku'
  });
  return buku;
};