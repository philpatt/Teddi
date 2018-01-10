//this will be used to route to the profile page
require('dotenv').config();
var express = require('express');
var passport = require('../config/passportConfig');
var db = require('../models');
var router = express.Router();
var isLoggedIn = require('../middleware/isloggedin');
var request = require('request');








// show profile with favorited parks
router.get('/profile', isLoggedIn, function(req, res){
	res.render('user/profile');

});

router.post('/profile', function(req, res)){


}

// router.post('/', function(req, res) {
//     // TODO: add to database
//     db.pokemon.create({
//     	name: req.body.name
//     }).then(function(){
//     	res.redirect('/pokemon');
//     });
// });


//delete favorites






module.exports = router;

