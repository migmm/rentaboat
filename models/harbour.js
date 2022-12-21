'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class harbour extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      harbour.hasMany(models.boats, {
        foreignKey: 'harbour_id'
      })

      harbour.belongsTo(models.cities, {
        foreignKey: 'id',
        target_key: 'city_id'
      })
    }
  }
  harbour.init({
    harbour_name: DataTypes.STRING,
    city_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'harbour',
  });
  return harbour;
};