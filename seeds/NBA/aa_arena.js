var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'America Airlines Arena',
  sport: ['Basketball'],
  league: ['NBA'],
  detail: {
    team: ['Miami Heat'],
    capacity: 19600,
    opened: new Date('12/31/1999'),
    architect: 'Arquitectonica',
    location: 'Miami, Florida',
    images: [
      'https://s-media-cache-ak0.pinimg.com/originals/a1/c2/cd/a1c2cdb77d8c6003025d7a0549a396ec.jpg',
      'https://c1.staticflickr.com/4/3747/9121034013_30dbf32134_b.jpg',
      'http://arquitectonica.com/wp-content/blogs.dir/1/files_mf/12876713397.9619.6.50aPIL.jpg',
      'http://aviewfrommyseat.com/photos/itsMichaelW-20120530100023.jpg',
      'https://s-media-cache-ak0.pinimg.com/originals/d9/34/84/d93484dbf2f24653be34b92d1301710e.jpg',
      'https://s-media-cache-ak0.pinimg.com/originals/30/2a/92/302a928df840ee0f2e0ebc65c199a63d.jpg',
      'http://www.interbasket.net/news/wp-content/uploads/2014/06/American_Airlines_Arena_backside.jpg',
      'http://www.hok.com/uploads/2014/12/17/americanairlinesarena03.jpg'
    ]
  }
}
Seeder(stadium);
