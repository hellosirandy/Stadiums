var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Gila River Arena',
  sport: ['Hockey'],
  league: ['NHL'],
  detail: {
    team: ['Phoenix Coyotes'],
    capacity: 17125,
    opened: new Date('12/26/2003'),
    architect: 'Populous',
    location: 'Glendale, Arizona',
    images: [
      'http://ampthemag.com/wp-content/uploads/2015/07/Gila-River-Arena.jpg',
      'https://etvluee.cloudimg.io/s/cdn/x/http://www.bing.com/cr?IG=C88FFBF0EF0F4E81BDBEBB26FDF66983&CID=0D76EE4398F7649D200BE44D99C665A4&rd=1&h=CVJhTb6SaCcCtoa0-wK_dYb3pSCIqf2_OKO8O0hfyU8&v=1&r=http%3A%2F%2Fwww.ampthemag.com%2Fwp-content%2Fuploads%2F2015%2F06%2FArizona-Coyotes_Gila-River-Arena.jpg&p=DevEx,5014.1',
      'https://c2.staticflickr.com/4/3937/15729943772_3ae0152d3f_b.jpg',
      'http://farm8.staticflickr.com/7051/7140161467_0409362633_o.jpg',
      'http://assets3.sportsnet.ca/wp-content/uploads/2014/09/coyotes_arena-1040x572.jpg',
      
    ]
  }
}
Seeder(stadium);
