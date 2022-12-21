'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class avatar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      avatar.hasMany(models.boat_owner, {
        foreignKey: 'owner_avatar'
      })
      
      avatar.hasMany(models.customer, {
        foreignKey: 'customer_avatar'
      })
    }
  }
  avatar.init({
    avatar_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'avatar',
  });
  return avatar;
};