'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Schedule_Exhibit extends Model {
    
    static associate(models) {
      
    }
  }
  Schedule_Exhibit.init(
    {
      schedule_Id: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'schedules',
          key: 'id'
        },
        exhibit_Id: {
          type: DataTypes.INTEGER,
          onDelete: 'CASCADE',
          references: {
            model: 'exhibits',
            key: 'id'
          }
        }
      }
    },
    {
      sequelize,
      modelName: 'Schedule_Exhibit',
      tableName: 'schedule_exhibits'
    }
  )
  return Schedule_Exhibit
}
