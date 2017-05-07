function RouteBasics (req, res, next) {
  var Stadium = require('../models/stadium-schema');
  Stadium.find().sort({name: 1}).exec(function(err, stadiums) {
    req.flash('back', req.originalUrl);
    req.stadiums = stadiums
    req.renderValues = {
      title: 'Stadiums',
      user: req.user,
      allStadiums: JSON.stringify(GenerateSearchData(stadiums))
    }
    return next();
  });
}

function GenerateSearchData(stadiums) {
  var allStadiums = [];
  for (var i = 0; i < stadiums.length; i++) {
    allStadiums[i] = {
      url: `/stadium/${stadiums[i].sport[0]}/${stadiums[i].league[0]}/${stadiums[i]._id}`,
      name: stadiums[i].name
    }
  }
  return allStadiums;
}

module.exports = RouteBasics;
