var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Joe Louis Arena',
  sport: ['Hockey'],
  league: ['NHL'],
  detail: {
    team: ['Detroit Red Wings'],
    capacity: 20027,
    opened: new Date('12/12/1979'),
    architect: 'SmithGroupJJR',
    location: 'Detroit, Michigan',
    images: [
      'http://3951-presscdn-28-25.pagely.netdna-cdn.com/wp-content/uploads/2013/10/Joe-Louis-Arena-Ice-Surface.jpg',
      'http://c1038.r38.cf3.rackcdn.com/group1/building6786/media/joe_louis_arena.jpg',
      'https://cdn-s3.si.com/images/joe-louis-arena-red-wings-nhl-1300.jpg',
      'https://i.ytimg.com/vi/IG9f_6tL4Tk/maxresdefault.jpg',
      'https://s-media-cache-ak0.pinimg.com/originals/d8/c3/fc/d8c3fc068709463680be9726f8efab90.jpg',
      
    ]
  }
}
Seeder(stadium);
