function LoadStadium(req, res, next) {
  var Stadium = require('../models/stadium-schema');
  Stadium.find().sort({name: 1}).exec(function(err, stadiums) {
    req.stadiums = stadiums;
    if (req.renderValues) req.renderValues.allStadiums = JSON.stringify(GenerateSearchData(stadiums));
    else {
      req.renderValues = {
        allStadiums: JSON.stringify(GenerateSearchData(stadiums))
      }
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

module.exports = LoadStadium;
