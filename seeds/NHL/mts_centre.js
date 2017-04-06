var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'MTS Centre',
  sport: ['Hockey'],
  league: ['NHL'],
  detail: {
    team: ['Winnipeg Jets'],
    capacity: 15294,
    opened: new Date('11/06/2004'),
    architect: 'Sink Combs Dethlefs',
    location: 'Winnipeg, Manitoba',
    images: [
      'http://www.sportscastermagazine.ca/wp-content/uploads/sites/26/2015/10/MTS-scoreboard2SML.jpg',
      'http://i85.photobucket.com/albums/k42/Jhendrix70_/MTS%20Centre/DSC01818.jpg',
      'http://static.thousandwonders.net/MTS.Centre.original.25819.jpg',
      'https://i.ytimg.com/vi/k_xuWJG3Uc0/maxresdefault.jpg',
      'http://test.winnipeglovehate.com/wp-content/uploads/2014/03/10011665943_b8762de8e3_b.jpg',
      'http://static.panoramio.com/photos/large/62119679.jpg',
      'http://i85.photobucket.com/albums/k42/Jhendrix70_/MTS%20Centre/DSC01817.jpg'
    ]
  }
}
Seeder(stadium);
