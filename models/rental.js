'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rental extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      rental.belongsTo(models.boats, {
        foreignKey: 'id',
        target_key: 'boat_id'
      })

      rental.belongsTo(models.customer, {
        foreignKey: 'id',
        target_key: 'customer_id'
      })
    }
  }
  rental.init({
    boat_id: DataTypes.INTEGER,
    customer_id: DataTypes.INTEGER,
    available_date_from: DataTypes.DATE,
    available_date_to: DataTypes.DATE,
    location: DataTypes.INTEGER,
    available_captain: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'rental',
  });
  return rental;
};