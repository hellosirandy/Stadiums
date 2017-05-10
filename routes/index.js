var express = require('express');
var router = express.Router();
var RouteBasics = require('../middlewares/route-basics');

router.get('/', function (req, res, next) {
  res.redirect('/stadium');
});

router.get('/signout', function (req, res) {
  req.logout();
  res.redirect(req.session.current_url);
});

module.exports = router;
