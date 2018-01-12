
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

// router.post("/", isLoggedIn, function(req, res){
//     db.nationalpark.find({
//         where: {
//             name: req.body.name
//             }
//         }).then(function(info){
//             var latlong = info.Latlong;
//             var learning = latlong.split(":").splice(1);
//             var enoughAlready = learning[0].split(",")[0] + "," + learning[1];
//             var weatherUrl = "http://api.wunderground.com/api/" + weatherApi + "/forecast10day/q/" + enoughAlready + ".json";
//             request(weatherUrl, function(error, response, body){
//                 var weatherData = JSON.parse(body).forecast;
//                 weatherData.parkStuff = info;
//                 console.log(weatherData);
//                 res.render("parks/park", {weatherData: weatherData});
//             });
//     });
// });


// router.get('/show', isLoggedIn, function(req,res){
//   db.user.findOne({
//   	where: {id: req.user.id},
//     include: [db.park]
//   }).then(function(user){
//     res.render('user/show', { user: user});
//   }).catch(function(err){
//   	console.log('my error is', err);
//   });
// });

// router.get('/show', isLoggedIn, function(req, res){



// 	console.log('################ req.query.q is ',req.query.q)
// 	var qs ={
// 		start: 1,
// 		parkCode: req.query.parkCode,
// 		api_key: process.env.API_KEY
// 	}
// 	request({
// 	    url: 'https://developer.nps.gov/api/v1/alerts',
// 	    qs: qs
// 	  }, function (error, response, body) {
//   	console.log('body data is', body)
//     if (!error && response.statusCode == 200) {
//       var dataObj = JSON.parse(body).data;
//       console.log('this is my data', dataObj);
//       res.render('user/show',{ data: dataObj});
//     }
//   });
// });


module.exports = router;
