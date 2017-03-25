var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Angel Stadium',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Los Angelas Angels'],
    capacity: 45493,
    opened: new Date('04/19/1966'),
    architect: 'Noble W. Herzberg and Associates ',
    location: 'Anaheim, California'
  }
}
Seeder(stadium);
