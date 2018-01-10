//this will be used to route to the profile page
require('dotenv').config();
var express = require('express');
var passport = require('../config/passportConfig');
var db = require('../models');
var router = express.Router();
var isLoggedIn = require('../middleware/isloggedin');
var request = require('request');








// show page that is results of search
router.get('/results', function(req, res){
	res.render('results');
});



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
