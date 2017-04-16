function RouteBasics (req, res, next) {
  req.flash('back', req.originalUrl);
  req.renderValues = {
    title: 'Stadiums',
    user: req.user,
  }
  return next();
}

module.exports = RouteBasics;
