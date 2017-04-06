var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Mazda Zoom-Zoom Stadium',
  sport: ['Baseball'],
  league: ['NPB'],
  detail: {
    team: ['Hiroshima Toyo Carp'],
    capacity: 32000,
    opened: new Date('04/10/2009'),
    architect: 'Masuoka Architectural',
    location: 'Hiroshima, Japan',
    images: [
      'http://gethiroshima.com/wp-content/uploads/2012/06/MAZDA_Zoom-Zoom_Stadium_Hiroshima.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/MAZDA_Zoom-Zoom_Stadium_Hiroshima_facade.jpg/1200px-MAZDA_Zoom-Zoom_Stadium_Hiroshima_facade.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/3/38/Carp_VS_Fighters_2009_%28in_MAZDA_Zoom-Zoom_Stadium%29.JPG',
      'http://visithiroshima.net/things_to_do/images/mazda_zoom-zoom_stadium_02.jpg',
      'https://c1.staticflickr.com/3/2561/3681356550_8cb71b08ce_b.jpg',
      'https://cdn.odigo.net/d6d01c978ba6524cadbc76e4078a11f7.jpg?imageView2/2/w/1440',
      
    ]
  }
}
Seeder(stadium);
