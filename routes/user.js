var express = require('express');
var router = express.Router();
var middlewares = require('../middlewares/middlewares');
var csrf = require('csurf');
var passport = require('passport');
var User = require('../models/user-schema');

var csrfProtection = csrf();
router.use(csrfProtection);

router.get('/signin', middlewares.loadStadium, function (req, res) {
  req.renderValues.csrfToken = req.csrfToken();
  var messages = req.flash('error');
  req.renderValues.messages = messages;
  req.renderValues.hasError = messages.length > 0;
  res.render('user/signin', req.renderValues);
});

router.post('/signin', passport.authenticate('local.signin', {failureRedirect: '/user/signin', failureFlash: true }),
  function(req, res, next) {
    req.logIn(req.user, function(err) {
      if (err) throw err;
      res.redirect(req.session.current_url);
  });
});

router.get('/signup', middlewares.loadStadium, function(req, res) {
  req.renderValues.csrfToken = req.csrfToken();
  var messages = req.flash('error');
  req.renderValues.messages = messages;
  req.renderValues.hasError = messages.length > 0;
  res.render('user/signup', req.renderValues);
});

router.post('/signup', passport.authenticate('local.signup', {failureRedirect: '/user/signup', failureFlash: true }),
  function(req, res, next) {
    req.logIn(req.user, function(err) {
      if (err) throw err;
      res.redirect(req.session.current_url);
  });
});

router.get('/profile/:userid', middlewares.basic, middlewares.loadStadium, function(req, res) {
  req.renderValues.sideNav = false;
  User.findById(req.params.userid, function(err, user) {
    if (err) {
      throw err;
    } else {
      req.renderValues.profile = user;
      res.render('user/profile', req.renderValues);
    }
  });
});

module.exports = router;
