var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Ramón Sánchez Pizjuán Stadium',
  sport: ['Football'],
  league: ['La Liga'],
  detail: {
    team: ['Sevilla FC'],
    capacity: 42500,
    opened: new Date('09/07/1958'),
    architect: 'James Cox / Manuel Muñoz Monasterio',
    location: 'Seville, Spain',
    images: [
      'https://c2.staticflickr.com/6/5719/22879304495_63ddf2f2d0_o.jpg',
      'https://myfootballpix.files.wordpress.com/2012/10/img_1278.jpg',
      'http://travelchannel.sndimg.com/content/dam/images/travel/fullset/2015/03/30/seville-spain-slideshow/ramon-sanchez-pizjuan-stadium-seville-spain.jpg.rend.tccom.1280.960.jpeg',
      'https://upload.wikimedia.org/wikipedia/commons/0/04/Estadio_Ram%C3%B3n_S%C3%A1nchez_Pizju%C3%A1n_Preferencia_and_Gol_Sur-2007-04-05.jpg',
      'http://images.tapatalk-cdn.com/15/07/28/b7d21cd91b23d21ab9ba837326a850da.jpg',
      
    ]
  }
}
Seeder(stadium);
