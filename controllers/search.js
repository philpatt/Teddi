var express = require('express');
var passport = require('../config/passportConfig');
var db = require('../models');
var router = express.Router();

//load DOM first

//listen for submit and call search function
// $(function() {
//   $('#search-form').on('submit', search);
// });


//this search function finds all park info based on userInput
// and returns a results page

// function search(event){
// 	event.preventDefault();
// 	clearSearchResults();
// 	var userInput = $('#input').val() || 'yellowstone';
// 	var qs = {
// 		start: 1,
// 		q: userInput,
// 		api_key: process.env.API_KEY,
// 		sort: '-name'
// 	}
// 	request({
// 		url: 'https://developer.nps.gov/api/v1/parks', 
// 		qs: qs
// 	}, function(error, response, body){
// 		if(!error && response.statusCode == 200){
// 			var dataObj = JSON.parse(body);
// 			res.render('results', {results:dataObj.data});
// 		}
// 	});
// };

// POST - receive the name of the park and add it to the database
module.exports = router;

