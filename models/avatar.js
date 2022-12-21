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
    }
  }
  avatar.init({
    avatar_image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'avatar',
  });
  return avatar;
};