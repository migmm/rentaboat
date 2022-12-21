'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      cart.belongsTo(models.boats, {
        foreignKey: 'id',
        target_key: 'boat_id'
      })
    }
  }
  cart.init({
    customer_id: DataTypes.INTEGER,
    boat_id: DataTypes.INTEGER,
    date_from: DataTypes.DATE,
    date_to: DataTypes.DATE,
    total_price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'cart',
  });
  return cart;
};