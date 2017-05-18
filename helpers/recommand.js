function genRecommandation(target, stadiums) {
  var recommandation = [];
  stadiums.forEach(function(stadium) {
    var score = 0;
    if (target.name != stadium.name) {
      if (stadium.detail.location == target.detail.location) score += 10;
      if (stadium.detail.architect == target.detail.architect) score += 3;
      if (intersection(stadium.league, target.league).length > 1) score += 4;
      else if (intersection(stadium.league, target.league).length > 0) score += 8;
      else if (intersection(stadium.sport, target.sport).length > 1) score += 3;
      else if (intersection(stadium.sport, target.sport).length > 0) score += 7;
    }
    stadium.score = score;
  });
  stadiums.sort(function(a, b) {
    return a.score - b.score;
  });
  stadiums.reverse();
  stadiums.slice(0, 4).forEach(function(stadium) {
    recommandation.push({
      name: stadium.name,
      href: `/stadium/${stadium.sport[0]}/${stadium.league[0].replace(' ', '%20')}/${stadium._id}`,
      image: stadium.detail.images[0],
    });
  });
  return recommandation;
}

function intersection(a, b) {
  is = [];
  x = 0;
  for (var i=0; i < a.length; ++i)
    if (b.indexOf(a[i]) != -1)
        is[x++] = a[i];
  return is;
}

module.exports = genRecommandation;
