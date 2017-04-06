var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Etihad Stadium',
  sport: ['Football'],
  league: ['Premier League'],
  detail: {
    team: ['Manchester City F.C.'],
    capacity: 55097,
    opened: new Date('07/25/2002'),
    architect: 'ArupSport',
    location: 'Manchester, England',
    images: [
      'https://www.meetingsbooker.com/images/venues/Etihad-Stadium-1.jpg',
      'http://www.mcfcwatch.com/wp-content/uploads/2016/02/etihad2016.jpg',
      'http://traveldigg.com/wp-content/uploads/2016/08/Etihad-Stadium-Photo-From-Top.jpg',
      'http://philipchun.com/wp-content/uploads/2015/06/Etihad-PB.jpg',
      'http://www.melbournevictory.com.au/di/library/Melbourne_Victory/9e/14/etihad-stadium_faipax7qf9i217vdhbo93e6tj.jpg?t=1556214913',
      'https://media.timeout.com/images/101744979/image.jpg',
      'http://www.sportsbucketlist.net/wp-content/uploads/2016/01/IMG_1462-1038x779.jpg',
      
    ]
  }
}
Seeder(stadium);
