'use strict'; // helps you make fewer errors, by detecting more things that could lead to breakages
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
      beforeCreate: function(pendingUser, options){
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

  User.Instance.prototype.isValidPassword = function(passwordTyped){
    return bcrypt.compareSync(passwordTyped, this.password);
  }

  User.Instance.prototype.toJson = function(){
    var user = this.get();
    delete user.password;
    return user;
  }
  
  return User;
};