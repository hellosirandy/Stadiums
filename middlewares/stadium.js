var LEAGUES = {
  Baseball: ['MLB', 'NPB', 'CPBL'],
  Football: ['NFL', 'Premier League', 'La Liga', 'Bundesliga', 'Serie A'],
  Basketball: ['NBA'],
  Hockey: ['NHL']
}

function root(req, res, next) {
  req.renderValues.breadcrumb = [{name: 'Stadiums', href: '/stadium'}];
  return next();
}

function checkSport(req, res, next) {
  if (req.params.sport in LEAGUES) {
    leagues = LEAGUES[req.params.sport];
    req.leagues = leagues;
    req.renderValues.breadcrumb.push({name: req.params.sport, href: `/stadium/${req.params.sport}`});
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
    req.renderValues.breadcrumb.push({
      name: req.params.league, href: `/stadium/${req.params.sport}/${req.params.league}`
    });
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
    req.renderValues.breadcrumb.push({
      name: stadium.name,
      href: `/stadium/${req.params.sport}/${req.params.league}/${req.params.stadium}`
    });
    return next();
  } else {
    res.redirect(`/stadium/${req.params.sport}`);
  }
}

module.exports = {
  root: root,
  checkSport: checkSport,
  checkLeague: checkLeague,
  checkStadium: checkStadium
};
