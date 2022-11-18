'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Patrons extends Model {
    
    static associate(models) {
      
      Patrons.hasMany(models.Schedules, { foreignKey: 'patron_Id' })
    }
  }
  Patrons.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      passwordDigest: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Patrons',
      tableName: 'patrons'
    }
  )
  return Patrons
}
