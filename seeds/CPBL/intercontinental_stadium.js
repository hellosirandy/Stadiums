var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Taichung Intercontinental Baseball Stadium',
  sport: ['Baseball'],
  league: ['CPBL'],
  detail: {
    team: ['Chinatrust Brothers'],
    capacity: 20000,
    opened: new Date('2006/11/09'),
    architect: '羅興華建築師事務所',
    location: 'Taichung City, Taiwan',
    images: [
      'http://static.panoramio.com/photos/original/5087810.jpg',
      'http://www.tibs.com.tw/cache/com_z2/CM_334203c7040e7f84b91ce90e4d37ef79_4.jpg',
      'http://travel.taichung.gov.tw/Utility/DisplayImage?id=12531',
      'https://i.ytimg.com/vi/_IFRe5Zbe3g/maxresdefault.jpg',
      'http://www.tfdf.org.tw/Uploads/Item/e0150dfc-29b1-4a6c-b08f-317ed9dce011.jpg',

    ]
  }
}
Seeder(stadium);
