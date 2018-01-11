'use strict';
module.exports = (sequelize, DataTypes) => {
  var park = sequelize.define('park', {
    parkname: DataTypes.STRING,
    apiId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  });
      park.associate = function(models) {
        // associations can be defined here
        models.park.belongsTo(models.user);
      }
  return park;
};