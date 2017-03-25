module.exports = function(inputStadium) {
  var Stadium = require('../models/stadium-schema');
  var mongoose = require('mongoose');
  mongoose.connect('localhost:27017/stadiums');

  Stadium.findOne({name: inputStadium.name}, function(err, stadium) {
    if (!stadium) stadium = new Stadium();
    stadium.name = inputStadium.name;
    stadium.sport = inputStadium.sport;
    stadium.league = inputStadium.league;
    stadium.detail = inputStadium.detail;
    stadium.save(function(err) {
      mongoose.disconnect();
    });
  });
};
