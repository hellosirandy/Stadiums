var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'The Hawthorns',
  sport: ['Football'],
  league: ['Premier League'],
  detail: {
    team: ['West Bromwich Albion F.C.'],
    capacity: 26850,
    opened: new Date('09/03/1900'),
    architect: '',
    location: 'Sandwell, West Midlands',
    images: [
      'http://i4.mirror.co.uk/incoming/article8670636.ece/ALTERNATES/s1200/West-Bromwich-Albion-v-Everton-Premier-League.jpg',
      'http://www.hotel-r.net/im/hotel/ie/the-hawthorns-22.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/4/4b/The_Hawthorns_pitch_level.jpg',
      'http://static.panoramio.com/photos/original/17012869.jpg',
      'https://i.ytimg.com/vi/2Vj0ujYE2q4/maxresdefault.jpg',

    ]
  }
}
Seeder(stadium);
