var express = require('express');
var passport = require('passport');
var router = express.Router();

router.get('/facebook', passport.authenticate('facebook', {scope: ['public_profile','email']}));

router.get('/facebook/callback', passport.authenticate('facebook', {failureRedirect: '/' }), function(req, res) {
  console.log('auth');
  console.log(req.user);
  res.redirect(req.get('referer'));
});

module.exports = router;
