var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Levi\'s stadium',
  sport: ['Football'],
  league: ['NFL'],
  detail: {
    team: ['San Francisco 49ers'],
    capacity: 68500,
    opened: new Date('07/17/2014'),
    architect: 'HNTB',
    location: 'San Francisco, California',
    images: [
      'https://sanjosesiliconvalley.house.hyatt.com/content/dam/PropertyWebsites/house/sjcxj/Media/All/Hyatt-House-Santa-Clara-W001-Levis-Stadium.gallery-2-3-item-panel.jpg',
      'http://a.fssta.com/content/dam/fsdigital/fscom/nfl/images/2014/08/18/081814-nfl-Levis-Stadium-pi-mp.vresize.1200.675.high.24.jpg',
      'http://seatingchartview.com/wp-content/uploads/2014/04/Levis-Stadium.png',
      'http://assets.inhabitat.com/wp-content/blogs.dir/1/files/2016/02/Levis-Stadium-Superbowl-Interior-1020x610.jpg',
      'http://assets.inhabitat.com/wp-content/blogs.dir/1/files/2016/02/Levis-Stadium-Superbowl-49ers.jpg',
      'https://i.ytimg.com/vi/1upyX2ujm2A/maxresdefault.jpg',
      'http://cdn.abclocal.go.com/content/kgo/images/cms/266974_1280x720.jpg',
      
    ]
  }
}
Seeder(stadium);
