var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Stadion Nürnberg',
  sport: ['Football'],
  league: ['Bundesliga'],
  detail: {
    team: ['1. FC Nürnberg'],
    capacity: 50000,
    opened: new Date('1928'),
    architect: 'HPP Architects',
    location: 'Nuremberg, Germany',
    images: [
      'http://www.sportwetten-blog.eu/wp-content/uploads/2011/05/fc-nuernberg-stadion.jpg',
      'http://static.panoramio.com/photos/large/21815609.jpg',
      'http://static.panoramio.com/photos/large/44385049.jpg',
      'http://www.chrupala-endres.de/referenzen/ref_stadion_nuernberg/bilder/g_5_Stadion_Nuernberg.jpg',
      'https://de.fiylo.com/media/grundigstadion-events-00-49e3fe.jpg',
      'http://static.panoramio.com/photos/large/22006986.jpg',
      
    ]
  }
}
Seeder(stadium);
