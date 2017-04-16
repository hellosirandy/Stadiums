var express = require('express');
var router = express.Router();
var RouteBasics = require('../middlewares/route-basics');
var Stadium = require('../models/stadium-schema');
var League = require('../configs/league');
var sportList = ['Baseball', 'Football', 'Basketball', 'Hockey'];
var dateHandler = require('../helpers/date');
var slideNum = 7;
var Story = require('../models/story-schema');

router.get('/', RouteBasics, function(req, res, next) {
  Stadium.find().sort({name: 1}).exec(function(err, stadiums) {
    if (err) res.redirect('/');
    else {
      var n = slideNum;
      if (stadiums.length < slideNum) n = stadiums.length;
      req.renderValues.stadiumSlider = GenSlider(n, stadiums);
      req.renderValues.navTitle = 'Stadiums';
      req.renderValues.stadiumCount = stadiums.length;
			var allStadiums = [];
//			for (var i = 0; i < stadiums.length; i++) {
//				allStadiums[i] = {
//					url: stadiums[i]._id,
//					name: stadiums[i].name
//				}
//			}
			req.renderValues.allStadiums = JSON.stringify(stadiums);
      res.render('index', req.renderValues);
    }
  });

});

router.get('/:sport', RouteBasics, function(req, res) {
  if (sportList.indexOf(req.params.sport) >= 0) {
    Stadium.find().sort({name: 1}).exec(function(err, stadiums) {
      if (err) res.redirect('/');
      else {
				var sportStadiums = []
				for (var i = 0; i < stadiums.length; i++) {
					if (stadiums[i].sport.indexOf(req.params.sport) > -1) {
						sportStadiums.push(stadiums[i]);
					}
				}
        leagues = League(req.params.sport);
        if (leagues.length == 1) {
          res.redirect(`/stadium/${req.params.sport}/${leagues[0]}`);
        }
        else {
          var n = slideNum;
          if (sportStadiums.length < slideNum) n = sportStadiums.length;
          req.renderValues.stadiumSlider = GenSlider(n, sportStadiums);
          req.renderValues.navTitle = req.params.sport;
          req.renderValues.selectedSport = req.params.sport;
          req.renderValues.leagues = leagues;
          req.renderValues.stadiumCount = sportStadiums.length;
					req.renderValues.allStadiums = JSON.stringify(stadiums);
          res.render('index', req.renderValues);
        }
      }
    });
  }
  else res.redirect('/stadium');
});

router.get('/:sport/:league', RouteBasics, function(req, res) {
  if (sportList.indexOf(req.params.sport) >= 0) {
    Stadium.find().sort({name: 1}).exec(function(err, stadiums) {
			if (err) res.redirect('/');
			else {
				var leagueStadiums = []
				for (var i = 0; i < stadiums.length; i++) {
					if (stadiums[i].sport.indexOf(req.params.sport) > -1 && stadiums[i].league.indexOf(req.params.league) > -1) {
						leagueStadiums.push(stadiums[i]);
					}
				}
				if (leagueStadiums.length > 0) {
					var n = slideNum;
					if (stadiums.length < slideNum) n = leagueStadiums.length;
					req.renderValues.stadiumSlider = GenSlider(n, leagueStadiums);
					req.renderValues.navTitle = req.params.league;
					req.renderValues.selectedSport = req.params.sport;
					req.renderValues.leagues = League(req.params.sport);
					req.renderValues.selectedLeague = req.params.league;
					req.renderValues.stadiums = leagueStadiums;
					req.renderValues.stadiumCount = leagueStadiums.length;
					req.renderValues.allStadiums = JSON.stringify(stadiums);
					res.render('index', req.renderValues);
				}
				else res.redirect(`/stadium/${req.params.sport}`);
			}
			
    });
  }
  else res.redirect('/stadium');
});

router.get('/:sport/:league/:stadium', RouteBasics, function(req, res) {
  if (sportList.indexOf(req.params.sport) >= 0) {
    Stadium.find().sort({name: 1}).exec(function(err, stadiums) {
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
				req.renderValues.allStadiums = JSON.stringify(stadiums);

        var stadium = leagueStadiums.filter(function( obj ) {
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
          Story.find({stadium: stadium._id}, function(err, stories) {
            if (err) throw err;
            else {
              var processedStories = stories;
              for (var i = 0; i < stories.length; i++) {
                var timeList = stories[i].create.toString().split(' ');
                var month = timeList[1];
                var date = timeList[2];
                var time = timeList[4].split(':').slice(0, 2);
                processedStories[i].processedCreate = time.join(':') + ' ' + month + ' ' + date;
              }
              req.renderValues.stories = processedStories;
              var errors = req.flash('error');
              if (errors.length > 0) req.renderValues.errors = errors[0];
              res.render('stadium/stadium', req.renderValues);
            }
          });

        }
        else res.redirect(`/stadium/${req.params.sport}`);
      }
      else res.redirect(`/stadium/${req.params.sport}`);
    });
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
      res.redirect(req.get('referer'));
    }
    else {
      var newStory = new Story({
        author: req.user,
        title: req.body.storyTitleInput,
        stadium: req.params.stadium,
        content: req.body.about
      });
      newStory.save(function(err) {
        if (err) throw err;
        else res.redirect(req.get('referer'));
      });
    }
  }
  else {
    res.redirect(req.get('referer'));
  }
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
      href: `/stadium/${stadium.sport[0]}/${stadium.league[0].replace(' ', '%20')}/${stadium._id}`,
      align: align[i%3]
    }
    stadiumSlider[i] = slide;
  }
  return stadiumSlider;
}

module.exports = router;
