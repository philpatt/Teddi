
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
					var $ = cheerio.load(data);
					var imageSrc = $('#mw-content-text > div > table > tbody > tr > td > a > img').attr('src');
					console.log(imageSrc)
					return imageUrl = 'https:' + imageSrc;

				})
			})
			res.render('results',{results})
		})
		.then(function (data) {
			console.log('final', data)
		})
		.catch(function (err) {
			// API call failed...
			console.log(err)
		});
		// console.log(parkList)
	
	// for (var i = 0; i < parkList.length; i++) {
	// 	console.log('hello',parkList[i])
	// 	// var wikiSearch = dataObj[i].fullName.split(' ').join('_');
	// 	// console.log(wikiSearch)
	// 	request('https://en.wikipedia.org/wiki/' + wikiSearch, function (error, response, data) {
	// 	// 	var $ = cheerio.load(data);
	// 	// 	var imageSrc = $('#mw-content-text > div > table > tbody > tr > td > a > img').attr('src');
	// 	// 	imageUrl = 'https:' + imageSrc
	// 	// 	console.log(typeof imageUrl)
	// 	// 	images.push(imageUrl)
	// 	})								
	// }
	// console.log('images:',images)
	
});
	
	// var qs = {
	// 	start: 1,
	// 	q: req.query.q || 'Rainier',
	// 	api_key: process.env.API_KEY,
	// 	fields: 'stateCode',
	// 	sort: 'name'
	// }
	// request({
	//     url: 'https://developer.nps.gov/api/v1/parks',
	//     qs: qs
	//   }, function (error, response, body) {
	//   	if (!error && response.statusCode == 200 ){
	// 		var images = [];
	// 		var dataObj = JSON.parse(body).data;
	// // working on scraping wikipedia for images
	// 		console.log(dataObj)

	// 		// for (var i = 0; i < dataObj.length; i++) {
	// 		// 	var wikiSearch = dataObj[i].fullName.split(' ').join('_');
	// 		// 	console.log(wikiSearch)
	// 		// 	request('https://en.wikipedia.org/wiki/' + wikiSearch, function (error, response, data) {
	// 		// 		var $ = cheerio.load(data);
	// 		// 		var imageSrc = $('#mw-content-text > div > table > tbody > tr > td > a > img').attr('src');
	// 		// 		imageUrl = 'https:' + imageSrc
	// 		// 		console.log(typeof imageUrl)
	// 		// 		images.push(imageUrl)
	// 		// 	})								
	// 		// }
	// 		// console.log('images:',images)
	// 	}
	// })
		





module.exports = router;




