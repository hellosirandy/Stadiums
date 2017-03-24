function RouteBasics (req, res, next) {
  req.renderValues = {
    title: 'Stadiums',
  }
  return next();
}

module.exports = RouteBasics;
