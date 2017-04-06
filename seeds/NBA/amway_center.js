var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Amway Center',
  sport: ['Basketball'],
  league: ['NBA'],
  detail: {
    team: ['Orlando Magic'],
    capacity: 18846,
    opened: new Date('10/01/2010'),
    architect: 'Populous',
    location: 'Orlando, Florida',
    images: [
      'http://stadiumparkingguides.com/wp-content/uploads/2014/12/Orlando-ExternalPicture.jpg',
      'https://i.ytimg.com/vi/VF-NJrKUvnc/maxresdefault.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/1/13/Amway_CENTER5.jpg',
      'http://i1011.photobucket.com/albums/af237/SimonV2010/Amway_Center_Main_Bowl_5.jpg',
      'http://www.panelite.us/wp-content/uploads/2013/07/Panelite-ClearShade-Exterior-Facade-Curtain-Wall-Glazing-Orlando-Arena-Populous-1.jpg',
      'https://www.nanawall.com/files/images/1024x420_sl25_sl45_orlando_magic_arena_fl_05_0.jpg',
      'https://www.nanawall.com/files/projects/1024x768_SL25_SL45_Orlando_Magic_Arena_FL_03.jpg',
      
    ]
  }
}
Seeder(stadium);
