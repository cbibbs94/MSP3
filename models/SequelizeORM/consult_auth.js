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
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
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
    modelName: 'consult_auth',
    
  });
  return consult_auth;
};