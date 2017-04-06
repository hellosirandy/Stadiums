var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Santiago Bernabéu Stadium',
  sport: ['Football'],
  league: ['La Liga'],
  detail: {
    team: ['Real Madrid'],
    capacity: 81044,
    opened: new Date('12/14/1947'),
    architect: 'Manuel Ronaldo MuMonasterio',
    location: 'Madrid, Spain',
    images: [
      'http://www.youbioit.com/files/newimages/6958/391/real_madrid_santiago_bernabeu_wallpaper.jpg',
      'https://fotografiasdeciudad.files.wordpress.com/2011/04/madrid_santiagobernabeu_pic4.jpg',
      'http://www.pixelstalk.net/wp-content/uploads/2015/05/Santiago-Bernabeu-Stadium-Real-Madrid-Football-Club-Wallpapers-HD.jpg',
      'https://2ca54c85d3f608494402-1c6b4b69d2498d95ab6e291a3fb28b64.ssl.cf1.rackcdn.com/92/1/large.jpg',
      'https://s-media-cache-ak0.pinimg.com/originals/c6/63/ff/c663ff6cf12079f8ef1a3e24cb42e50c.jpg',
      'http://traveldigg.com/wp-content/uploads/2016/08/Santiago-Bernabeu-Aerial-View.jpg',
      'http://upload.wikimedia.org/wikipedia/commons/b/b7/Santiagobernabeupanoramav3.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/d/dc/Estadio_Santiago_Bernab%C3%A9u_11.jpg',
      'https://essma.eu/member/images/members_gallery/realmadrid1.jpg',
      'http://fc01.deviantart.net/fs42/f/2009/059/5/3/Estadio_Santiago_Bernabeu_by_szczupi.jpg',
      
    ]
  }
}
Seeder(stadium);
