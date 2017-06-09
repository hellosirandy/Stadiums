

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
        allStadiums: JSON.stringify(generateSearchData(stadiums)),
      }
    }
    return next();
  });
}

module.exports = {
  basic: basic,
  loadStadium: loadStadium,
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
