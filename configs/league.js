module.exports = function(sport) {
  var leagues = [];
  if (sport == 'Baseball') leagues = ['MLB', 'NPB'];
  else if (sport == 'Football') leagues = ['NFL', 'Premier League'];
  else if (sport == 'Basketball') leagues = ['NBA'];
  else if (sport == 'Hockey') leagues = ['NHL'];
  return leagues;
};
