var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Metlife Stadium',
  sport: ['Football'],
  league: ['NFL'],
  detail: {
    team: ['New York Giants', 'New York Jets'],
    capacity: 82500,
    opened: new Date('04/10/2010'),
    architect: '360 Architecture',
    location: 'East Rutherford, New Jersey',
    images: [
      'http://i.axs.com/2014/08/promoted-media-optimized_53f38e8b2e11a.jpg',
      'http://assets.hightimes.com/metlife-stadium-pot-ads.jpg',
      'http://mms.businesswire.com/bwapps/mediaserver/ViewMedia?mgid=304465&vid=5',
      'http://www.stadiumsofprofootball.com/wp-content/uploads/2016/07/metlifegiants2012955.jpg',
      'http://aviewfrommyseat.com/photos/Nick25-20101114163800.jpg',
      'http://www.athleticbusiness.com/images/gallery/large/80-79NMS5[1].jpg',
      'http://www.stadiumsofprofootball.com/wp-content/uploads/2016/07/metlifegiants957.jpg'
    ]
  }
}
Seeder(stadium);
