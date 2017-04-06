var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'AT&T Center',
  sport: ['Basketball'],
  league: ['NBA'],
  detail: {
    team: ['San Antonio Spurs'],
    capacity: 18418,
    opened: new Date('10/18/2002'),
    architect: 'Ellerbe Becket',
    location: 'San Antonio, Texas',
    images: [
      'https://www.omnihotels.com/-/media/images/hotels/satwat/activities/satwat-mokara-hotel-and-spa-att-center.jpg?h=660&la=en&w=1170',
      'http://www.attcenter.com/assets/img/JDY_5819-HDR-c7da0bc175.jpg',
      'http://aviewfrommyseat.com/photos/babatson-20130731000720.jpg',
      'https://i.ytimg.com/vi/OECn2Mg1YPM/maxresdefault.jpg',
      'http://aviewfrommyseat.com/photos/babatson-20130731000720.jpg',

    ]
  }
}
Seeder(stadium);
