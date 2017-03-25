var Seeder = require('../helpers/seeder');
var PNCPark = {
  name: 'PNC Park',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Pittsburgh Pirates'],
    capacity: 38362,
    opened: new Date(2001, 3, 31),
    architect: 'Populous',
    location: 'Pittsburgh, Pennsylvania',
    images: [
      'https://www.mmvta.com/wp-content/uploads/2013/08/PNC-PARK.jpg',
      'https://www.mmvta.com/wp-content/uploads/2013/08/PNC-PARK.jpg',
      'https://www.mmvta.com/wp-content/uploads/2013/08/PNC-PARK.jpg',
      'https://www.mmvta.com/wp-content/uploads/2013/08/PNC-PARK.jpg',
      'https://www.mmvta.com/wp-content/uploads/2013/08/PNC-PARK.jpg',
      'http://www.fedjefamily.net/images/baseball/pnc_upper_view.jpg',
    ]
  }
};
Seeder(PNCPark);
