const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const sequelize = require('../config/connection');

class Links extends Model {}

Links.init(
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        linkedin: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        github: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        ig: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        twitter: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        website: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        user_id: {
          type: DataTypes.INTEGER,
          references: {
            model: 'user',
            key: 'id'
          }
        },
        profile_id: {
          type: DataTypes.INTEGER,
          references: {
            model: 'profile',
            key: 'id'
          }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'links'
    }
);

module.exports = Links;