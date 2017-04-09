var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Opel Arena',
  sport: ['Football'],
  league: ['Bundesliga'],
  detail: {
    team: ['1. FSV Mainz 05'],
    capacity: 34034,
    opened: new Date('07/03/2011'),
    architect: 'agn Niederberghaus & Partner',
    location: 'Mainz, Germany',
    images: [
      'https://opelpost.com/wp-content/uploads/2016/08/20160804_HA_053.jpg',
      'https://i.ytimg.com/vi/9fBkrUPy__I/maxresdefault.jpg',
      'http://www.mainz05.de/mainz05/typo3temp/pics/77d7aea927.jpg',
      'https://i.ytimg.com/vi/c6Rnq7wn6Hw/maxresdefault.jpg',
      'http://www.hendriksvisitedstadiums.com/gallery/Mainz05---26_7j5d98cs.jpg',
      'http://www.gmcyukonmedia.com/dld/content/dam/Media/images/_MEDIALIVE_/INTL/Opel/2016/august/08-03-opel-arena/Opel-Arena-297020.jpg',
      'https://i.ytimg.com/vi/ifmjASDHXOg/maxresdefault.jpg',
      
    ]
  }
}
Seeder(stadium);
