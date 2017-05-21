var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Taoyuan International Baseball Stadium',
  sport: ['Baseball'],
  league: ['CPBL'],
  detail: {
    team: ['Lamigo Monkeys'],
    capacity: 20000,
    opened: new Date('2009/12/12'),
    architect: '陳信樟建築師事務所',
    location: 'Taoyuan City, Taiwan',
    images: [
      'http://www.tycg.gov.tw/fckdowndoc?file=/%E6%A3%92%E7%90%83%E5%A0%B4.jpg&flag=pic',
      'http://travel.tycg.gov.tw/Utility/DisplayImage?id=10718',
      'http://i.imgur.com/n4YyK.jpg',
      'http://ottocat.pixnet.net/album/downloadphoto?id=115366508',
      'https://i.ytimg.com/vi/7Sx-sNp6Grs/maxresdefault.jpg',
      
    ]
  }
}
Seeder(stadium);
