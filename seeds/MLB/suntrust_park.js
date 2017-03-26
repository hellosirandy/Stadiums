var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Suntrust Park',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Atlanta Braves'],
    capacity: 41500,
    opened: new Date('02/24/2017'),
    architect: 'Populous',
    location: 'Atlanta, Georgia',
    images: [
      'http://atlanta.braves.mlb.com/atl/ballpark/suntrust-park/images/ballpark-rendering2.jpg',
      'https://pbs.twimg.com/media/C6RdQsZWAAAwFKO.jpg',
      
    ]
  }
}
Seeder(stadium);
