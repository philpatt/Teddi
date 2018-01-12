
require('dotenv').config();
var express = require('express');
var passport = require('../config/passportConfig');
var db = require('../models');
var router = express.Router();
var isLoggedIn = require('../middleware/isloggedin');
var request = require('request');


router.post("/show", isLoggedIn, function(req, res){
  db.park.find({
  	where: {parkCode: req.body.parkCode}
        }).then(function(info){
        var qs ={
		start: 1,
		parkCode: req.body.parkCode,
		api_key: process.env.API_KEY
		}
		request({
	    	url: 'https://developer.nps.gov/api/v1/alerts',
	    	qs: qs
	  	}, function (error, response, body) {

    		if (!error && response.statusCode == 200) {
      			var alertInfo = JSON.parse(body);
      			alertInfo.dbInfo = info;
      			console.log('this is info#####################',alertInfo);
      			res.render('user/show', { results: alertInfo});
    		}
  		});
  	});
});


module.exports = router;
