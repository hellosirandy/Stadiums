var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Veltins Arena',
  sport: ['Football'],
  league: ['Bundesliga'],
  detail: {
    team: ['Schalke 04'],
    capacity: 62271,
    opened: new Date('08/13/2001'),
    architect: 'Hentrich, Petschnigg und Partner',
    location: '	Gelsenkirchen, Germany',
    images: [
      'https://s-media-cache-ak0.pinimg.com/originals/a2/dc/55/a2dc55f4243e0e5e0680c82f566ed858.jpg',
      'https://essma.eu/member/images/members_gallery/veltins4.jpg',
      'https://essma.eu/member/images/members_gallery/veltins5.jpg',
      'http://farm4.static.flickr.com/3180/2450221076_f5841cd275_b.jpg',
      'http://farm3.static.flickr.com/2213/2450221740_6e2b4ab4cb_b.jpg',
      'http://farm3.static.flickr.com/2415/2450220786_c80631b51f_b.jpg',
      'http://www.veltins-arena.de/fileadmin/user_upload/portrait_dach_2.jpg',
      
    ]
  }
}
Seeder(stadium);
