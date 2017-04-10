var express = require('express');
var router = express.Router();
var RouteBasics = require('../middlewares/route-basics');

router.get('/', RouteBasics, function(req, res, next) {
  res.redirect('/stadium')
});

module.exports = router;
