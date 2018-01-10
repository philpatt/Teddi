
require('dotenv').config();
var express = require('express');
var passport = require('../config/passportConfig');
var db = require('../models');
var router = express.Router();
var isLoggedIn = require('../middleware/isloggedin');
var request = require('request');
var async = require('async');



// show page that is results of search
router.get('/', function(req, res){
	var qs ={
		start: 1,
		q: req.query.q || 'yellowstone',
		api_key: process.env.API_KEY,
		sort: 'name',
		fields: 'images'
	}
	request({
	    url: 'https://developer.nps.gov/api/v1/parks',
	    qs: qs
	  }, function (error, response, body) {
  	// console.log(body);
    if (!error && response.statusCode == 200) {
      var dataObj = JSON.parse(body).data;
      console.log(dataObj);
      res.render('results',{ results: dataObj});
    }
  });
});

router.post('/', function(req, res) {
    console.log('find', req.body);
    db.park.findOrCreate({     
      where: {
        parkname: req.body.name
     }
    }).spread(function(park, created){
      async.forEach(user, function(c, callback){
        db.user.findOrCreate({
          where: { name: c }
        }).spread(function(user, wasCreated){
          if(user){
          park.addCategory(user);
        }
          callback();
        })
      }, function(){
        res.redirect('/');
      })
  });
});

























//delete favorites
module.exports = router;




