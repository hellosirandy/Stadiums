var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Nathionwide Arena',
  sport: ['Hockey'],
  league: ['NHL'],
  detail: {
    team: ['Columbus Blue Jackets'],
    capacity: 18500,
    opened: new Date('09/09/2000'),
    architect: '360 Architecture',
    location: 'Columbus, Ohio',
    images: [
      'https://static.rukkus.com/venue/images/Nationwide_Arena-1365.jpg',
      'http://b24df67fe721efca0029-1e8337ca5e2ffc27aec9c46a8aacdc9c.r28.cf1.rackcdn.com/lps/assets/u/Nationwide-Arena-1.jpg',
      'https://i.ytimg.com/vi/IQMaOweF5M0/maxresdefault.jpg',
      'http://3951-presscdn-28-25.pagely.netdna-cdn.com/wp-content/uploads/2009/10/Nationwide-Arena-elisalou_designs.jpg',
      'https://c1.staticflickr.com/4/3693/11346659174_fd1d684c81_b.jpg',
      'https://u.osu.edu/explorecolumbus/files/2016/12/nationwidefinal-1lqn889.jpg',
      'http://www.trbimg.com/img-57be5bf9/turbine/sdut-the-rink-at-nationwide-arena-is-20160824',
      
    ]
  }
}
Seeder(stadium);
