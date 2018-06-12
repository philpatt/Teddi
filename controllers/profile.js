//this will be used to route to the profile page
require('dotenv').config();
var express = require('express');
var db = require('../models');
var router = express.Router();
var isLoggedIn = require('../middleware/isloggedin');


// YOU ARE HERE: /profile/
//allows users indiviual park info to be accessed
router.get('/profile', isLoggedIn, function (req, res) {
	db.user.findOne({
		where: { id: req.user.id },
		include: [db.park]
	}).then(function (user) {
		res.render('user/profile', { user: user });
	}).catch(function (err) {
		console.log('my error is', err);
	});
});








module.exports = router;

