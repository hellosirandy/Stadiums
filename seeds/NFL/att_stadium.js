var Seeder = require('../../helpers/seeder');
var ATTStadium = {
  name: 'AT&T Stadium',
  sport: ['Football'],
  league: ['NFL'],
  detail: {
    team: ['Dallas Cowboys'],
    capacity: 100000,
    opened: new Date('05/27/2009'),
    architect: 'HKS, Inc.',
    location: 'Arlington, Texas',
    images: [
      'http://stadiumparkingguides.com/wp-content/uploads/2014/11/att-stadium-aerial-night-cowboys-att-stadium-dallas-cowboys-stadium-the-boys-are-back-2014.jpg',
      'https://i.gse.io/gse_media/114/7/1408722578-cowboys-stadium1.jpeg?p=1',
      'http://medias.photodeck.com/10225c43-2e38-4f18-9518-9ea6f0423053/06-08-2015-0982_xgaplus.jpg',
      'https://sportsdaydfw.imgix.net/1479852421-NS_21allenU.jpg',
      'https://res.cloudinary.com/simpleview/image/upload/crm/fortworth/James-Smith-Dallas-Cowboys3_a0dc6a25-5056-a348-3a3cec8469f0a09a.jpg',
      'http://www.missopen.com/wp-content/uploads/2015/10/ATT-Stadium-Man-Shot-Outside-Venue-After-Cowboys-Patriots-Game-Dies-From-Injuries.jpg',
    ]
  }
};
Seeder(ATTStadium);
