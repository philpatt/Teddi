//this will be used to route to the profile page
require('dotenv').config();
var express = require('express');
var passport = require('../config/passportConfig');
var db = require('../models');
var router = express.Router();
var isLoggedIn = require('../middleware/isloggedin');
var request = require('request');

// router.get('/profile', isLoggedIn, function(req, res){
//   res.render('user/profile');
// });

//allows users indiviual park info to be accessed
router.get('/profile', isLoggedIn, function(req,res){
	// console.log('#####', user,'#######')
  db.user.findOne({
  	where: {id: req.user.id},
    include: [db.park]
  }).then(function(user){
  	console.log("################",user, "###########");
    res.render('user/profile', { user: user});
  }).catch(function(err){
  	console.log('my error is', err);
  });
});

//posts users favorited parks to park database and associates with user
router.post('/', isLoggedIn, function(req, res) {
  console.log('find', req.user.id, req.body);
  db.park.findOrCreate({     
    where: { 
      parkname: req.body.name
     },
    defaults: {
      userId: req.user.id
    }
  }).spread(function(park, wasCreated){
  	console.log('created park obj', park);
    if(wasCreated){
      res.redirect('/favorites/profile')
    } else {
      res.redirect('/favorites/profile')
    }
  }).catch(function(err){
    console.log('my error is ',err);
  });
});


//delete favorites

// <hr>
// <% user.parks.forEach(function(favPark){ %>
// 	<%= favPark.name %>
// <% }); %>







module.exports = router;
