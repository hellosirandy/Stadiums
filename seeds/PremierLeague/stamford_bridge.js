var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Stamford Bridge',
  sport: ['Football'],
  league: ['Premier League'],
  detail: {
    team: ['Chelsea F.C.'],
    capacity: 41663,
    opened: new Date('04/28/1877'),
    architect: 'Archibald Leitch',
    location: 'Fulham, London, SW6',
    images: [
      'http://d.ibtimes.co.uk/en/full/1447180/stamford-bridge.jpg',
      'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/05/04/12/Stamford-Bridge.jpg',
      'http://englishsoccerguide.com/wp-content/uploads/2016/08/touring-stamford-bridge-chelsea_1041.jpg',
      'https://s-media-cache-ak0.pinimg.com/originals/2e/ba/f5/2ebaf57748bbcc20697525601729e0cd.jpg',
      'http://farm3.static.flickr.com/2330/2405405780_cffbd2f4c2_b.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/5/51/Stamford_Bridge.jpg',
      'http://www.leisureopportunities.co.uk/images/HIGH407628_706305.jpg',

    ]
  }
}
Seeder(stadium);
