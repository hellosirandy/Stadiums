var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Verizon Center',
  sport: ['Basketball', 'Hockey'],
  league: ['NBA', 'NHL'],
  detail: {
    team: ['Washington Wizards', 'Washington Capitals'],
    capacity: 20356,
    opened: new Date('12/02/1997'),
    architect: 'Ellerbe Becket',
    location: 'Washington, D.C.',
    images: [
      'https://snagfilms-a.akamaihd.net/16/dc/22a6b64d44518e2be21a23ad60b5/verizon-center-promo.jpg',
      'https://static.rukkus.com/venue/images/Verizon_Center-1264.jpg',
      'https://novacapsfans.files.wordpress.com/2015/08/verizon_center_washington_capitals.jpg',
      'http://1.bp.blogspot.com/-Q2-YOVIFXAU/UqN-UWdoK8I/AAAAAAAAGFg/zGg8k8sXWmE/s1600/verizon_ctr200IMG_20131207_112149_771.jpg',
      'http://3.bp.blogspot.com/-08vELshLW-E/UqN-AYD2R7I/AAAAAAAAGFU/1Yc8GLcgXLo/s1600/verizon_ctr100IMG_20131207_111001_461.jpg',
      'https://novacapsfans.files.wordpress.com/2015/08/verizon-center1.jpg',
      'https://static.rukkus.com/performer/home_venue/washington-wizards-at-verizon-center.602a6e191aea.jpg',
      'https://upload.wikimedia.org/wikipedia/en/c/cb/Verizon_Center_12-05-2007.JPG',
      'http://farm4.static.flickr.com/3224/2444687066_e6eb40f328_b.jpg',
      'http://www.truthaboutit.net/wordpress/wp-content/uploads/2014/04/IMG_9646.jpg',

    ]
  }
}
Seeder(stadium);
