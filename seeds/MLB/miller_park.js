var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Miller Park',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Milwaukee Brewers'],
    capacity: 41900,
    opened: new Date('04/06/2001'),
    architect: 'HKS, Inc.',
    location: 'Milwaukee, Wisconsin',
    images: [
      'http://www.johnsoncontrols.com/-/media/jci/insights/2015/be/images/be_cs_miller_park_front.jpg?data-description=thumbnail3&data-media-type=image',
      'https://cdn0.vox-cdn.com/thumbor/U701Ce-FtTmP1t35nu8Sh1teQ9I=/142x0:2861x2039/1200x800/filters:focal(142x0:2861x2039)/cdn0.vox-cdn.com/uploads/chorus_image/image/46055562/129275717.0.0.jpg',
      'https://d1gzvc2c13psez.cloudfront.net/sites/6/2015/05/V6_Photo-RaceVenues-MillerPark-v.jpg',
      'https://ballhawker.files.wordpress.com/2013/06/101_0415.jpg',
      'https://mlblogscookandsonbats.files.wordpress.com/2009/08/2220-20miller20home20upper20panaramic.jpg',
      'http://static.panoramio.com/photos/large/3212660.jpg',
      'https://mlblogsbrewers.files.wordpress.com/2011/05/photo.jpg',
      'http://media.jrn.com/images/29159697-mjs_superfan_4_of_hoffman.jpg_superfan.jpg',
      
    ]
  }
}
Seeder(stadium);
