var Seeder = require('../../helpers/seeder');
var ComericaPark = {
  name: 'Comerica Park',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Detroit Tigers'],
    capacity: 41297,
    opened: new Date('04/11/2000'),
    architect: 'International Facilities Group',
    location: 'Detroit, Michigan'
  }
}
Seeder(ComericaPark);
