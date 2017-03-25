var Seeder = require('../../helpers/seeder');
var ATTPark = {
  name: 'AT&T Park',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['San Francisco Giants'],
    capacity: 41915,
    opened: new Date('04/11/2001'),
    architect: 'Populous',
    location: 'San Francisco, California'
  }
}
Seeder(ATTPark);
