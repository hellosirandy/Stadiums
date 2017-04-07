var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Olympiastadion Berlin',
  sport: ['Football'],
  league: ['Bundesliga'],
  detail: {
    team: ['Hertha BSC'],
    capacity: 74475,
    opened: new Date('08/01/1936'),
    architect: 'Werner March/Albert Speer',
    location: 'Berlin, Germany',
    images: [
      'http://traveldigg.com/wp-content/uploads/2016/08/Olympiastadion-Berlin-During-The-Game.jpg',
      'https://www.fiylo.de/media/olympiastadion-events-gallery-08-852640.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/4/49/Berlin_Olympiastadion_during_footballmatch_hertha_bsc_berlin_vs_borussia_dortmund_02_20070421.jpg',
      'http://meros.org/uploads/gallery/53/49/99/53c49799e27aafa5f28b2043ad83c63f.jpg',
      'http://meros.org/en/wonder/avatar?id=738',
      'https://de.fiylo.com/media/olympia-gallery-03-a4cd16.jpg',
      'https://www.meetingsbooker.com/images/venues/Olympiastadion-Berlin-1.jpg',

    ]
  }
}
Seeder(stadium);
