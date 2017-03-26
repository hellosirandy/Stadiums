var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Los Angeles Memorial Coliseum',
  sport: ['Football'],
  league: ['NFL'],
  detail: {
    team: ['Los Angeles Rams'],
    capacity: 900000,
    opened: new Date('05/01/1923'),
    architect: 'John and Donald Parkinson',
    location: 'Los Angeles, California',
    images: [
      'http://farm4.static.flickr.com/3069/2488767697_6f162f1087_b.jpg',
      'https://c1.staticflickr.com/5/4095/4743465143_a926588ab9_b.jpg',
      'http://www.discoverlosangeles.com/sites/default/files/styles/article_image/public/media/Sports/los-angeles-rams-game-coliseum.jpg?itok=ej5cG65W',
      'http://a.scpr.org/i/eb36614d6af6d480dc99e7706d555aa4/136854-full.jpg',
      'https://images.washingtonpost.com/?op=resize&url=https://s3-us-west-1.amazonaws.com/annenberg-media/wp-content/uploads/2016/11/Rams-Field.jpg&mode=crop&w=1200&q=99',
      'https://static01.nyt.com/images/2012/06/03/us/COLLISEUM-1/COLLISEUM-1-superJumbo.jpg',
      'https://static01.nyt.com/images/2016/03/10/sports/00COLISEUM3/00COLISEUM3-superJumbo.jpg',
      
    ]
  }
}
Seeder(stadium);
