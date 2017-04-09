var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Bay Arena',
  sport: ['Football'],
  league: ['Bundesliga'],
  detail: {
    team: ['Bayer Leverkusen'],
    capacity: 30210,
    opened: new Date('08/02/1958'),
    architect: 'Max Bogl',
    location: 'Leverkusen, Germany',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/BayArena_neu_2009.jpg/1200px-BayArena_neu_2009.jpg',
      'http://farm4.static.flickr.com/3436/3820883760_4fea683633_b.jpg',
      'http://www.triumph-adler.com/C125712200447418/vwLookupDownloads/Bayernarena_mit_TA-Lounge.jpg/$FILE/Bayernarena_mit_TA-Lounge.jpg',
      'http://static.panoramio.com/photos/large/4265678.jpg',
      'http://www.sbp.de/fileadmin/sbp.de/projects/570DD578827F2D72C1257E750036D1FC_0_1_2497_1623_a_MAX.jpg',
      'http://www.sbp.de/fileadmin/sbp.de/projects/AD0D276FD92BC59AC1257E750036D28A_0_1_2497_1623_b_MAX.jpg'
    ]
  }
}
Seeder(stadium);
