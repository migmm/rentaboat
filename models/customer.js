'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      customer.hasMany(models.rental, {
        foreignKey: 'customer_id'
      })
      
      customer.belongsTo(models.avatar, {
        foreignKey: 'id',
        target_key: 'customer_avatar'
      })
    }
  }
  customer.init({
    customer_name: DataTypes.STRING,
    customer_mail: DataTypes.STRING,
    customer_phone: DataTypes.STRING,
    customer_avatar: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'customer',
  });
  return customer;
};