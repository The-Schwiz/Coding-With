const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const sequelize = require('../config/connection');
const User = require('./User');

class Profile extends Model {}

Profile.init(
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        bio: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        experience: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tech: {
            type: DataTypes.STRING,
            allowNull: false
        },
        others: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
          type: DataTypes.INTEGER,
          unique: true,
          references: {
            model: 'user',
            key: 'id'
          }
        }
      },
      {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'profile'
      }
);

module.exports = Profile;