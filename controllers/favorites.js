//this will be used to route to the profile page
require('dotenv').config();
var express = require('express');
var db = require('../models');
var router = express.Router();
var isLoggedIn = require('../middleware/isloggedin');


// YOU ARE HERE: /profile/
//allows users indiviual park info to be accessed
router.get('/profile', isLoggedIn, function(req,res){
  db.user.findOne({
  	where: {id: req.user.id},
    include: [db.park]
  }).then(function(user){
    res.render('user/profile', { user: user});
  }).catch(function(err){
  	console.log('my error is', err);
  });
});


//posts users favorited parks to park database and associates with user
router.post('/', isLoggedIn, function(req, res) {
  db.park.findOrCreate({     
    where: { 
      parkname: req.body.name,
     },
    defaults: {
      userId: req.user.id,
      entranceFeesCost: req.body.entranceFeesCost,
      entranceFeesDesc: req.body.entranceFeesDesc,
      weatherInfo: req.body.weatherInfo,
      description: req.body.description,
      fullName: req.body.fullName,
      directionsInfo: req.body.directionsInfo,
      parkCode: req.body.parkCode
    }
  }).spread(function(park, wasCreated){
    if(wasCreated){
      res.redirect('/prof/profile')
    } else {
      res.redirect('/prof/profile')
    }
  }).catch(function(err){
    console.log('my error is ',err);
  });
});

//delete favorited parks
router.delete('/:id', function(req, res){
  db.park.destroy({
    where: {id: req.params.id}
  }).then(function(deleted){
    res.send('sucesss');
  }).catch(function(err){
    res.send('fail');
  });
});



































module.exports = router;
