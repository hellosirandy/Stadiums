var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Bradley Center',
  sport: ['Basketball'],
  league: ['NBA'],
  detail: {
    team: ['Milwaukee Bucks'],
    capacity: 18717,
    opened: new Date('10/01/1988'),
    architect: 'Populous',
    location: 'Milwaukee, Wisconsin',
    images: [
      'http://media.jrn.com/images/34445943-mjs_arena_4.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Bradley_Center_NE_Entrance.jpg/1200px-Bradley_Center_NE_Entrance.jpg',
      'https://etvluee.cloudimg.io/s/cdn/x/http://www.bing.com/cr?IG=CEF4702EE1124E888AAF2510100B44AF&CID=2CFDEB9F201669F01E62E192212768AD&rd=1&h=AfYe30FZHGMQebxLtCyW-BTs0By3o7L8XtLmY01JTdM&v=1&r=http%3A%2F%2Fwww.info-stades.fr%2Fuploads%2Fstades%2Fmilwaukee-bradley-center-84572.jpg&p=DevEx,5014.1',
      'https://static.rukkus.com/venue/images/BMO_Harris_Bradley_Center-1265.jpg',
      'http://urbanmilwaukee.com/wp-content/gallery/kilbourn-town/jun4a-206.jpg',
      
    ]
  }
}
Seeder(stadium);
