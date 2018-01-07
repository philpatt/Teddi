// define all requires/modules/packages

// require('dotenv').config();
var bodyParser = require('body-parser');
var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var flash = require('connect-flash');
var isLoggedIn = require('./middleware/isloggedin')
var passport = require('./config/passportConfig');
var session = require('express-session');
var app = express ();

//define middleware

app.set('view engine', 'ejs');
app.set(bodyParser.urlencoded({ extended: false}));
app.use(ejsLayouts);
app.use(session({
	secret:'abc123',
	resave: false,
	saveUninitialized: true
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next){
	res.locals.currentUser = req.user;
	res.locals.alerts = req.flash();
	next();
});

//routes
app.get('/', function(req, res){
	res.render('home');
});

app.get('/profile', isLoggedIn, function(req, res){
	res.render('profile');
});

//define controllers
app.use('/auth', require('./controllers/auth'));

app.listen(process.env.PORT || 3000);