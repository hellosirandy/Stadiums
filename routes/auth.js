var express = require('express');
var passport = require('passport');
var router = express.Router();

router.get('/facebook', passport.authenticate('facebook', {scope: ['public_profile','email']}));

router.get('/facebook/callback', passport.authenticate('facebook', {failureRedirect: '/' }), function(req, res) {
  var prev = req.flash('previousPath');
  res.redirect(prev[prev.length - 1]);
});

module.exports = router;
