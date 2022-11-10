'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule_Exhibit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Schedule_Exhibit.init({
    schedule_Id: DataTypes.INTEGER,
    exhibit_Id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Schedule_Exhibit',
  });
  return Schedule_Exhibit;
};