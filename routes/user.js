var express = require('express');
var router = express.Router();
var RouteBasics = require('../middlewares/route-basics');
var csrf = require('csurf');
var passport = require('passport');
var LoadStadium = require('../middlewares/load-stadium');

var csrfProtection = csrf();
router.use(csrfProtection);

router.get('/signin', LoadStadium, function (req, res) {
  req.renderValues.csrfToken = req.csrfToken();
  var messages = req.flash('error');
  req.renderValues.messages = messages;
  req.renderValues.hasError = messages.length > 0;
  res.render('user/signin', req.renderValues);
});

router.post('/signin', passport.authenticate('local.signin', {failureRedirect: '/user/login', failureFlash: true }),
  function(req, res, next) {
    req.logIn(req.user, function(err) {
      if (err) throw err;
      res.redirect(req.session.current_url);
  });
});

router.get('/signup', LoadStadium, function(req, res) {
  req.renderValues.csrfToken = req.csrfToken();
  var messages = req.flash('error');
  req.renderValues.messages = messages;
  req.renderValues.hasError = messages.length > 0;
  res.render('user/signup', req.renderValues);
});

router.post('/signup', passport.authenticate('local.signup', {failureRedirect: '/user/login', failureFlash: true }),
  function(req, res, next) {
    req.logIn(req.user, function(err) {
      if (err) throw err;
      res.redirect(req.session.current_url);
  });
});

module.exports = router;
