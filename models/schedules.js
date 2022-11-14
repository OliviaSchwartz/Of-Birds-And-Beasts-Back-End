'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Schedules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Schedules.belongsTo(models.Patrons, {
        // as: 'schedule',
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
      }
    },
    {
      sequelize,
      modelName: 'Schedules',
      tableName: 'schedules'
    }
  )
  return Schedules
}
