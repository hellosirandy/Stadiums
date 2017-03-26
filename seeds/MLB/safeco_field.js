var Seeder = require('../../helpers/seeder');
var SafecoField = {
  name: 'Safeco Field',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Seatle Mariners'],
    capacity: 47943,
    opened: new Date('07/15/1999'),
    architect: 'NBBJ',
    location: 'Seattle, Washington',
    images: [
      'http://www.velectric.com/wp-content/uploads/2016/07/SAFECO-Field-3rd-Base.jpg',
      'http://img.bleacherreport.net/img/images/photos/002/249/712/ScreenShot2013-04-08at11.28.29AM_crop_exact.jpg?w=1500&h=1500&q=85',
      'https://www.silvercloud.com/images/seattlestadium/mastheads/safeco-field.jpg',
      'http://content.king5.com/photo/2016/03/25/safecofield2_1458945898250_1169428_ver1.0.jpg',
      'https://static1.squarespace.com/static/511992e4e4b084d1d0b0e149/t/52085f79e4b0f09210ea73f8/1433783471994/Safeco+wide.JPG',
      'https://cdn.geekwire.com/wp-content/uploads/IMG_6138-copy.jpg',
      'https://mlblogssnaggingbaseballs.files.wordpress.com/2011/06/8_area_above_bullpens.jpg',
      'https://cdn0.vox-cdn.com/thumbor/UbSebSHqMul0xcIdnzqIj-p9zHg=/0x72:1800x1085/1600x900/cdn0.vox-cdn.com/uploads/chorus_image/image/49199973/eatersea0316_safeco_field_official.0.0.jpg',
      
    ]
  }
}
Seeder(SafecoField);
