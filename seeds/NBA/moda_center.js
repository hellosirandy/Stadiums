var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Moda Center',
  sport: ['Basketball'],
  league: ['NBA'],
  detail: {
    team: ['Portland Trail Blazers'],
    capacity: 19393,
    opened: new Date('10/12/1995'),
    architect: 'Ellerbe Becket',
    location: 'Portland, Oregon',
    images: [
      'http://www.rosequarter.com/wp-content/uploads/2015/10/Moda_Sunny.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/6/69/Portland_Trail_Blazers_at_Moda_Center%2C_December_2013_-_09.JPG',
      'https://bkivey.files.wordpress.com/2015/03/20150311_185900.jpg',
      'https://pbs.twimg.com/media/Bw-y5AoIgAEZfZW.jpg:large',
      'http://media.oregonlive.com/blazers_impact/photo/img-1160jpg-9c504884176d3047.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Moda_Center.JPG/1200px-Moda_Center.JPG',

    ]
  }
}
Seeder(stadium);
