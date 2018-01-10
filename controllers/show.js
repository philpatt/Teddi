
require('dotenv').config();
var express = require('express');
var passport = require('../config/passportConfig');
var db = require('../models');
var router = express.Router();
var isLoggedIn = require('../middleware/isloggedin');
var request = require('request');


// show individual park in favorite list

//get SHOW page
router.get('/show', function(req, res){
	res.render('user/show');

});


module.exports = router;
