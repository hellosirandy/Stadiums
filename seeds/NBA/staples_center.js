var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Staples Center',
  sport: ['Basketball', 'Hockey'],
  league: ['NBA', 'NHL'],
  detail: {
    team: ['Los Angeles Lakers', 'Los Angeles Clippers', 'Los Angeles Kings'],
    capacity: 19060,
    opened: new Date('10/17/1999'),
    architect: 'NBBJ',
    location: 'Los Angeles, California',
    images: [
      'http://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2016%2F0322%2Fr66147_1296x729_16%2D9.jpg',
      'http://famouswonders.com/wp-content/uploads/2010/10/StaplesCenter.jpg',
      'http://www.themarkeworld.com/wp-content/uploads/2015/04/Pregame-at-Staples-Center.jpg',
      'https://www.omnihotels.com/-/media/images/globals/cityshots/los-angeles-staples-center.png?h=660&la=en&w=1170',
      'https://i.ytimg.com/vi/9TpBqR6kYnU/maxresdefault.jpg',
      'http://www.dankilcoyne.com/wp-content/uploads/2013/12/LakersV1.jpg',
      'http://www.slamonline.com/wp-content/uploads/2016/07/clips.jpg',
      'https://chairnerd.global.ssl.fastly.net/images/performers-landscape/los-angeles-clippers-1d4c70/2109/1920x1200.jpg',
      'http://www.xoxolizza.com/wp-content/uploads/2013/12/20131207_205645_resized.jpg',
      'http://www.letsgokings.com/gallery/files/1/_mg_5753.jpg',
      'https://i.ytimg.com/vi/QGqdWccZRls/maxresdefault.jpg',
      
    ]
  }
}
Seeder(stadium);
