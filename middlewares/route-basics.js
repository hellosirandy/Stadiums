function RouteBasics (req, res, next) {
  var Stadium = require('../models/stadium-schema');
  Stadium.find().sort({name: 1}).exec(function(err, stadiums) {
    req.session.current_url = req.originalUrl;
    req.renderValues = {
      title: 'Stadiums',
      user: req.user,
    }
    return next();
  });
}

module.exports = RouteBasics;
