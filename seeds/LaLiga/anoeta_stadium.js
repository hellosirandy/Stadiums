var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Anoeta Stadium',
  sport: ['Football'],
  league: ['La Liga'],
  detail: {
    team: ['Real Sociedad'],
    capacity: 32300,
    opened: new Date('1993/8/13'),
    architect: '',
    location: 'San Sebastián, Spain',
    images: [
      'http://www.stadiumguide.com/wp-content/uploads/anoeta_top.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Tribuna_oeste_del_Estadio_Anoeta.JPG/1200px-Tribuna_oeste_del_Estadio_Anoeta.JPG',
      'http://farm5.static.flickr.com/4032/4360258881_0bf9afe695_b.jpg',
      'http://www.normalux.com/intranet/uploads/proyectos/Anoeta%201.jpg',

    ]
  }
}
Seeder(stadium);
