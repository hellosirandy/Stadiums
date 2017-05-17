var Slider = require('../helpers/slider');
var slideNum = 7;
var sportList = ['Baseball', 'Football', 'Basketball', 'Hockey'];
var League = require('../configs/league');
function home(req, res, next) {
  var stadiums = req.stadiums;
  var n = slideNum;
  if (stadiums.length < slideNum) n = stadiums.length;
  req.renderValues.stadiumSlider = Slider(n, stadiums);
  req.renderValues.navTitle = 'Stadiums';
  req.renderValues.stadiumCount = stadiums.length;
  return next();
};

function sport(req, res, next) {
  if (sportList.indexOf(req.params.sport) >= 0) {
    var stadiums = req.stadiums;
    var sportStadiums = []
    stadiums.forEach(function(stadium) {
      if (stadium.sport.indexOf(req.params.sport) > -1) {
        sportStadiums.push(stadium);
      }
    });
    var leagues = League(req.params.sport);
    if (leagues.length == 1) {
      res.redirect(`/stadium/${req.params.sport}/${leagues[0]}`);
    }
    else {
      var n = slideNum;
      if (sportStadiums.length < slideNum) n = sportStadiums.length;
      req.renderValues.stadiumSlider = Slider(n, sportStadiums);
      req.renderValues.navTitle = req.params.sport;
      req.renderValues.selectedSport = req.params.sport;
      req.renderValues.leagues = leagues;
      req.renderValues.stadiumCount = sportStadiums.length;
      res.render('index', req.renderValues);
    }
  }
  else res.redirect('/stadium');
};

module.exports = {home: home, sport: sport};
