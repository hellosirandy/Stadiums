var express = require('express');
var passport = require('passport');
var router = express.Router();

router.get('/facebook', passport.authenticate('facebook', {scope: ['public_profile','email']}));

router.get('/facebook/callback', passport.authenticate('facebook', {failureRedirect: '/' }), function(req, res, next) {
  req.logIn(req.user, function(err) {
    if (err) throw err;
    res.redirect(req.session.current_url);
  });
});

module.exports = router;
