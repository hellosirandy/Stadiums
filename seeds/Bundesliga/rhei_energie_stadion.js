var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'RheinEnergieStadion',
  sport: ['Football'],
  league: ['Bundesliga'],
  detail: {
    team: ['1. FC Köln'],
    capacity: 49968,
    opened: new Date('09/16/1923'),
    architect: 'Gerkan, Marg und Partner',
    location: 'Cologne, Germany',
    images: [
      'https://pbs.twimg.com/media/C8PvYRpXYAA1k5g.jpg',
      'http://www.rheinenergiestadion.de/en/wp-content/themes/rheinenergie/images/RheinEnergieStadion.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/7/71/RheinEnergieStadion_Köln_001.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/e/ee/RheinEnergieStadion_%28Müngersdorfer_Stadion%29_Südseite.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/f/f0/RheinEnergieStadion_%28Müngersdorfer_Stadion%29_Nordseite_Nahaufnahme_HDR.jpg',
      'http://odis.greven.de/cms/media/archive/nline_002/freizeit/stadion_02_gross.jpg',
      'http://farm3.static.flickr.com/2461/3836995038_355532c007_b.jpg',
      
    ]
  }
}
Seeder(stadium);
