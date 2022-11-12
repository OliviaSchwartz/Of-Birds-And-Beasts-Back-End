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
      Patrons.belongsToMany(models.Schedules, {
        through: models.schedule_exhibit,
        foreignKey: 'patron_Id'
      })
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
