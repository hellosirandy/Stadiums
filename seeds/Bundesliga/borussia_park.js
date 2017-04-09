var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Borussia Park',
  sport: ['Football'],
  league: ['Bundesliga'],
  detail: {
    team: ['Borussia Mönchengladbach'],
    capacity: 54057,
    opened: new Date('07/30/2004'),
    architect: 'Marc Laurens',
    location: 'Mönchengladbach, Germany',
    images: [
      'https://stuartnoel.files.wordpress.com/2009/03/bmg-panorama2.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/3/34/Borussia_Park_Mönchengladbach.jpg',
      'http://www.hochtief-solutions.com/htsol_en/mmdblargeprev?id=138958',
      'https://i.ytimg.com/vi/2Nirxm0I1bQ/maxresdefault.jpg',
      'http://www.hochtief-solutions.com/htsol_en/mmdblargeprev?id=138955',
      'https://c1.staticflickr.com/7/6001/6008985194_5bc53b86e8_b.jpg',
      'http://www.doof92.co.uk/gladbach/16.Panorama%203.jpg',

    ]
  }
}
Seeder(stadium);
