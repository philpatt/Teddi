// define all requires/modules/packages

require('dotenv').config();
var bodyParser = require('body-parser');
var express = require('express');
var request = require('request');
var ejsLayouts = require('express-ejs-layouts');
var flash = require('connect-flash');
var isLoggedIn = require('./middleware/isloggedin')
var passport = require('./config/passportConfig');
var session = require('express-session');
var app = express ();

//define middleware

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(ejsLayouts);
app.use(session({
	secret:'abc123',
	resave: false,
	saveUninitialized: true
}));
app.use(express.static(__dirname + '/public'));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next){
	res.locals.currentUser = req.user;
	res.locals.alerts = req.flash();
	next();
});

//routes
// app.get('/', function(req, res){
// 	// res.render('home');
//   var npsUrl = 'https://developer.nps.gov/api/v1/parks?limit=3&start=1&q=colorado&api_key=geQVFH3lljstuyw8nGrQ9WjKYUQT5JibCVkWK4g4';
//   request(npsUrl, function(error, response, body) {
//     var parks = JSON.parse(body).results;
//     res.render('home', { results: parks});
//   });
// });

app.get('/', function(req,res){
	request('https://developer.nps.gov/api/v1/parks?limit=3&start=1&q=colorado&api_key=geQVFH3lljstuyw8nGrQ9WjKYUQT5JibCVkWK4g4', function(error, response, body){
		if(!error && response.statusCode == 200){
		res.send(body);
		}
	// });
	// var q = {
	// s: 'colorado',
	// apikey: process.env.API_KEY
	// }

	// request({
	// 	url: 'https://developer.nps.gov/api/v1/parks/', 
	// 	q: q
	// }, function(error, response, body){
	// 	if(!error && response.statusCode == 200){
	// 		var dataObj = JSON.parse(body);
	// 		res.render('home',{results:dataObj.Search});
	// 	}
	});
});






app.get('/profile', isLoggedIn, function(req, res){
	res.render('profile');
});

//define controllers
app.use('/auth', require('./controllers/auth'));

app.listen(process.env.PORT || 3000);