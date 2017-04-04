var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Toyota Center',
  sport: ['Basketball'],
  league: ['NBA'],
  detail: {
    team: ['Houston Rockets'],
    capacity: 18055,
    opened: new Date('10/6/2003'),
    architect: 'Populous',
    location: 'Houston, Texas',
    images: [
      'http://www.manicaarchitecture.com/paperclip/projects/22/151/medium/Toyota_Center_Great_Dusk_Shot.jpg',
      'http://www.ldsystems.com/wp-content/uploads/2014/11/LD-Systems-Toyota-Center-LAcoustics-1.jpg',
      'http://www.psam.uk.com/wp-content/uploads/2014/11/Toyota_Center_game.jpg',
      'http://www.theuntz.com/media/member/6/6/5/66517/houston-toyota-center.jpg',
      'https://i.ytimg.com/vi/IuOa7fqVkp0/maxresdefault.jpg',
      'https://www.rateyourseats.com/shared/Toyota-Center-Section-407-Row-6-on-4-14-2014k.jpg',

    ]
  }
}
Seeder(stadium);
