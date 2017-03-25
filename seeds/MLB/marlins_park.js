var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Marlins Park',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Miami Marlins'],
    capacity: 36742,
    opened: new Date('03/05/2012'),
    architect: 'Populous',
    location: 'Miami, Florida'
  }
}
Seeder(stadium);
