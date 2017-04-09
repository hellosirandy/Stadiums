var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Esprit Arena',
  sport: ['Football'],
  league: ['Bundesliga'],
  detail: {
    team: ['Fortuna Düsseldorf'],
    capacity: 54600,
    opened: new Date('09/10/2004'),
    architect: 'JSK Architekten',
    location: 'Düsseldorf, Germany',
    images: [
      'https://de.fiylo.com/media/espritarena-events-gallery-06-def127.jpg',
      'http://shop.11freunde.de/media/catalog/product/cache/1/image/1200x698/17f82f742ffe127f42dca9de82fb58b1/d/u/duesseldorf_2012_coddou__1200px.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/ESPRIT_arena_in_Duesseldorf-Stockum%2C_von_Sueden.jpg/1200px-ESPRIT_arena_in_Duesseldorf-Stockum%2C_von_Sueden.jpg',
      'https://i.ytimg.com/vi/LE23MLCZkKk/maxresdefault.jpg',
      'https://www.sop-architekten.de/fileadmin/sop/content/Projekte/Esprit_Arena/sop_architekten_esprit_arena_duesseldorf.jpg',
      'http://www.espritarena.de/fileadmin/_processed_cmis_v2/5/e/csm_Bilder_ESPRIT__arena_VIP_BUsiness_Business_Seat_0002_ba9fbfab09.jpg',
      'https://de.fiylo.com/media/espritarena-events-gallery-08-577c8f.jpg',
      
    ]
  }
}
Seeder(stadium);
