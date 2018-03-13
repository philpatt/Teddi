'use strict';
module.exports = (sequelize, DataTypes) => {
  var park = sequelize.define('park', {
    parkname: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    fullName: DataTypes.STRING,
    directionsInfo: DataTypes.TEXT,
    entranceFeesCost: DataTypes.TEXT,
    entranceFeesDesc: DataTypes.TEXT,
    description: DataTypes.TEXT,
    weatherInfo: DataTypes.TEXT,
    parkCode: DataTypes.STRING
  });
    park.associate = function(models) {
      // associations can be defined here
      models.park.belongsTo(models.user);
    }
  return park;
};