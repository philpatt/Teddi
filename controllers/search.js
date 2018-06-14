
require('dotenv').config();
var express = require('express');
var router = express.Router();
var request = require('request');



// show page that is results of search
router.get('/', function(req, res){
	var qs = {
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
	// working on scraping wikipedia for images
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




