'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class countries extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      countries.hasMany(models.cities, {
        foreignKey: 'country_id'
      })
    }
  }
  countries.init({
    country_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'countries',
  });
  return countries;
};