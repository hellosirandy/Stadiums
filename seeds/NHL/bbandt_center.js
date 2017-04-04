var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'BB&T Center',
  sport: ['Hockey'],
  league: ['NHL'],
  detail: {
    team: ['Florida Panthers'],
    capacity: 19250,
    opened: new Date('10/03/1998'),
    architect: 'Ellerbe Becket',
    location: 'Sunrise, Florida',
    images: [
      'http://www.sheratonsuitesplantation.com/assets/u/bbtcenter.jpg',
      'http://c308991.r91.cf1.rackcdn.com/SiteFiles/Venues/11140/e69a2590-f57b-40ed-8e10-3a0e8a4eba16.jpg',
      'http://hendriksvisitedstadiums.com/gallery/kicx63702.jpg',
      'https://i.ytimg.com/vi/H5sWkDXK25o/maxresdefault.jpg',
      
    ]
  }
}
Seeder(stadium);
