module.exports = function(sport) {
  var leagues = [];
  if (sport == 'Baseball') leagues = ['MLB'];
  else if (sport == 'Football') leagues = ['NFL'];
  else if (sport == 'Basketball') leagues = ['NBA'];
  else if (sport == 'Hockey') leagues = ['NHL'];
  return leagues;
};