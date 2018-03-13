'use strict';
var bcrypt = require('bcrypt');


module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('user', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg:'Invalid email address format'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [6 ,12],
          msg: 'password must be 6 to 12 characters long'
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: function(pendingUser, Options){
        if(pendingUser && pendingUser.password){
          var hash = bcrypt.hashSync(pendingUser.password, 10);
          pendingUser.password = hash;
        }
      }
    }
  });

  User.associate = function(models){
    models.user.hasMany(models.park);
  }

  User.prototype.isValidPassword = function(passwordTyped){
    return bcrypt.compareSync(passwordTyped, this.password);
  }

  User.prototype.toJson = function(){
    var user = this.get();
    delete user.password;
    return user;
  }
  
  return User;
};