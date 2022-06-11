'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class consult_auth extends Model {

    static associate(models) {
      // define association here
    }
  }
  consult_auth.init({
    user_Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoincrement: true
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password_storage: DataTypes.STRING
  }, {
    sequelize,
    underscored: true,
    modelName: 'consult_auth',
  });
  return consult_auth;
};