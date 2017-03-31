var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Philips Arena',
  sport: ['Basketball'],
  league: ['NBA'],
  detail: {
    team: ['Atlanta Hawks'],
    capacity: 19049,
    opened: new Date('09/18/1999'),
    architect: 'Populous',
    location: 'Atlanta, Georgia',
    images: [
      'http://www.philipsarena.com/assets/img/00278774-8f7bedf56c.png',
      'http://www.gafollowers.com/wp-content/uploads/2017/02/Arena.jpg',
      'http://mediad.publicbroadcasting.net/p/wabe/files/hawksPhilipsArena_012815_3.jpg',
      'http://www.gafollowers.com/wp-content/uploads/2016/11/philips-2.jpg',
      'https://1.bp.blogspot.com/-nilWTBVDc7g/V4wAfYBKP0I/AAAAAAAAYwk/Pbd4KMZN-BEsqU4meqsDIciXhDuhmEPGgCLcB/s1600/philips_100_IMG_20160717_151235.jpg',
      'https://c1.staticflickr.com/1/46/115978385_f5d6f5944d_b.jpg',
      
    ]
  }
}
Seeder(stadium);
