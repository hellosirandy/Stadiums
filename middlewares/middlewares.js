var LEAGUES = {
  Baseball: ['MLB', 'NPB', 'CPBL'],
  Football: ['NFL', 'Premier League', 'La Liga', 'Bundesliga', 'Serie A'],
  Basketball: ['NBA'],
  Hockey: ['NHL']
}

function basic(req, res, next) {
  req.session.current_url = req.originalUrl;
  req.renderValues = {
    title: 'Stadiums',
    user: req.user,
    sideNav: true
  }
  return next();
}

function loadStadium(req, res, next) {
  var Stadium = require('../models/stadium-schema');
  Stadium.find().sort({name: 1}).exec(function(err, stadiums) {
    req.stadiums = stadiums;
    if (req.renderValues) {
      req.renderValues.allStadiums = JSON.stringify(generateSearchData(stadiums));
    } else {
      req.renderValues = {
        title: 'Stadiums',
        allStadiums: JSON.stringify(generateSearchData(stadiums))
      }
    }
    return next();
  });
}

function checkSport(req, res, next) {
  if (req.params.sport in LEAGUES) {
    leagues = LEAGUES[req.params.sport];
    req.leagues = leagues;
    return next();
  } else {
    res.redirect('/stadium');
  }
}

function checkLeague(req, res, next) {
  if (req.leagues.indexOf(req.params.league) > -1) {
    var leagueStadiums = [];
    req.stadiums.forEach(function(stadium) {
      if (stadium.sport.indexOf(req.params.sport) > -1 && stadium.league.indexOf(req.params.league) > -1) {
        leagueStadiums.push(stadium);
      }
    });
    req.leagueStadiums = leagueStadiums;
    return next();
  } else {
    res.redirect(`/stadium/${req.params.sport}`);
  }
}

function checkStadium(req, res, next) {
  var stadium = req.leagueStadiums.filter(function( obj ) {
    return obj._id == req.params.stadium;
  })[0];
  if (stadium) {
    req.stadium = stadium;
    return next();
  } else {
    res.redirect(`/stadium/${req.params.sport}`);
  }
}

module.exports = {
  basic: basic,
  loadStadium: loadStadium,
  checkSport: checkSport,
  checkLeague: checkLeague,
  checkStadium: checkStadium
};

function generateSearchData(stadiums) {
  var allStadiums = [];
  stadiums.forEach(function(stadium) {
    allStadiums.push({
      url: `/stadium/${stadium.sport[0]}/${stadium.league[0]}/${stadium._id}`,
      name: stadium.name
    });
  });
  return allStadiums;
}
