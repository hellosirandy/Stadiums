var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Scottrade Center',
  sport: ['Hockey'],
  league: ['NHL'],
  detail: {
    team: ['St. Louis Blues'],
    capacity: 19150,
    opened: new Date('10/08/1994'),
    architect: 'Ellerbe Becket',
    location: 'St. Louis, Missouri',
    images: [
      'http://www.scottradecenter.com/assets/img/Seat-locator.jpg',
      'https://static.rukkus.com/venue/images/Scottrade_Center-1389.jpg',
      'http://stadiumparkingguides.com/wp-content/uploads/2014/11/6232792716_2f360f3243_b.jpg',
      'http://www.scottradecenter.com/assets/img/arena-specifications.jpg',
      'https://www.rateyourseats.com/shared/Scottrade-Center-Hockey-Section-105-Row-L_2-on-9-30-2014k.jpg',
      'http://www.scottradecenter.com/assets/img/Scottrade-Exterior1120-fbcc93ba84.jpg',
      
    ]
  }
}
Seeder(stadium);
