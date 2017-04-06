var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'RCDE Stadium',
  sport: ['Football'],
  league: ['La Liga'],
  detail: {
    team: ['Espanyol'],
    capacity: 40500,
    opened: new Date('08/09/2009'),
    architect: 'Mark Fenwick',
    location: 'Barcelona, Spain',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/4/47/EstadioRCDE_Pano.jpg',
      'https://c1.staticflickr.com/4/3746/13464996074_d6d083dc72_b.jpg',
      'http://estaticos.elperiodico.com/resources/jpg/4/6/entrenamiento-del-equipo-rcde-estadio-del-espanyol-1458237017864.jpg',
      'http://barcelonaconlaseleccion.org/img/rcde.jpg',
      'https://pbs.twimg.com/media/C6k9j-aWYAIa2K7.jpg',
      
    ]
  }
}
Seeder(stadium);
