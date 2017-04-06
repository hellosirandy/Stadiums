var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Golden 1 Center',
  sport: ['Basketball'],
  league: ['NBA'],
  detail: {
    team: ['Sacramento Kings'],
    capacity: 17608,
    opened: new Date('09/30/2016'),
    architect: 'AECOM',
    location: 'Sacramento, California',
    images: [
      'http://i.cdn.turner.com/drp/nba/kings/sites/default/files/styles/hi_res_full_width/public/g1ctech_blog_lrg.jpg?itok=sAjRYje1',
      'https://i.ytimg.com/vi/zolJ2Zxr2FY/maxresdefault.jpg',
      'https://tribfox40.files.wordpress.com/2016/09/g1c-suite-view.jpg?quality=85&strip=all&w=1200',
      'http://i.cdn.turner.com/drp/nba/kings/sites/default/files/styles/hi_res_full_width/public/press-release-equality-night.jpg?itok=j3uTrIT0',
      'http://i.cdn.turner.com/drp/nba/kings/sites/default/files/styles/hi_res_full_width/public/kingsg1cblog_lrg.jpg?itok=7kuPZstb',
      'http://i.cdn.turner.com/drp/nba/kings/sites/default/files/styles/hi_res_full_width/public/tech-release-lrg.jpg?itok=SkWiHpVM',
      'http://www.golden1center.com/assets/img/G1Ccom_SuitesLoftsHeader-6fbede7152.jpeg',

    ]
  }
}
Seeder(stadium);
