var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Mercedes-Benz Arena',
  sport: ['Football'],
  league: ['Bundesliga'],
  detail: {
    team: ['VfB Stuttgart'],
    capacity: 60469,
    opened: new Date('07/23/1933'),
    architect: '\'asp\' architekten Stuttgart',
    location: 'Stuttgart, Germany',
    images: [
      'http://shop.11freunde.de/media/catalog/product/cache/1/image/1200x698/17f82f742ffe127f42dca9de82fb58b1/s/t/stuttgart_2011_coddou__1200px.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/4/47/Mercedes-Benz-Arena_Stuttgart.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/1/16/Mercedes-Benz-Arena_Stuttgart.JPG',
      'https://de.fiylo.com/media/mbarena-events-gallery-06-f1a5e3.jpg',
      'http://www.sbp.de/fileadmin/sbp.de/projects/8F8F6E8A3C415B07C1257E750036EBC0_0_1_birdeyeview_beschnitten_MAX.jpg',
      'http://www.liapor.com/images/de_presse/bild1gross/91_benz_arena_bild_1.jpg',
      'http://www.info-stades.fr/uploads/stades/stuttgart-mercedes-benz-arena.jpg',
      'https://i.ytimg.com/vi/WyOmL0ZaqKw/maxresdefault.jpg',
      
    ]
  }
}
Seeder(stadium);
