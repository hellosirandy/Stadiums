var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'MSV Arena',
  sport: ['Football'],
  league: ['Bundesliga'],
  detail: {
    team: ['MSV Duisburg'],
    capacity: 31500,
    opened: new Date('11/08/2004'),
    architect: 'Michael Stehle',
    location: 'Duisburg, Germany',
    images: [
      'https://s-media-cache-ak0.pinimg.com/originals/88/19/cc/8819cc9b44563ee5022ae929c41a11c9.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/c/c5/MSV-Arena_Duisburg_02.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/c/c6/UEFA_Cup_Finale_MSV-Arena.jpg',
      'https://stuartnoel.files.wordpress.com/2008/10/snv14903.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/2/2e/MSV-Arena_20080416.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/e/ee/Haupttrib%C3%BCne_MSV-Arena.jpg',

    ]
  }
}
Seeder(stadium);
