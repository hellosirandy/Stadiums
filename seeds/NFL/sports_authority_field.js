var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Sports Authority Field at Mile High',
  sport: ['Football'],
  league: ['NFL'],
  detail: {
    team: ['Denver Broncos'],
    capacity: 76125,
    opened: new Date('09/10/2001'),
    architect: 'HNTB',
    location: 'Denver, Colorado',
    images: [
      'https://s-media-cache-ak0.pinimg.com/originals/ab/5c/46/ab5c4674c35221b9d1bb8cdd0e47fe13.jpg',
      'http://www.sportsauthorityfieldatmilehigh.com/images/default-source/site-images/bg-body.jpg',
      'http://www.sheratondenverdowntown.com/assets/u/Sports-Authority-Field-at-Mile-High__1600x900_.jpg',
      'https://s-media-cache-ak0.pinimg.com/originals/44/86/2e/44862e5353b71fed24dc373efd67d129.jpg',
      'http://i.imgur.com/NZcEuwd.jpg',
      'https://c1.staticflickr.com/5/4103/5064829098_7275b0d1fd_b.jpg',
      'http://sportswhereiam.com/wp-content/uploads/2015/05/Sports-Authority-Field-at-Mile-High.jpg',

    ]
  }
}
Seeder(stadium);
