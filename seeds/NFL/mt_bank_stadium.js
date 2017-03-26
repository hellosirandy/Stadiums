var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'M&T Bank Stadium',
  sport: ['Football'],
  league: ['NFL'],
  detail: {
    team: ['Baltimore Ravens'],
    capacity: 71008,
    opened: new Date('09/06/1998'),
    architect: 'Populous',
    location: 'Baltimore, Maryland',
    images: [
      'http://www.stadiumsofprofootball.com/wp-content/uploads/2016/07/mtbank16_bottom-1024x768.jpg',
      'https://cdn0.vox-cdn.com/thumbor/_nmIhc-T5fkODd_TlIgqlEHlYaw=/1x0:999x665/1200x800/filters:focal(1x0:999x665)/cdn0.vox-cdn.com/photo_images/5251378/137108838.jpg',
      'http://gridironstadiumnetwork.com/wp-content/uploads/2010/12/Stadium101605AZ-1024x683.jpg',
      'http://www.hcea.com/wp-content/uploads/2016/05/mt-bank-stadium.jpg',
      'https://www.suiteexperiencegroup.com/wp-content/themes/responsive/images/00000032-01.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkPOpxJcw_0RCL0XcoqZUSeDmeuzjdLd2Ow7Ev07XEQCUiosWR',
      'http://ps3media.ign.com/ps3/image/article/116/1164606/madden-nfl-12-20110427110313182.jpg',

    ]
  }
}
Seeder(stadium);
