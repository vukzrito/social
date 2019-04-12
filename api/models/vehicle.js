'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vehicle = sequelize.define('Vehicle', {
    id: DataTypes.STRING,
    year: DataTypes.INTEGER,
    mileage: DataTypes.STRING,
    username: DataTypes.STRING,
    passwordHash: DataTypes.STRING
  }, {});
  Vehicle.associate = function(models) {
    // associations can be defined here
  };
  return Vehicle;
};