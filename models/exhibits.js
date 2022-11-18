'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Exhibits extends Model {
    
    static associate(models) {
      
      Exhibits.hasMany(models.Animals, { foreignKey: 'exhibit_Id' })
      Exhibits.belongsToMany(models.Schedules, {
        as: 'exhibits',
        through: models.Schedule_Exhibit,
        foreignKey: 'exhibit_Id'
      })
    }
  }
  Exhibits.init(
    {
      schedule_Id: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'schedule_exhibit',
          key: 'id'
        }
      },
      name: DataTypes.STRING,
      image: DataTypes.BLOB
    },
    {
      sequelize,
      modelName: 'Exhibits',
      tableName: 'exhibits'
    }
  )
  return Exhibits
}
