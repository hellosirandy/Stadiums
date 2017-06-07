var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Stadio San Nicola',
  sport: ['Football'],
  league: ['Serie A'],
  detail: {
    team: ['F.C. Bari'],
    capacity: 58270,
    opened: new Date('06/03/1990'),
    architect: 'Renzo Piano',
    location: 'Bari, Italy',
    images: [
      'http://www.odb.it/wp-content/uploads/2014/09/20110309115625_00001.jpg',
      'https://upload.wikimedia.org/wikipedia/it/7/78/Internostadiobari.jpg',
      'http://buromilan.com/content/uploads/1990/07/Stadio-San-Nicola-Bari.jpg',
      'http://www.metropolinotizie.it/wp-content/uploads/2016/07/san-nicola.jpg',
      'http://www.pianetamilan.it/wp-content/uploads/sites/23/2015/11/San_Nicola_Bari_Getty_Images.jpg',
      'http://www.ilsitodibari.it/sites/default/files/immagini_articoli/WP_000271.jpg',
      'https://i.ytimg.com/vi/8XiOkHL-GqM/maxresdefault.jpg',

    ]
  }
}
Seeder(stadium);
