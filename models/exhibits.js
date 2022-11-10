'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Exhibits extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Exhibits.hasMany(models.Animals, { foreignKey: 'exhibit_Id' })
      Exhibits.belongsToMany(models.Schedule_Exhibit, {
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
        },
        name: DataTypes.STRING
      }
    },
    {
      sequelize,
      modelName: 'Exhibits',
      tableName: 'exhibits'
    }
  )
  return Exhibits
}
