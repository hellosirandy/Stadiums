var express = require('express');
var router = express.Router();
var RouteBasics = require('../middlewares/route-basics');
var Stadium = require('../models/stadium-schema');
var League = require('../configs/league');
var sportList = ['Baseball', 'Football', 'Basketball', 'Hockey'];
var dateHandler = require('../helpers/date');

/* GET home page. */
router.get('/', RouteBasics, function(req, res, next) {
  res.render('index', req.renderValues);
});

router.get('/:sport', RouteBasics, function(req, res) {
  if (sportList.indexOf(req.params.sport) >= 0) {
    req.renderValues.selectedSport = req.params.sport;
    req.renderValues.leagues = League(req.params.sport);
    res.render('index', req.renderValues);
  }
  else res.redirect('/');
});

router.get('/:sport/:league', RouteBasics, function(req, res) {
  if (sportList.indexOf(req.params.sport) >= 0) {
    Stadium.find({league: req.params.league}, function(err, stadiums) {
      if (stadiums.length > 0) {
        req.renderValues.selectedSport = req.params.sport;
        req.renderValues.leagues = League(req.params.sport);
        req.renderValues.selectedLeague = req.params.league;
        req.renderValues.stadiums = stadiums;
        res.render('index', req.renderValues);
      }
      else res.redirect(`/${req.params.sport}`);
    });
  }
  else res.redirect('/');
});

router.get('/:sport/:league/:stadium', RouteBasics, function(req, res) {
  if (sportList.indexOf(req.params.sport) >= 0) {
    Stadium.find({league: req.params.league}, function(err, stadiums) {
      if (stadiums.length > 0) {
        req.renderValues.selectedSport = req.params.sport;
        req.renderValues.leagues = League(req.params.sport);
        req.renderValues.selectedLeague = req.params.league;
        req.renderValues.stadiums = stadiums;

        var stadium = stadiums.filter(function( obj ) {
          return obj._id == req.params.stadium;
        })[0];
        if (stadium) {
          if (stadium.detail.opened) stadium.detail.handledOpened = dateHandler(stadium.detail.opened);
          if (stadium.detail.capacity) stadium.detail.handledCapacity = stadium.detail.capacity.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          req.renderValues.stadium = stadium;
          res.render('stadium/stadium', req.renderValues);
        }
        else res.redirect(`/${req.params.sport}`);
      }
      else res.redirect(`/${req.params.sport}`);
    });
  }
  else res.redirect('/');
});

module.exports = router;
