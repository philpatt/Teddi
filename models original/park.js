'use strict';
module.exports = (sequelize, DataTypes) => {
  var park = sequelize.define('park', {
    parkname: DataTypes.STRING,
    apiId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return park;
};