
require('dotenv').config();
var express = require('express');
var passport = require('../config/passportConfig');
var db = require('../models');
var router = express.Router();
var isLoggedIn = require('../middleware/isloggedin');
var request = require('request');


// router.get('/show', isLoggedIn, function(req, res){
// 	res.render('user/show');
// });
// router.get('/show', isLoggedIn, function(req,res){
//   db.user.findOne({
//   	where: {id: req.user.id},
//     include: [db.park]
//   }).then(function(user){
//     res.render('user/show', { user: user});
//   }).catch(function(err){
//   	console.log('my error is', err);
//   });
// });

router.get('/show', isLoggedIn, function(req, res){
	console.log('################ req.query.q is ',req.query.q)
	var qs ={
		start: 1,
		parkCode: req.query.parkCode,
		api_key: process.env.API_KEY
	}
	request({
	    url: 'https://developer.nps.gov/api/v1/alerts',
	    qs: qs
	  }, function (error, response, body) {
  	console.log('body data is', body.data);
    if (!error && response.statusCode == 200) {
      var dataObj = JSON.parse(body).data;
      console.log('this is my data', dataObj);
      res.render('user/show',{ results: dataObj});
    }
  });
});


module.exports = router;
