var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Globe Life Park in Arlington',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Texas Rangers'],
    capacity: 48114,
    opened: new Date('04/01/1994'),
    architect: 'David M. Schwarz ',
    location: 'Arlington, Texas',
    images: [
      'https://res-2.cloudinary.com/simpleview/image/fetch/c_limit,f_auto,h_1200,q_75,w_1200/https://fortworth.simpleviewcrm.com/images/listings/original_Kelly-Gavin-Manager-Photography.jpg',
      'https://cdn0.vox-cdn.com/thumbor/J2uvvPIfIPa2GFQZDGE6gX98YaQ=/14x0:984x647/1310x873/cdn0.vox-cdn.com/uploads/chorus_image/image/28725805/gyi0065047182.0.jpg',
      'http://www.desktopimages.org/pictures/2015/0406/1/orig_82224.jpg',
      'https://mlblogstheballparkguide.files.wordpress.com/2015/12/globe-life-park-center-field-suites.jpg',
      'http://interactives.dallasnews.com/2016/rangers-gameday-guide/images/parking_1500.jpg',
      'http://upload.wikimedia.org/wikipedia/commons/2/29/Ballpark_in_Arlington_May_2009.jpg',
      'http://4.bp.blogspot.com/-MTlU4zC-gOg/VBdh56KTDxI/AAAAAAAAAP0/7-gufljQ0r8/s1600/photo%2B1.JPG',
      
    ]
  }
}
Seeder(stadium);
