'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Developers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Developers.init({
    username: DataTypes.STRING,
    title: DataTypes.STRING,
    github: DataTypes.STRING,
    twitter: DataTypes.STRING,
    discord: DataTypes.STRING,
    icon_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Developers',
  });
  return Developers;
};