var express = require('express');
var passport = require('passport');
var router = express.Router();

router.get('/facebook', passport.authenticate('facebook', {scope: ['public_profile','email']}));

router.get('/facebook/callback', passport.authenticate('facebook', {successRedirect: '/',failureRedirect: '/' }), function(req, res) {
  res.redirect('/');
});

module.exports = router;
