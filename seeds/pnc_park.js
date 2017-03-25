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
      'https://cannon-7pwiu5hqygigvu1w3lmtyxkscr5rqnxrk5c1hjll7ke.netdna-ssl.com/assets/PNCPark2.jpg',
      'http://media4.trover.com/T/516957e40845d2114d000319/fixedw_large_4x.jpg',
    ]
  }
};
Seeder(PNCPark);
