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
      Schedules.belongsToMany(models.Patrons, {
        as: 'schedule_exhibits',
        through: models.Schedule_Exhibit,
        foreignKey: 'patron_Id'
      })
    }
  }
  Schedules.init(
    {
      date: DataTypes.STRING,
      patron_Id: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Schedules',
      tableName: 'schedules'
    }
  )
  return Schedules
}
