var express = require('express');
var router = express.Router();
var Stadium = require('../models/stadium-schema');
var Story = require('../models/story-schema');
var Slider = require('../helpers/slider');
var Recommand = require('../helpers/recommand');
var middlewares = require('../middlewares/middlewares');

var SPORTS = ['Baseball', 'Football', 'Basketball', 'Hockey'];

router.get('/', middlewares.basic, middlewares.loadStadium, function(req, res) {
  var stadiums = req.stadiums;
  req.renderValues.slider = Slider(stadiums);
  req.renderValues.navTitle = 'Stadiums';
  req.renderValues.stadiumCount = stadiums.length;
  res.render('index', req.renderValues);
});

router.get('/:sport', middlewares.basic, middlewares.loadStadium, middlewares.checkSport, function(req, res) {
  if (req.leagues.length == 1) {
    res.redirect(`/stadium/${req.params.sport}/${leagues[0]}`);
  } else {
    var stadiums = req.stadiums;
    var sportStadiums = [];
    stadiums.forEach(function(stadium) {
      if (stadium.sport.indexOf(req.params.sport) > -1) {
        sportStadiums.push(stadium);
      }
    });
    req.renderValues.slider = Slider(sportStadiums);
    req.renderValues.navTitle = req.params.sport;
    req.renderValues.selectedSport = req.params.sport;
    req.renderValues.leagues = req.leagues;
    req.renderValues.stadiumCount = sportStadiums.length;
    res.render('index', req.renderValues);
  }
});

router.get('/:sport/:league', middlewares.basic, middlewares.loadStadium, middlewares.checkSport, middlewares.checkLeague, function(req, res) {
  var stadiums = req.stadiums;
  var leagueStadiums = req.leagueStadiums;
  req.renderValues.slider = Slider(leagueStadiums);
  req.renderValues.navTitle = req.params.league;
  req.renderValues.selectedSport = req.params.sport;
  req.renderValues.leagues = req.leagues;
  req.renderValues.selectedLeague = req.params.league;
  req.renderValues.sideNavStadiums = leagueStadiums;
  req.renderValues.stadiumCount = leagueStadiums.length;
  res.render('index', req.renderValues);
});

router.get('/:sport/:league/:stadium', middlewares.basic, middlewares.loadStadium, middlewares.checkSport, middlewares.checkLeague, middlewares.checkStadium, function(req, res) {
  var stadiums = req.stadiums;
  var leagueStadiums = req.leagueStadiums;
  req.renderValues.selectedSport = req.params.sport;
  req.renderValues.leagues = req.leagues;
  req.renderValues.selectedLeague = req.params.league;
  req.renderValues.sideNavStadiums = leagueStadiums;

  var stadium = req.stadium;
  req.renderValues.handledDetail = stadium.handleDetail(4);
  req.renderValues.stadium = stadium;
  req.renderValues.navTitle = stadium.name;
  Story.find({stadium: stadium._id}).populate('author').exec(function(err, stories) {
    if (err) throw err;
    else {
      var handledStories = [];
      stories.forEach(function(story) {
        handledStories.push(story.handleStory())
      });
      req.renderValues.stories = handledStories;
      var errors = req.flash('error');
      if (errors.length > 0) req.renderValues.errors = errors[0];
      req.renderValues.recommandation = Recommand(stadium, stadiums);
      res.render('stadium', req.renderValues);
    }
  });
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
        author: req.user._id,
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

module.exports = router;
