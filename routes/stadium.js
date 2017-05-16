var express = require('express');
var router = express.Router();
var RouteBasics = require('../middlewares/route-basics');
var Stadium = require('../models/stadium-schema');
var League = require('../configs/league');
var sportList = ['Baseball', 'Football', 'Basketball', 'Hockey'];
var slideNum = 7;
var Story = require('../models/story-schema');
var LoadStadium = require('../middlewares/load-stadium');
var Slider = require('../helpers/slider');
var StadiumMid = require('../middlewares/stadium');

router.get('/', RouteBasics, LoadStadium, StadiumMid.home, function(req, res, next) {
  res.render('index', req.renderValues);
});

router.get('/:sport', RouteBasics, LoadStadium, StadiumMid.sport, function(req, res) {

});

router.get('/:sport/:league', RouteBasics, LoadStadium, function(req, res) {
  if (sportList.indexOf(req.params.sport) >= 0) {
    var stadiums = req.stadiums;
    var leagueStadiums = []
    for (var i = 0; i < stadiums.length; i++) {
      if (stadiums[i].sport.indexOf(req.params.sport) > -1 && stadiums[i].league.indexOf(req.params.league) > -1) {
        leagueStadiums.push(stadiums[i]);
      }
    }
    if (leagueStadiums.length > 0) {
      var n = slideNum;
      if (leagueStadiums.length < slideNum) n = leagueStadiums.length;
      req.renderValues.stadiumSlider = Slider(n, leagueStadiums);
      req.renderValues.navTitle = req.params.league;
      req.renderValues.selectedSport = req.params.sport;
      req.renderValues.leagues = League(req.params.sport);
      req.renderValues.selectedLeague = req.params.league;
      req.renderValues.stadiums = leagueStadiums;
      req.renderValues.stadiumCount = leagueStadiums.length;
      res.render('index', req.renderValues);
    }
    else res.redirect(`/stadium/${req.params.sport}`);
  }
  else res.redirect('/stadium');
});

router.get('/:sport/:league/:stadium', RouteBasics, LoadStadium, function(req, res) {
  if (sportList.indexOf(req.params.sport) >= 0) {
    var stadiums = req.stadiums;
    if (stadiums.length > 0) {
      var leagueStadiums = []
      for (var i = 0; i < stadiums.length; i++) {
        if (stadiums[i].sport.indexOf(req.params.sport) > -1  && stadiums[i].league.indexOf(req.params.league) > -1) {
          leagueStadiums.push(stadiums[i]);
        }
      }
      req.renderValues.selectedSport = req.params.sport;
      req.renderValues.leagues = League(req.params.sport);
      req.renderValues.selectedLeague = req.params.league;
      req.renderValues.stadiums = leagueStadiums;

      var stadium = leagueStadiums.filter(function( obj ) {
        return obj._id == req.params.stadium;
      })[0];
      if (stadium) {
        req.renderValues.handledDetail = stadium.handleDetail(4);
        req.renderValues.stadium = stadium;
        req.renderValues.navTitle = stadium.name;
        Story.find({stadium: stadium._id}, function(err, stories) {
          if (err) throw err;
          else {
            var handledStories = [];
            stories.forEach(function(story) {
              handledStories.push(story.handleStory())
            });
            req.renderValues.stories = handledStories;
            var errors = req.flash('error');
            if (errors.length > 0) req.renderValues.errors = errors[0];
            req.renderValues.recommandation = GenRecommandation(stadium, stadiums);
            res.render('stadium', req.renderValues);
          }
        });

      }
      else res.redirect(`/stadium/${req.params.sport}`);
    }
    else res.redirect(`/stadium/${req.params.sport}`);
  }
  else res.redirect('/stadium');
});

router.post('/:sport/:league/:stadium', function(req, res) {
  if (req.isAuthenticated()) {
    req.checkBody('storyTitleInput', 'Please give it a title').notEmpty();
    var errors = req.validationErrors();
    if (errors) {
      var messages = [];
      if (errors) {
        errors.forEach(function(error) {
          messages.push(error.msg);
        });
      }
      req.flash('error', {'messages': messages});
      res.redirect(req.session.current_url);
    }
    else {
      var newStory = new Story({
        author: req.user,
        title: req.body.storyTitleInput,
        stadium: req.params.stadium,
        content: req.body.storyContent,
        evaluation: req.body.storyEvaluation,
      });
      newStory.save(function(err) {
        if (err) throw err;
        else res.redirect(req.session.current_url);;
      });
    }
  }
  else {
    res.redirect(req.session.current_url);;
  }
});

function GenRecommandation(target, stadiums) {
  var recommandation = [];
  stadiums.forEach(function(stadium) {
    var score = 0;
    if (target.name != stadium.name) {
      if (stadium.detail.location == target.detail.location) score += 10;
      if (stadium.detail.architect == target.detail.architect) score += 3;
      if (Intersection(stadium.league, target.league).length > 1) score += 4;
      else if (Intersection(stadium.league, target.league).length > 0) score += 8;
      else if (Intersection(stadium.sport, target.sport).length > 1) score += 3;
      else if (Intersection(stadium.sport, target.sport).length > 0) score += 7;
    }
    stadium.score = score;
  });
  stadiums.sort(function(a, b) {
    return a.score - b.score;
  });
  stadiums.reverse();
  stadiums.slice(0, 4).forEach(function(stadium) {
    recommandation.push({
      name: stadium.name,
      href: `/stadium/${stadium.sport[0]}/${stadium.league[0].replace(' ', '%20')}/${stadium._id}`,
      image: stadium.detail.images[0],
    });
  });
  return recommandation;
}

function Intersection(a, b) {
  intersection = [];
  x = 0;
  for (var i=0; i < a.length; ++i)
    if (b.indexOf(a[i]) != -1)
        intersection[x++] = a[i];
  return intersection;
}

module.exports = router;
