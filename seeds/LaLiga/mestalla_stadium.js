var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Mestalla Stadium',
  sport: ['Football'],
  league: ['La Liga'],
  detail: {
    team: ['Valencia Club de Fútbol'],
    capacity: 55000,
    opened: new Date('1923/05/20'),
    architect: 'Francisco Almenar Quinzá',
    location: 'Valencia, Spain',
    images: [
      'https://www.pes-patch.com/wp-content/uploads/2015/10/Mestalla-Stadium-Updated-15-16-Season-by-Tizziano-1.jpg',
      'https://farm4.staticflickr.com/3906/15120597522_4f5cbe02d5_b.jpg',
      'http://www.espanarusa.com/files/autoupload/50/74/94/5cjp55ek256939.jpg.[pr].jpg',
      'http://www.centrocampista.com/wp-content/uploads/2012/06/panopequemes.jpg',
      'http://www.network.valenciacf.cz/images/mestalla/mestalla4.jpg',
      'http://i.imgur.com/Bmr2sAl.jpg',
      
    ]
  }
}
Seeder(stadium);
