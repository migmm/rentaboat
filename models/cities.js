'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      cities.hasMany(models.harbour, {
        foreignKey: 'city_id'
      })

      cities.hasMany(models.boats, {
        foreignKey: 'city_id'
      })

      cities.belongsTo(models.countries, {
        foreignKey: 'id',
        target_key: 'country_id'
      })
    }
  }
  cities.init({
    city_name: DataTypes.STRING,
    country_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'cities',
  });
  return cities;
};