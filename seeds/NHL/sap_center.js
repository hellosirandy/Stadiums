var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'SAP Center',
  sport: ['Hockey'],
  league: ['NHL'],
  detail: {
    team: ['San Jose Sharks'],
    capacity: 17562,
    opened: new Date('09/07/1993'),
    architect: 'Sink Combs Dethlefs',
    location: 'San Jose, California',
    images: [
      'http://hendriksvisitedstadiums.com/gallery/SJSDSC01631.jpg',
      'https://cdn0.vox-cdn.com/thumbor/a8z8s4tnLuNlmANH3pMvcXqDSkg=/9x0:3980x2647/1310x873/cdn0.vox-cdn.com/uploads/chorus_image/image/46302018/usa-today-7538551.0.jpg',
      'http://sportswhereiam.com/wp-content/uploads/2015/05/SAP-Center.jpg',
      'https://farm8.staticflickr.com/7376/13280557963_0207d2a794_b.jpg',
      'http://media.nbcbayarea.com/images/1200*675/04-17-2014-sap-center.jpg?ak=bc',
      'http://assets1.sportsnet.ca/wp-content/uploads/2015/05/SAP-Center-1040x572.png',
      'https://upload.wikimedia.org/wikipedia/commons/f/fd/Aerial_view_of_HP_Pavilion.jpg',
      
    ]
  }
}
Seeder(stadium);
