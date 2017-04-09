var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Red Bull Arena',
  sport: ['Football'],
  league: ['Bundesliga'],
  detail: {
    team: ['RB Leipzig'],
    capacity: 42956,
    opened: new Date('08/14/1956'),
    architect: 'Werner March',
    location: 'Leipzig, Germany',
    images: [
      'https://s-media-cache-ak0.pinimg.com/originals/57/cc/ad/57ccade54d432e621ca26cf6fa242ac7.jpg',
      'http://farm1.static.flickr.com/136/391277628_a0f02dba4f_o.jpg',
      'https://c1.staticflickr.com/6/5080/7441715308_ab02641f8f_b.jpg',
      'http://farm1.static.flickr.com/106/262678489_915a524d52_b.jpg',
      'http://3.bp.blogspot.com/-OzOjF0vUekI/VgsmT3NLcbI/AAAAAAAAH18/c5Wa7Ej_c0w/s1600/Die%2BEnglische%2BWoche%2BSept%2B15%2B065.JPG',
      'http://image2.redbull.com/rbxapp06/0010/1/1200/800/801/rbl/2014/10/4/9048d0592b609cff22dc0d2f4e50a89f.JPG',
      
    ]
  }
}
Seeder(stadium);
