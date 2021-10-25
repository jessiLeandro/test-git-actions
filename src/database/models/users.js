'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
   
    static associate(models) {
    }
  };

  users.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },

    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },

    deletedAt: {
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'users',
  });
  
  return users;
};