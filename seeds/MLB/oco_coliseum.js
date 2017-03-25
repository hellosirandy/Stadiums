var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'O.co Coliseum',
  sport: ['Baseball', 'Football'],
  league: ['MLB', 'NFL'],
  detail: {
    team: ['Oakland Athletics', 'Oakland Raiders'],
    capacity: 56063,
    opened: new Date('09/18/1966'),
    architect: 'Skidmore, Owings & Merrill',
    location: 'Oakland, California'
  }
}
Seeder(stadium);
