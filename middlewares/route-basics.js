function RouteBasics (req, res, next) {
  req.renderValues = {
    title: 'Stadiums',
    user: req.user,
  }
  return next();
}

module.exports = RouteBasics;
