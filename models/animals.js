'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Animals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Animals.belongsTo(models.Exhibits, { foreignKey: 'exhibit_Id' })
    }
  }
  Animals.init(
    {
      name: DataTypes.STRING,
      species: DataTypes.STRING,
      information: DataTypes.STRING,
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
