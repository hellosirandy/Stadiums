var express = require('express');
var passport = require('passport');
var router = express.Router();

router.get('/facebook', passport.authenticate('facebook', {scope: ['public_profile','email']}));

router.get('/facebook/callback', passport.authenticate('facebook', {successRedirect: '/auth/login', failureRedirect: '/' }), function(req, res) {
  res.redirect('/');
});

router.get('/login', function(req, res) {
  res.redirect(req.get('referer'));
});

module.exports = router;
