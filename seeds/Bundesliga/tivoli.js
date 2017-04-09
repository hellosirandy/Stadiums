var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Tivoli',
  sport: ['Football'],
  league: ['Bundesliga'],
  detail: {
    team: ['Alemannia Aachen'],
    capacity: 32960,
    opened: new Date('08/17/2009'),
    architect: 'agn Niederberghaus & Partner GmbH',
    location: 'Aachen, Germany',
    images: [
      'http://static.panoramio.com/photos/large/26074853.jpg',
      'http://fussballbilder.net/data/media/52/new_tivoli_stadion.jpg',
      'http://2.bp.blogspot.com/-0MxMzIi96BQ/U4L8wO-lS7I/AAAAAAAATWA/Qwv6MDoY1Fw/s1600/20140525_100900.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/5/50/Tivoli-Bitburger_Wall.jpg',
      'http://www.aachen-congress.de/data/media/images/Tivoli-Frontansicht-1_1308229725.jpg',
      
    ]
  }
}
Seeder(stadium);
