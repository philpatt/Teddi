
require('dotenv').config();
var express = require('express');
var passport = require('../config/passportConfig');
var db = require('../models');
var router = express.Router();
var isLoggedIn = require('../middleware/isloggedin');
var request = require('request');



// show page that is results of search
router.get('/', isLoggedIn, function(req, res){
	var qs ={
		start: 1,
		q: req.query.q || 'Rainier',
		api_key: process.env.API_KEY,
		sort: 'name',
		fields: 'images,entranceFees'
	}
	request({
	    url: 'https://developer.nps.gov/api/v1/parks',
	    qs: qs
	  }, function (error, response, body) {
  	// console.log(body);
    if (!error && response.statusCode == 200) {
      var dataObj = JSON.parse(body).data;
      console.log('this is my data', dataObj);
      res.render('results',{ results: dataObj});
    }
  });
});



module.exports = router;




