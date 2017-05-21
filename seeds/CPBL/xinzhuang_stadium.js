var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Xinzhuang Baseball Stadium',
  sport: ['Baseball'],
  league: ['CPBL'],
  detail: {
    team: ['Fubon Guardians'],
    capacity: 12500,
    opened: new Date('1997/10/19'),
    architect: '宗邁建築師事務所',
    location: 'New Taipei, Taiwan',
    images: [
      'https://i.ytimg.com/vi/j0Di21sq0io/maxresdefault.jpg',
      'http://cyberisland.teldap.tw/S/JQjyttffHhmhZEySsltwmTSlZt',
      'https://i.ytimg.com/vi/JCDwaswnFK4/maxresdefault.jpg',
      'http://blog.roodo.com/siroikuroi/f96d2bcc.jpg',
      
    ]
  }
}
Seeder(stadium);
