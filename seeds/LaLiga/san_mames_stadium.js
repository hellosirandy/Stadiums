var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'San Mamés Stadium',
  sport: ['Football'],
  league: ['La Liga'],
  detail: {
    team: ['Athletic Bilbao'],
    capacity: 53289,
    opened: new Date('09/16/2013'),
    architect: 'IDOM',
    location: '	Bilbao, Spain',
    images: [
      'http://www.stadiumguide.com/wp-content/uploads/sanmames_top.jpg',
      'http://images.adsttc.com/media/images/543d/cf2c/c07a/801f/e700/0290/large_jpg/Estadio_S.Mames_006.jpg?1413336801',
      'http://www.bilbaostadium.com/wp-content/uploads/2014/10/ee_6.jpg',
      'http://images.adsttc.com/media/images/543d/d00a/c07a/801f/e700/0291/large_jpg/Estadio_S.Mames_012.jpg?1413336989',
      'http://img.archiexpo.com/images_ae/projects/images-og/san-mames-stadium-32251-10052475.jpg',
      'http://fotos.subefotos.com/7aee11a6993a6f45dff3caec3f0accbdo.jpg',

    ]
  }
}
Seeder(stadium);
