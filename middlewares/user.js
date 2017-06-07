function addToList(req, res, next) {
  var user = req.user;
  var list = user[req.originalUrl.split('/')[2]+'List'];
  var existed = false;
  list.forEach(function(ws) {
    if (ws._id.equals(req.params.stadiumid)) {
      existed = true;
    }
  });
  if (!existed) {
    list.push(req.params.stadiumid);
    user.save(function(err) {
      if (err) {
        throw err;
      } else {
        req.login(user, function(err) {
            if (err) {
              throw err;
            }
            return next();
        });
      }
    });
  } else {
    res.sendStatus(403);
  }
}

module.exports = {
  addToList: addToList
};
