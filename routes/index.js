var express = require('express');
var router = express.Router();
var RouteBasics = require('../middlewares/route-basics');

router.get('/', RouteBasics, function(req, res, next) {
  res.redirect('/stadium')
});

router.get('/signout', function(req, res) {
  req.logout();
  var prev = req.flash('previousPath');
  res.redirect(prev[prev.length - 1]);
});

module.exports = router;
