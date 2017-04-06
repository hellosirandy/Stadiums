var express = require('express');
var router = express.Router();
var RouteBasics = require('../middlewares/route-basics');
var Stadium = require('../models/stadium-schema');
var League = require('../configs/league');
var sportList = ['Baseball', 'Football', 'Basketball', 'Hockey'];
var dateHandler = require('../helpers/date');

router.get('/', RouteBasics, function(req, res, next) {
  Stadium.find(function(err, stadiums) {
    if (err) res.redirect('/');
    else {
      var n = 5;
      if (stadiums.length < n) n = stadiums.length;
      req.renderValues.stadiumSlider = GenSlider(n, stadiums);
      req.renderValues.navTitle = 'Stadiums';
      req.renderValues.stadiumCount = stadiums.length;
      res.render('index', req.renderValues);
    }
  });

});

router.get('/:sport', RouteBasics, function(req, res) {
  if (sportList.indexOf(req.params.sport) >= 0) {
    Stadium.find({sport: req.params.sport}, function(err, stadiums) {
      if (err) res.redirect('/');
      else {
        leagues = League(req.params.sport);
        if (leagues.length == 1) {
          res.redirect(`/${req.params.sport}/${leagues[0]}`);
        }
        else {
          var n = 5;
          if (stadiums.length < n) n = stadiums.length;
          req.renderValues.stadiumSlider = GenSlider(n, stadiums);
          req.renderValues.navTitle = req.params.sport;
          req.renderValues.selectedSport = req.params.sport;
          req.renderValues.leagues = leagues;
          req.renderValues.stadiumCount = stadiums.length;
          res.render('index', req.renderValues);
        }
      }
    });
  }
  else res.redirect('/');
});

router.get('/:sport/:league', RouteBasics, function(req, res) {
  if (sportList.indexOf(req.params.sport) >= 0) {
    Stadium.find({league: req.params.league}).sort({name: 1}).exec(function(err, stadiums) {
      if (stadiums.length > 0) {
        var n = 5;
        if (stadiums.length < n) n = stadiums.length;
        req.renderValues.stadiumSlider = GenSlider(n, stadiums);
        req.renderValues.navTitle = req.params.league;
        req.renderValues.selectedSport = req.params.sport;
        req.renderValues.leagues = League(req.params.sport);
        req.renderValues.selectedLeague = req.params.league;
        req.renderValues.stadiums = stadiums;
        req.renderValues.stadiumCount = stadiums.length;
        res.render('index', req.renderValues);
      }
      else res.redirect(`/${req.params.sport}`);
    });
  }
  else res.redirect('/');
});

router.get('/:sport/:league/:stadium', RouteBasics, function(req, res) {
  if (sportList.indexOf(req.params.sport) >= 0) {
    Stadium.find({league: req.params.league}).sort({name: 1}).exec(function(err, stadiums) {
      if (stadiums.length > 0) {
        req.renderValues.selectedSport = req.params.sport;
        req.renderValues.leagues = League(req.params.sport);
        req.renderValues.selectedLeague = req.params.league;
        req.renderValues.stadiums = stadiums;

        var stadium = stadiums.filter(function( obj ) {
          return obj._id == req.params.stadium;
        })[0];
        if (stadium) {
          stadium.handledDetail = {}
          if (stadium.detail.opened) stadium.detail.handledOpened = dateHandler(stadium.detail.opened);
          if (stadium.detail.capacity) stadium.detail.handledCapacity = stadium.detail.capacity.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          if (stadium.detail.images) {
            stadium.detail.handledImages = [];
            chunkSize = 4;
            for (var i = 0; i < stadium.detail.images.length; i += chunkSize) {
              stadium.detail.handledImages.push(stadium.detail.images.slice(i, i + chunkSize));
            }
          }
          req.renderValues.stadium = stadium;
          req.renderValues.navTitle = stadium.name;
          req.renderValues.stadiumCount = stadiums.length;
          res.render('stadium/stadium', req.renderValues);
        }
        else res.redirect(`/${req.params.sport}`);
      }
      else res.redirect(`/${req.params.sport}`);
    });
    // Stadium.find({league: req.params.league}, function(err, stadiums) {
    //
    // });
  }
  else res.redirect('/');
});

function GetRandomNums(n, s) {
  var arr = [];
  while (arr.length < n) {
    var num = Math.floor((Math.random() * s));
    if(arr.indexOf(num) > -1) continue;
    arr[arr.length] = num;
  }
  return arr;
}

function GenSlider(n, stadiums) {
  var randNums = GetRandomNums(n, stadiums.length);
  var stadiumSlider = [];
  var align = ['center-align', 'left-align', 'right-align']
  for (i = 0; i < n; i++) {
    var stadium = stadiums[randNums[i]]
    var slide = {
      name: stadium.name,
      location: stadium.detail.location,
      league: stadium.league.join(', '),
      image: stadium.detail.images[0],
      href: `/${stadium.sport[0]}/${stadium.league[0]}/${stadium._id}`,
      align: align[i%3]
    }
    stadiumSlider[i] = slide;
  }
  return stadiumSlider;
}

module.exports = router;
