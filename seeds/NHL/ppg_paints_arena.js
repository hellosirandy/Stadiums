var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'PPG Paints Arena',
  sport: ['Hockey'],
  league: ['NHL'],
  detail: {
    team: ['Pittsburgh Penguins'],
    capacity: 18387,
    opened: new Date('08/18/2010'),
    architect: 'Populous',
    location: 'Pittsburgh, Pennsylvania',
    images: [
      'http://mms.businesswire.com/bwapps/mediaserver/ViewMedia?mgid=243039&vid=5',
      'http://www.hendriksvisitedstadiums.com/gallery/dsc01313.jpg',
      'https://stadiumsandarenas.files.wordpress.com/2016/03/41451.jpg',
      'https://nhl.bamcontent.com/images/photos/282370270/1024x576/cut.jpg',
      'http://mediaweb.wpxi.com/photo/2016/10/13/GettyImages-614387584_20161014013934192_6342400_ver1.0_1280_720.jpg',
      'https://d13csqd2kn0ewr.cloudfront.net/uploads/image/file/178859/cropped_GettyImages-530293128.jpg?ts=1475595473',
      'https://nhl.bamcontent.com/images/photos/286962152/1024x576/cut.jpg',
      
    ]
  }
}
Seeder(stadium);
