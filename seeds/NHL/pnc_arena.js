var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'PNC Arena',
  sport: ['Hockey'],
  league: ['NHL'],
  detail: {
    team: ['Carolina Hurricanes'],
    capacity: 18680,
    opened: new Date('10/29/1999'),
    architect: 'Odell Associates, Inc.',
    location: 'Raleigh, North Carolina',
    images: [
      'http://dilemmaxdotnet.files.wordpress.com/2012/11/pnc-arena.jpg',
      'http://www.thestadiumbusiness.com/wp-content/uploads/2017/03/PNC-Arena.jpg',
      'http://aviewfrommyseat.com/photos/Hurricanes12-20120201153327.jpg',
      'http://seatingchartview.com/wp-content/uploads/2016/01/PNC-Arena.jpg',
      'https://c1.staticflickr.com/8/7293/11811322824_3c3c71d115_b.jpg',

    ]
  }
}
Seeder(stadium);
