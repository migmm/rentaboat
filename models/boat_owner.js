'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class boat_owner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  boat_owner.init({
    owner_name: DataTypes.STRING,
    owner_mail: DataTypes.STRING,
    owner_phone: DataTypes.STRING,
    owner_avatar: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'boat_owner',
  });
  return boat_owner;
};