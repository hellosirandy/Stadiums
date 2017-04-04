var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Talking Stick Resort Arena',
  sport: ['Basketball'],
  league: ['NBA'],
  detail: {
    team: ['Phoenix Suns'],
    capacity: 19023,
    opened: new Date('06/06/1992'),
    architect: 'Ellerbe Becket',
    location: 'Phoenix, Arizona',
    images: [
      'http://www.talkingstickresortarena.com/assets/img/cover-photo.jpg',
      'http://www.talkingstickresortarena.com/assets/img/tsr_arena_unveil_01.jpg',
      'http://azcitieswork.com/wp-content/uploads/2015/09/Phoenix_009.jpg',
      'http://a.espncdn.com/i/venues/nba/day/1949.jpg',
      
    ]
  }
}
Seeder(stadium);
