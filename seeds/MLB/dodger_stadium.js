var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Dodger Stadium',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Los Angeles Dodgers'],
    capacity: 56000,
    opened: new Date('04/10/1962'),
    architect: 'Praeger-Kavanagh-Waterbury',
    location: 'Los Angeles, California',
    images: [
      'http://orbicair.com/images/F28562772.jpg',
      'http://a.scpr.org/i/6628902beafe8cfbaec398adab1ec655/81838-full.jpg',
      'https://cdn0.vox-cdn.com/uploads/chorus_image/image/48156639/03_2013_DODGER_STADIUM.0.0.jpg',
      'http://huntconstructiongroup.com/wp-content/uploads/2013/07/dodger-stadium-1.jpg',
      'https://c2.staticflickr.com/4/3297/3298513051_d6192c7219_z.jpg?zz&#x3D;1',

    ]
  }
}
Seeder(stadium);
