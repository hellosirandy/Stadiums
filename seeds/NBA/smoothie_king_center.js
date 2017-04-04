var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Smoothie King Center',
  sport: ['Basketball'],
  league: ['NBA'],
  detail: {
    team: ['New Orleans Pelicans'],
    capacity: 16867,
    opened: new Date('10/29/1999'),
    architect: 'Arthur Q. Davis and Partners',
    location: 'New Orleans, Louisiana',
    images: [
      'https://i.ytimg.com/vi/iqX86xs2pSc/maxresdefault.jpg',
      'http://www.smoothiekingcenter.com/assets/img/23.jpg',
      'https://lh6.googleusercontent.com/BO4GocPsvCD-GHdpH3WE6yeGGYWwmWFPwola3NVI7ofJ4jxA6Ac2Pw6njCkLKD8KKPA8lEjjpbvvJ-Ph0iRccQdAOBOBIISpHcWXU_GI8BU_5bI-o5fr4QY761gMZ_BKfg',
      'http://www.neworleanshamptoninns.com/resourcefiles/mainimages/smoothiekingcenter.jpg',
      'http://www.smoothiekingcenter.com/assets/img/suite-3.jpg',
      'http://infinitescale.com/static/media/uploads/work_items/noa/noa-16.jpg'
    ]
  }
}
Seeder(stadium);
