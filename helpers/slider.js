function GetRandomNums(n, s) {
  var arr = [];
  while (arr.length < n) {
    var num = Math.floor((Math.random() * s));
    if(arr.indexOf(num) > -1) continue;
    arr[arr.length] = num;
  }
  return arr;
}

function GenSlider(n, stadiums) {
  var randNums = GetRandomNums(n, stadiums.length);
  var stadiumSlider = [];
  var align = ['center-align', 'left-align', 'right-align'];
  for (i = 0; i < n; i++) {
    var stadium = stadiums[randNums[i]]
    var slide = {
      name: stadium.name,
      location: stadium.detail.location,
      league: stadium.league.join(', '),
      image: stadium.detail.images[0],
      href: `/stadium/${stadium.sport[0]}/${stadium.league[0].replace(' ', '%20')}/${stadium._id}`,
      align: align[i%3]
    }
    stadiumSlider[i] = slide;
  }
  return stadiumSlider;
}

module.exports = GenSlider;
