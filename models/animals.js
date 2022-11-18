'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Animals extends Model {
    
    static associate(models) {
      
      Animals.belongsTo(models.Exhibits, { foreignKey: 'exhibit_Id' })
    }
  }
  Animals.init(
    {
      name: DataTypes.STRING,
      species: DataTypes.STRING,
      information: DataTypes.TEXT,
      image: DataTypes.STRING,
      exhibit_Id: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'exhibits',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Animals',
      tableName: 'animals'
    }
  )
  return Animals
}
