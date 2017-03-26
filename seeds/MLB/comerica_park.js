var Seeder = require('../../helpers/seeder');
var ComericaPark = {
  name: 'Comerica Park',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Detroit Tigers'],
    capacity: 41297,
    opened: new Date('04/11/2000'),
    architect: 'International Facilities Group',
    location: 'Detroit, Michigan',
    images: [
      'https://c2.staticflickr.com/4/3536/3803216695_ec856574a5_b.jpg',
      'https://www.rateyourseats.com/shared/Comerica-Park-Section-115-Row-30_1-on-7-9-2014_S.jpg',
      'https://www.rateyourseats.com/shared/Comerica-Park-Section-112-Row-27_1-on-7-9-2014_S.jpg',
      'https://c1.staticflickr.com/7/6064/6053583140_802c1cda79_b.jpg',
      'https://img.clipartfox.com/c5799b3f4a982e56179209f1cf01fb0b_detroit-tigers-comerica-park-clipart_2000-1333.jpeg',
      'https://mlblogssnaggingbaseballs.files.wordpress.com/2011/09/3_zack_catching_ball5598.jpg',
      
    ]
  }
}
Seeder(ComericaPark);
