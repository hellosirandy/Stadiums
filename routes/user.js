var express = require('express');
var router = express.Router();
var RouteBasics = require('../middlewares/route-basics');
var csrf = require('csurf');

var csrfProtection = csrf();
router.use(csrfProtection);

router.get('/signin', RouteBasics, function (req, res) {
  req.renderValues.csrfToken = req.csrfToken();
  res.render('user/signin', req.renderValues);
});

router.post('/signin', function(req, res) {
  res.redirect('/');
});

router.get('/signup', RouteBasics, function(req, res) {
  req.renderValues.csrfToken = req.csrfToken();
  res.render('user/signup', req.renderValues);
});

router.post('/signup', passport.authenticate('local.signup', {
  successRedirect: '/',
  failureRedirect: '/user/signup',
  failureFlash: true
}));

module.exports = router;
