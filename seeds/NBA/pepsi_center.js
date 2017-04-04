var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Pepsi Center',
  sport: ['Basketball', 'Hockey'],
  league: ['NBA', 'Hockey'],
  detail: {
    team: ['Denver Nuggets', 'Colorado Avalanche'],
    capacity: 19155,
    opened: new Date('10/01/1999'),
    architect: 'Populous',
    location: 'Colorado Avalanche',
    images: [
      'http://b-i.forbesimg.com/morganbrennan/files/2013/12/cut-226-pepsi-center2.jpg',
      'http://stadiumparkingguides.com/wp-content/uploads/2014/09/pepsi-center-parking-1024x419.jpg',
      'https://i.ytimg.com/vi/4cDM-rx-Dj8/maxresdefault.jpg',
      'http://stadiums.at.ua/_nw/43/65806886.jpg',
      'http://www.net4info.de/cpg/albums/userpics/Pepsi_Center_denver.jpg',
      'https://www.vettix.org/images/events/12587img17.jpg',
      'https://www.vettix.org/images/events/12587img18.jpg'
    ]
  }
}
Seeder(stadium);
