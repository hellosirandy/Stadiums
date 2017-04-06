var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'American Airlines Center',
  sport: ['Basketball', 'Hockey'],
  league: ['NBA', 'NHL'],
  detail: {
    team: ['Dallas Mavericks', 'Dallas Stars'],
    capacity: 19200,
    opened: new Date('07/17/2001'),
    architect: 'David M. Schwarz/Architectural',
    location: 'Dallas, Texas',
    images: [
      'http://www.americanairlinescenter.com/assets/img/aacenter.jpg',
      'https://farm7.staticflickr.com/6041/6232799347_f417ef9c6f_b.jpg',
      'http://cdnfiles.hdrcreme.com/35802/original/american-airlines-center.jpg?1426777201',
      'https://c1.staticflickr.com/8/7375/15934116554_bbb782f143_b.jpg',
      'https://i.ytimg.com/vi/6cYoaD81P8I/maxresdefault.jpg',
      'http://www.itinerantfan.com/gallery/american-airlines-center/img_2941.jpg',
      'http://www.americanairlinescenter.com/assets/img/Suites.jpg',
      'https://www.rateyourseats.com/shared/American-Airlines-Center-Basketball-Section-101-Row-D_1-on-10-28-2016_SC.jpg'
    ]
  }
}
Seeder(stadium);
