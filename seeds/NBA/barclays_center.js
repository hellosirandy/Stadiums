var Seeder = require('../../helpers/seeder');
var BarclaysCenter = {
  name: 'Barclays Center',
  sport: ['Basketball', 'Hockey'],
  league: ['NBA', 'NHL'],
  detail: {
    team: ['Broolklyn Nets', 'New York Islanders'],
    capacity: 17732,
    opened: new Date('09/21/2012'),
    architect: 'AECOM (Ellerbe Becket)',
    location: 'Brooklyn, New York',
    images: [
      'http://i.huffpost.com/gen/1000397/images/o-BARCLAYS-SEATING-JEWS-facebook.jpg',
      'https://cbsnewyork.files.wordpress.com/2015/07/barclays-center-islanders-vs-devils-preseason.jpg',
      'http://parsonscorp.com/wp-content/uploads/2013/03/SHoP_Barclays-Center_pho_Bruce-Damonte_3.jpg',
      'http://www.crainsnewyork.com/apps/pbcsi.dll/storyimage/CN/20151202/ENTERTAINMENT/151209965/AR/0/Brooklyn-Nets-Barclays-Center.jpg',

    ]
  }
};
Seeder(BarclaysCenter);
