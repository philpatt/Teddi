// define all requires/modules/packages
require('dotenv').config();
var bodyParser = require('body-parser');
var express = require('express');
var request = require('request');
var ejsLayouts = require('express-ejs-layouts');
var flash = require('connect-flash');
var isLoggedIn = require('./middleware/isloggedin');
var passport = require('./config/passportConfig');
var session = require('express-session');
var app = express ();

//define middleware
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(ejsLayouts);
app.use(session({
	secret: process.env.SESSION_SECRET,
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

app.get('/', function(req,res){
	res.render('home');
	//add suggested parks 
});

//define controllers
app.use('/userAuth', require('./controllers/auth'));
app.use('/userProf', require('./controllers/profile'));
app.use('/userResults', require('./controllers/results'));
// app.use('/userSearch', require('./controllers/search'));
app.use('/userShow', require('./controllers/show'));







app.listen(process.env.PORT || 3000);














