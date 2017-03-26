var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Ford Field',
  sport: ['Football'],
  league: ['NFL'],
  detail: {
    team: ['Detroit Lions'],
    capacity: 65000,
    opened: new Date('08/24/2002'),
    architect: 'Rossetti Architects',
    location: 'Detroit, Michigan',
    images: [
      'https://s-media-cache-ak0.pinimg.com/originals/c4/7e/6a/c47e6ae25f4d5f38d8db02ecc07013f0.jpg',
      'http://www.fordfield.com/assets/img/ford-field-about-exterior-fd6f90c046.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/1/17/Ford_Field_NFL_Lions-Interior.jpg',
      'http://www.fordfield.com/assets/img/About-FF-CP-FF-68775a834a.jpg',
      'http://media.mlive.com/lions_impact/photo/ford-field-41fdf46c97c8131fjpg-f73bf04f64467cbc.jpg',
      'http://assets2.sportsnet.ca/wp-content/uploads/2014/11/ford_field-1040x572.jpg',

    ]
  }
}
Seeder(stadium);
