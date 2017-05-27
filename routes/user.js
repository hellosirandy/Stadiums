var express = require('express');
var router = express.Router();
var middlewares = require('../middlewares/middlewares');
var csrf = require('csurf');
var passport = require('passport');
var User = require('../models/user-schema');
var Story = require('../models/story-schema');

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
      // temporarily generate collection list
      req.renderValues.wanted = req.stadiums[0];
      req.renderValues.wanted.cover = req.renderValues.wanted.detail.images[0];
      req.renderValues.wantedList = req.stadiums.slice(0, 5);
      req.renderValues.wantedList.forEach(function(wanted) {
        wanted.cover = wanted.detail.images[0];
        wanted.href = `/stadium/${wanted.sport[0]}/${wanted.league[0]}/${wanted._id}`;
      });

      req.renderValues.profile = user;
      Story.find({author: req.params.userid}).populate('author stadium').exec(function(err, stories) {
        if (err) {
          throw err;
        } else {
          var handledStories = [];
          stories.forEach(function(story) {
            var hs = story.handleStory();
            hs.stadium.href = hs.stadium.genHref();
            handledStories.push(hs);
          });
          req.renderValues.stories = handledStories;
          res.render('user/profile', req.renderValues);
        }
      });

    }
  });
});

module.exports = router;
