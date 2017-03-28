var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'University of Phoenix Stadium',
  sport: ['Football'],
  league: ['NFL'],
  detail: {
    team: ['Arizona Cardinals'],
    capacity: 63400,
    opened: new Date('08/01/2006'),
    architect: 'Eisenman Architects',
    location: 'Glendale, Arizona',
    images: [
      'http://ampthemag.com/wp-content/uploads/2016/05/University-of-Phoenix-Stadium.jpg',
      'http://www.destination360.com/north-america/us/arizona/images/s/university-of-phoenix-stadium.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/f/f3/University_of_Phoenix_Stadium_aerial.jpg',
      'http://www.phoenixfinalfour.com/wp-content/uploads/2016/06/2016-01-11-college-playoffs-uop.jpg',
      'http://ephesuslighting.com/wp-content/uploads/2014/10/Phx.jpg',
      'https://montrealontheroad.files.wordpress.com/2014/08/dbacks9.jpg',
      'https://cdn0.vox-cdn.com/thumbor/l-jMrZvHFERisE5bup-Zpz23Zt8=/0x230:4182x2582/1600x900/cdn0.vox-cdn.com/uploads/chorus_image/image/50123485/usa-today-8728225.0.jpg',
      
    ]
  }
}
Seeder(stadium);
