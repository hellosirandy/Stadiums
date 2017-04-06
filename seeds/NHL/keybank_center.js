var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'KeyBank Center',
  sport: ['Hockey'],
  league: ['NHL'],
  detail: {
    team: ['Buffalo Sabres'],
    capacity: 19070,
    opened: new Date('09/21/1996'),
    architect: 'Ellerbe Becket',
    location: 'Buffalo, New York',
    images: [
      'https://pbs.twimg.com/media/C7m16JdWkAIqRDx.jpg',
      'https://nhl.bamcontent.com/images/photos/282274398/1136x640/cut.jpeg',
      'https://1.bp.blogspot.com/-5vkdhg2bFV8/V1DdLDbka-I/AAAAAAAAnKo/Xkf_ysU0HiwqSrpRbASu-yV2P2AwkoM2wCLcB/s1600/ScreenHunter_3373%2BJun.%2B02%2B20.27.jpg',
      'https://www.rateyourseats.com/inseat/hsbc-arena-nhl-226-800x600.jpg',
      'https://s3-media1.fl.yelpcdn.com/bphoto/8lwVYP0H66DB3FSuFLsQ9A/o.jpg',
      'https://stadiumsandarenas.files.wordpress.com/2009/07/91.jpg',
      
    ]
  }
}
Seeder(stadium);
