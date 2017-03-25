var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Globe Life Park in Arlington',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Texas Rangers'],
    capacity: 48114,
    opened: new Date('04/01/1994'),
    architect: 'David M. Schwarz ',
    location: 'Arlington, Texas'
  }
}
Seeder(stadium);
