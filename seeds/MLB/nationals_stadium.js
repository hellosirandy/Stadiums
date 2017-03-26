var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Nationals Park',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Washington Nationals'],
    capacity: 41313,
    opened: new Date('03/22/2008'),
    architect: 'Populous',
    location: 'Washington, D.C.',
    images: [
      'http://www.banknotesindustries.com/wp-content/uploads/2016/03/natspark.jpg',
      'http://images.performgroup.com/di/library/omnisport/7e/c1/nationals-park_26ivsr45642n12hhgiaju9hym.jpg?t=-791142743',
      'https://img.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2014/04/04/Sports/Images/sp-nats_151396633691.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/3/3b/Nationals_Park.jpg',
      'http://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/videos/2157889318001_5294877526001_5294872730001-vs.jpg?itok=oWP8k6nC',
      'https://c1.staticflickr.com/8/7121/7606334966_65cfe68898_b.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/e/ea/Aerial_view_of_Nationals_Park.jpg',
      
    ]
  }
}
Seeder(stadium);
