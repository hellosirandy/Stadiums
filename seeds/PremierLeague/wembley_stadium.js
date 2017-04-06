var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Wembley Stadium',
  sport: ['Football'],
  league: ['Premier League'],
  detail: {
    team: ['Tottenham Hotspur'],
    capacity: 90000,
    opened: new Date('03/09/2007'),
    architect: 'Populous',
    location: 'Wembley, London',
    images: [
      'https://essma.eu/member/images/members_gallery/wembley5.jpg',
      'https://s-media-cache-ak0.pinimg.com/originals/ac/29/ec/ac29ec43a0fa34185409536e92d0efcd.jpg',
      'http://www.fosterandpartners.com/media/1716855/Img5.jpg',
      'https://www.virginexperiencedays.co.uk/content/img/product/large/wembley-stadium-tour-for-06163250.jpg',
      'http://www.fosterandpartners.com/media/1716840/Img1.jpg',
      'https://cdn.getyourguide.com/niwziy2l9cvz/5XAwngQ8OQuIsQKQ8A8EMs/583501823f706edd2137f33a534f91cf/london-wembley-1500x830.jpg',
      'http://sites.psu.edu/mindthegap/wp-content/uploads/sites/5736/2013/10/wembley_stadium_london_by_nightline-d2mra5g.jpg',

    ]
  }
}
Seeder(stadium);
