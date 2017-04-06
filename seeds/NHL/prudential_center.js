var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Prudential Center',
  sport: ['Hockey'],
  league: ['NHL'],
  detail: {
    team: ['New Jersey Devils'],
    capacity: 17625,
    opened: new Date('10/25/2007'),
    architect: 'Populous',
    location: 'Newark, New Jersey',
    images: [
      'http://www.prucenter.com/images/getting-here/cover-building.1024x626.jpg',
      'https://upload.wikimedia.org/wikipedia/en/d/d9/Prudential_Center_hockey_rink.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/8/84/Pudcentnewarkjeh.JPG',
      'https://gcaggiano.files.wordpress.com/2012/05/prudential_center_bowl.jpg',
      'https://stadiumsandarenas.files.wordpress.com/2010/10/1518.jpg',
      'http://static.panoramio.com/photos/large/42116224.jpg',

    ]
  }
}
Seeder(stadium);
