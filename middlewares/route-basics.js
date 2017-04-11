function RouteBasics (req, res, next) {
  req.flash('previousPath', req.originalUrl)
  req.renderValues = {
    title: 'Stadiums',
    user: req.user,
  }
  return next();
}

module.exports = RouteBasics;
