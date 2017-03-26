var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Raymond James Stadium',
  sport: ['Football'],
  league: ['NFL'],
  detail: {
    team: ['Tampa Bay Buccaneers'],
    capacity: 65890,
    opened: new Date('09/20/1998'),
    architect: 'Populous',
    location: 'Tampa, Floriday',
    images: [
      'https://etvluee.cloudimg.io/s/cdn/x/http://www.bing.com/cr?IG=76AFBF10EA854F78BEAE1FFDDAFEC972&CID=36BE7719517E6E941EBE7D14504F6F53&rd=1&h=rqqmd00yHfj9tVe_RnArcG9A-MOFtFSwWert_t0TFYw&v=1&r=http%3A%2F%2Fwww.info-stades.fr%2Fuploads%2Fstades%2Ftampa-raymond-james-stadium-67803.jpg&p=DevEx,5008.1',
      'http://www.stadiumsofprofootball.com/wp-content/uploads/2016/07/raymond16_top.jpg',
      'http://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2016/07/21/raymond-james-stadium-960-renovations.jpg?itok=RXiOwn_s',
      'https://static.rukkus.com/venue/images/Raymond_James_Stadium-1337.jpg',
      'http://www.tbo.com/storyimage/TB/20151205/ARTICLE/151209600/AR/0/AR-151209600.jpg',
      'http://www.tbo.com/storyimage/TB/20151202/ARTICLE/151209895/EP/1/2/EP-151209895.jpg'
    ]
  }
}
Seeder(stadium);
