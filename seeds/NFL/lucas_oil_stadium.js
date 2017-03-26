var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Lucas Oil Stadium',
  sport: ['Football'],
  league: ['NFL'],
  detail: {
    team: ['Indianapolis Colts'],
    capacity: 62421,
    opened: new Date('08/16/2008'),
    architect: 'HKS, Inc.',
    location: 'Indianapolis, Indiana',
    images: [
      'http://www.hksinc.com/wp-content/uploads/lucas-oil-stadium-11-1200x466.jpg',
      'http://huntconstructiongroup.com/wp-content/uploads/2013/07/lucas-oil-stadium-5.jpg',
      'https://www.theclio.com/web/ul/22362.46793.jpg',
      'http://cdnfiles.hdrcreme.com/2811/original/lucas-oil-stadium.jpg?1426883668',
      'http://www.electricroundtable.com/picture/_dsc2234.jpg?pictureId=6608970',
      'http://www.walterpmoore.com/sites/default/files/styles/img-project-slider/public/imagery_20/Imagery/%21Best%2009454_066.jpg?itok=SHRsW5g3&c=a208e4e1fe84355e13f40bcaa8ee5fc2',
      'https://www.rateyourseats.com/shared/Lucas-Oil-Stadium-Section-433-Row-10-on-10-25-2015k.jpg',
      'https://www.rateyourseats.com/shared/Lucas-Oil-Stadium-Section-420-Row-10-on-10-25-2015k.jpg',

    ]
  }
}
Seeder(stadium);
