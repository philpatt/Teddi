
require('dotenv').config();
var express = require('express');
var passport = require('../config/passportConfig');
var db = require('../models');
var router = express.Router();
var isLoggedIn = require('../middleware/isloggedin');
var request = require('request');
var cheerio = require('cheerio');



// show page that is results of search
router.get('/', function(req, res){
	var qs ={
		start: 1,
		q: req.query.q || 'Rainier',
		api_key: process.env.API_KEY,
		fields: 'stateCode',
		sort: 'name'
	}
	request({
	    url: 'https://developer.nps.gov/api/v1/parks',
	    qs: qs
	  }, function (error, response, body) {
	  	if (!error && response.statusCode == 200 ){
			var images = [];
			var dataObj = JSON.parse(body).data;
			// for (var i = 0; i < dataObj.length; i++) {
			// 	var wikiSearch = dataObj[i].fullName.split(' ').join('_');
			// 	request('https://en.wikipedia.org/wiki/' + wikiSearch, function (error, response, data) {
			// 		var $ = cheerio.load(data);
			// 		var imageSrc = $('#mw-content-text > div > table > tbody > tr > td > a > img').attr('src');
			// 		imageUrl = 'https:' + imageSrc
			// 		// console.log(imageUrl)
			// 		images.push(imageUrl)
			// 	})								
			// }
			res.render('results', {results: dataObj })
		}
	})
		
});



module.exports = router;




