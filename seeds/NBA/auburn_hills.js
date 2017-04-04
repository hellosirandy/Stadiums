var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'The Palace of The Auburn Hills',
  sport: ['Basketball'],
  league: ['NBA'],
  detail: {
    team: ['Detroit Pistons'],
    capacity: 19971,
    opened: new Date('08/13/1998'),
    architect: 'Rossetti Architects',
    location: 'Auburn Hills, Michigan',
    images: [
      'http://static.panoramio.com/photos/original/1395861.jpg',
      'http://static.panoramio.com/photos/original/2752754.jpg',
      'https://photos.smugmug.com/A-visual-history-of-the-Palace/i-xV82SvC/0/XL/M991206VGThePalaceofAuburn-XL.jpg',
      'http://www.crainsdetroit.com/apps/pbcsi.dll/storyimage/CD/20150323/NEWS/150329947/AR/0/AR-150329947.jpg&MaxW=1400&MaxH=1400',
      'http://cloud.chambermaster.com/userfiles/UserFiles/chambers/1571/Image/photo.JPG',
      
    ]
  }
}
Seeder(stadium);
