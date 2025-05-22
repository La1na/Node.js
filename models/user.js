'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {}
  
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    mustChangePassword: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
};
