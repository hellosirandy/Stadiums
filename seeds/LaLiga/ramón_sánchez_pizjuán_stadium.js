var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Ramón Sánchez Pizjuán Stadium',
  sport: ['Football'],
  league: ['La Liga'],
  detail: {
    team: ['Sevilla FC'],
    capacity: 42500,
    opened: new Date('09/07/1958'),
    architect: 'James Cox / Manuel Muñoz Monasterio',
    location: 'Seville, Spain',
    images: [

    ]
  }
}
Seeder(stadium);
