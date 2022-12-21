'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class boats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  boats.init({
    boat_type: DataTypes.STRING,
    brand: DataTypes.STRING,
    model: DataTypes.STRING,
    year: DataTypes.INTEGER,
    city_id: DataTypes.INTEGER,
    harbour_id: DataTypes.INTEGER,
    capacity: DataTypes.INTEGER,
    description: DataTypes.STRING,
    length: DataTypes.FLOAT,
    price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'boats',
  });
  return boats;
};