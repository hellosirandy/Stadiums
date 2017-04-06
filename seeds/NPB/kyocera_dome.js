var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Kyocera Dome',
  sport: ['Baseball'],
  league: ['NPB'],
  detail: {
    team: ['Orix Buffaloes'],
    capacity: 36477,
    opened: new Date('03/01/1997'),
    architect: 'Nikken Sekkei, Ltd.',
    location: 'Osaka, Japan',
    images: [
      'http://static.thousandwonders.net/Kyocera.Dome.original.33737.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Kyocera_Dome_Osaka1.jpg/1200px-Kyocera_Dome_Osaka1.jpg',
      'http://www.greenfields.eu/wp-content/uploads/2013/12/Kyocera-Dome_REAL-FT-32-20-slide-pro-nf-4.jpg',
      'http://static.panoramio.com/photos/large/88467451.jpg',
      'https://c1.staticflickr.com/4/3098/5845320571_b3dcf64a61_b.jpg',
      'http://baseballreflections.com/wp-content/uploads/2010/09/Game-4-Inside-the-Kyocera-Dome.jpg',
      
    ]
  }
}
Seeder(stadium);
