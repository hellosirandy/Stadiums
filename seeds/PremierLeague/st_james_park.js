var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'St James Park',
  sport: ['Football'],
  league: ['Premier League'],
  detail: {
    team: ['Newcastle United F.C.'],
    capacity: 52354,
    opened: new Date('1892'),
    architect: 'TTH Architects, Gateshead UK',
    location: 'Newcastle, Tyne and Wear',
    images: [
      'https://s-media-cache-ak0.pinimg.com/originals/b9/93/c9/b993c9c8edd03ef36850cb3754b95b44.jpg',
      'https://sleeperz.com/assets/img/newcastle/regular/local/sleeperz-hotel-newcastle-st-james-park-03.jpg',
      'http://fullhdpictures.com/wp-content/uploads/2015/10/St.-James-Park-Newcastle-United-Wallpaper.jpg',
      'https://www.nufc.co.uk/media/24234/st-james-park-from-leazes-stand.jpg',
      'http://upload.wikimedia.org/wikipedia/commons/c/ca/Pre-match_St_James%27_Park.JPG',
      'http://cdn.soccerbible.com/media/39880/newcastle-residence-soccerbible-st-james-park_0055_newcastle-residence-9.jpg',
      'http://i4.chroniclelive.co.uk/incoming/article12760398.ece/ALTERNATES/s1200/Newcastle-United-v-Fulham-Sky-Bet-Championship-St-James-Park.jpg'
    ]
  }
}
Seeder(stadium);
