var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Arrowhead Stadium',
  sport: ['Football'],
  league: ['NFL'],
  detail: {
    team: ['Kansas City Chiefs'],
    capacity: 76416,
    opened: new Date('08/12/1972'),
    architect: 'Kivett and Myers',
    location: 'Kansas City, Missouri',
    images: [
      'http://images.performgroup.com/di/library/sporting_news/6f/a/arrowhead-stadium-071615-getty-ftrjpg_3hgjfgrfd0ic1tkq8c9ts0sdz.jpg?t=-1744945482',
      'https://i.ytimg.com/vi/pCvMJBwzHL4/maxresdefault.jpg',
      'http://su2016.thedude.oucreate.com/wp-content/uploads/2015/09/arrowhead-2.jpg',
      'https://cdn0.vox-cdn.com/thumbor/wZqzTi91-_ahsqwQ_J99MOmVntY=/0x5:6016x4016/1310x873/cdn0.vox-cdn.com/uploads/chorus_image/image/52195545/usa_today_9564589.0.jpeg',
      'https://i.ytimg.com/vi/f0Wi9qTANn4/maxresdefault.jpg',
      'https://s-media-cache-ak0.pinimg.com/originals/f5/69/4b/f5694b7d34370ee1b76886fc94b74faa.jpg',

    ]
  }
}
Seeder(stadium);
