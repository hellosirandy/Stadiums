var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Petco Park',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['San Diego Padres'],
    capacity: 40162,
    opened: new Date('04/08/2004'),
    architect: 'Populous',
    location: 'San Diego, California'
  }
}
Seeder(stadium);
