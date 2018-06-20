
require('dotenv').config();
var express = require('express');
var router = express.Router();
var request = require('request');
var rp = require('request-promise')
var cheerio = require('cheerio');

// show page that is results of search
router.get('/', function(req, res){
	var results;
	var images = [];
	var parkList = []
	var options1 = {
		uri: 'https://developer.nps.gov/api/v1/parks',
		qs: {
			start: 1,
			q: req.query.q || 'Rainier',
			api_key: process.env.API_KEY,
			fields: 'stateCode',
			sort: 'name'
		},
		json: true // Automatically parses the JSON string in the response
	};

	rp(options1)
		.then(function (parks) {
			results = parks.data
			console.log(results.length)
			results.map( park => {
				parkList.push(park.fullName.split(' ').join('_'))
			})
			return (parkList)
		})
		.then(function(data){
			console.log('data',data)
			data.forEach(searchItem => {
				console.log(searchItem)
				request('https://en.wikipedia.org/wiki/' + searchItem, function (error, response, data) {
					var $ = cheerio.load(response);
					var imageSrc = $('#mw-content-text > div > table > tbody > tr > td > a > img').attr('src');
					console.log(imageSrc)
					images.push(imageUrl = 'https:' + imageSrc)
					res.render('results', {results, images})

				})
			})
			// res.render('results',{results})
		})
		.then(function (data) {
			console.log('final', data)
		})
		.catch(function (err) {
			// API call failed...
			console.log(err)
		});
	
});
	






module.exports = router;




