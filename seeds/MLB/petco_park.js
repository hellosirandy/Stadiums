var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Petco Park',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['San Diego Padres'],
    capacity: 40162,
    opened: new Date('04/08/2004'),
    architect: 'Populous',
    location: 'San Diego, California',
    images: [
      'http://m.mlb.com/assets/images/8/3/6/127357836/cuts/Petco_Parl_1280_j1ep0jzm_jxgfjhrb.png',
      'http://m.mlb.com/assets/images/1/3/0/136781130/cuts/SD_PETCO_1280_071515_gnf7eplb_3xyihk32.jpg',
      'http://3.bp.blogspot.com/_cjRHS2z8UDk/S8ybG3t94dI/AAAAAAAAAfY/p_RzxYubl1A/s1600/IMG_0328.JPG',
      'https://c1.staticflickr.com/5/4063/4529236437_a1a70bb6a1_b.jpg',
      'http://static.panoramio.com/photos/large/34589892.jpg',
      'http://medias.photodeck.com/73890666-4adf-11e3-999e-7fccf5db972c/Downtown-San-Diego-Sunset-Skyline-Photo_IMG_1021_uxga.jpg'
    ]
  }
}
Seeder(stadium);
