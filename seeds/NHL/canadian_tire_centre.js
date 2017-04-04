var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Canadian Tire Centre',
  sport: ['Hockey'],
  league: ['NHL'],
  detail: {
    team: ['Ottawa Senators'],
    capacity: 18694,
    opened: new Date('01/15/1996'),
    architect: 'Rossetti architects',
    location: 'Ottawa, Ontario',
    images: [
      'https://c2.staticflickr.com/8/7015/13491837443_ee27722a75_b.jpg',
      'http://wpmedia.ottawacitizen.com/2015/12/ottawa-ontario-january-7-2014-exterior-of-canadian-ti.jpeg',
      'http://www.thesportsroadtrip.com/ottawa0366.jpg',
      'http://wpmedia.ottawacitizen.com/2015/09/workers-continue-construction-on-club-bell-seating-area-at-t1.jpeg?quality=55&strip=all',
      'http://wpmedia.ottawacitizen.com/2015/09/private-fan-seating-areas-called-loges-are-pictured-during-a1.jpeg?quality=55&strip=all',
      'https://www.thestar.com/content/dam/thestar/sports/leafs/2014/10/22/nhl_looking_into_whether_leafssens_game_will_go_ahead_in_ottawa_as_scheduled/canadian_tire_centre.jpg',
      
    ]
  }
}
Seeder(stadium);
