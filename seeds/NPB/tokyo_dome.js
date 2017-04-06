var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Tokyo Dome',
  sport: ['Baseball'],
  league: ['NPB'],
  detail: {
    team: ['Yomiuri Giants'],
    capacity: 46000,
    opened: new Date('03/17/1988'),
    architect: 'Takenaka Corporation',
    location: 'Tokyo, Japan',
    images: [
      'http://lestaylorphoto.com/wp-content/uploads/2014/08/Yomiuri-Giants-Tokyo-Dome-Panorama_smaller.jpg',
      'http://www.travelience.com/wp-content/uploads/2013/09/Tokyo_Dome_2007-2.jpg',
      'https://tokyoing.net/wp-content/uploads/2015/05/image_139952268044_article-1024x681.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/3/37/Tokyo_Dome_Inside.JPG',
      'https://upload.wikimedia.org/wikipedia/commons/a/ae/TokyoDome_GiantsFighters.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/5/56/Tokyo_Dome_2007-12.jpg',
      'http://orig14.deviantart.net/8751/f/2008/181/5/0/tokyo_dome_by_kaz0885.jpg',
      'http://static.wbsc.org.s3.amazonaws.com/wp-content/uploads/USA_Japan_TokyoDome.jpg?x87500',
      
    ]
  }
}
Seeder(stadium);
