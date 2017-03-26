var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Bank of America Stadium',
  sport: ['Football'],
  league: ['NFL'],
  detail: {
    team: ['Carolina Panthers'],
    capacity: 75412,
    opened: new Date('09/01/1996'),
    architect: 'Populous',
    location: 'Charlotte, North Carolina',
    images: [
      'http://www.wbmoore.com/uploads/project-pictures/bank-of-america-stadium-charlotte-102.jpg',
      'http://static.lakana.com/media.fox46charlotte.com/photo/2016/01/21/bank%20of%20america%20stadium_1453428023710_742622_ver1.0.jpg',
      'http://www.hiltoncentercity.com/wp-content/uploads/2015/01/BOFA-1024x564.jpg',
      'http://a.espncdn.com/combiner/i?img=/i/venues/nfl/day/interior/3628.jpg&h=590&w=1408',
      'http://www.hiltoncentercity.com/wp-content/uploads/2015/01/BOFA-1024x564.jpg',
      'http://static.nfl.com/static/content/public/pg-photo/2014/04/23/0ap2000000343583/thursday-oct-30-saints-at-panthers-bank-america-stadium-charlotte-n-c_pg_600.jpg',
      'http://wagnermurray.com/wp-content/uploads/2016/11/Panthers-Club-11.jpg',
      
    ]
  }
}
Seeder(stadium);
