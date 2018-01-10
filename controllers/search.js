
require('dotenv').config();
var express = require('express');
var passport = require('../config/passportConfig');
var db = require('../models');
var router = express.Router();
var isLoggedIn = require('../middleware/isloggedin');
var request = require('request');



// show page that is results of search
// router.get('/results', function(req, res){
// 	res.render('results');
// });

// POST - receive the name of the park and add it to the database

router.get('/', function(req, res){
	var qs ={
		start: 1,
		q: req.query.q,
		api_key: process.env.API_KEY,
		sort: '-name',
		fields: 'images'
	}
	request({
	    url: 'https://developer.nps.gov/api/v1/parks',
	    qs: qs
	  }, function (error, response, body) {
  	// console.log(body);
    if (!error && response.statusCode == 200) {
      var dataObj = JSON.parse(body).data;
      res.render('results',{ results: dataObj});
      // eventually, render results page instead of send
    }
  });
});








// router.post('/', function(req, res) {
//     // TODO: add to database
//     db.pokemon.create({
//     	name: req.body.name
//     }).then(function(){
//     	res.redirect('/pokemon');
//     });
// });


//delete favorites
module.exports = router;




