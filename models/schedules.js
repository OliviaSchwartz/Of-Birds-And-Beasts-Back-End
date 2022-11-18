'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Schedules extends Model {
    
    static associate(models) {
      
      Schedules.belongsTo(models.Patrons, {
       
        foreignKey: 'patron_Id'
      })
      Schedules.belongsToMany(models.Exhibits, {
        as: 'schedules',
        through: models.Schedule_Exhibit,
        foreignKey: 'schedule_Id'
      })
    }
  }
  Schedules.init(
    {
      date: DataTypes.STRING,
      patron_Id: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'patrons',
          key: 'id'
        }
      },
      exhibit_list: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Schedules',
      tableName: 'schedules'
    }
  )
  return Schedules
}
