'use strict';
module.exports = (sequelize, DataTypes) => {
  var park = sequelize.define('park', {
    parkname: DataTypes.STRING,
    userId: DataTypes.INTEGER,
 	fullName: DataTypes.STRING,
 	directionsInfo: DataTypes.STRING,
 	entranceFeesCost: DataTypes.STRING,
 	entranceFeesDesc: DataTypes.STRING,
 	description: DataTypes.STRING,
 	weatherInfo: DataTypes.STRING
  });
      park.associate = function(models) {
        // associations can be defined here
        models.park.belongsTo(models.user);
      }
  return park;
};