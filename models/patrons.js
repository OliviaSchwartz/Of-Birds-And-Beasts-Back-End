'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Patrons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Patrons.hasMany(models.Schedules, { foreignKey: 'patron_Id' })
    }
  }
  Patrons.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Patrons',
      tableName: 'patrons'
    }
  )
  return Patrons
}
