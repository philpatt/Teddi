
require('dotenv').config();
var express = require('express');
var db = require('../models');
var router = express.Router();
var isLoggedIn = require('../middleware/isloggedin');
var request = require('request');

// In profile, user can now access alerts for their selected park
router.post("/:parkCode", isLoggedIn, function(req, res){
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
      			res.render('user/show', { results: alertInfo});
    		}
  		});
  	});
});


module.exports = router;
