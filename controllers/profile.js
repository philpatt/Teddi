//this will be used to route to the profile page
require('dotenv').config();
var express = require('express');
var passport = require('../config/passportConfig');
var db = require('../models');
var router = express.Router();
var isLoggedIn = require('../middleware/isloggedin');
var request = require('request');

// YOU ARE HERE: /profile/
// show profile with favorited parks
router.get('/profile', isLoggedIn, function(req, res){
	res.render('user/profile');

});








module.exports = router;

