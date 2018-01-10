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
	successRedirect: '/userProf/profile', 
	successFlash: 'Login Successful!',
	failureRedirect: '/userAuth/login',
	failureFlash : 'Invalid Credentials'
}));
//get sign up form
router.get('/signup', function(req, res, next){
	res.render('auth/signup');
});

// post signup info on form
router.post('/signup', function(req, res, next){
	console.log('req.body is', req.body.email);
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
				successRedirect: '/userProf/profile',
				successFlash: 'successfuly logged in'
			})(req, res, next);
		}
		else{
			//badnews you tried to sign up when you should have logged in
			req.flash('error', 'email already exists');
			res.redirect('/userAuth/login');
		}
	}).catch(function(err){
		req.flash('error', error.message)
		res.redirect('/userAuth/signup');
	});
});

// logout
router.get('/logout', function(req, res){
	req.logout();
	req.flash('success', 'successfuly logged out');
	res.redirect('/userAuth/login');
});




















module.exports = router;