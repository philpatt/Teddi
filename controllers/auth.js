var express = require('express');
var passport = require('../config/passportConfig');
var db = require('../models');
var router = express.Router();



//get login form
router.get('/login', function(req, res){
	res.render('auth/login');
});

//post login info on form 
router.post('/login', passport.authenticate('local', {
	successRedirect: '/prof/profile', 
	successFlash: 'Login Successful!',
	failureRedirect: '/auth/login',
	failureFlash : 'Invalid Credentials'
}));
//get sign up form
router.get('/signup', function(req, res, next){
	res.render('auth/signup');
});

// post signup info on form
router.post('/signup', function(req, res, next){
	db.user.findOrCreate({
		where: { email: req.body.email },
		defaults: {
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			password: req.body.password
		}
	}).spread(function(user, wasCreated){
		if(wasCreated){
			//goodjob, you didnt make a duplicate!
			passport.authenticate('local', {
				successRedirect: '/prof/profile',
				successFlash: 'successfuly logged in'
			})(req, res, next);
		}
		else{
			//badnews you tried to sign up when you should have logged in
			req.flash('error', 'email already exists');
			res.redirect('/auth/login');
		}
	}).catch(function(err){
		req.flash('error', err.message)
		res.redirect('/auth/signup');
	});
});

// logout
router.get('/logout', function(req, res){
	req.logout();
	req.flash('success', 'successfuly logged out');
	res.redirect('/auth/login');
});




module.exports = router;