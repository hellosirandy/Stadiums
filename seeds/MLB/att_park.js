var Seeder = require('../../helpers/seeder');
var ATTPark = {
  name: 'AT&T Park',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['San Francisco Giants'],
    capacity: 41915,
    opened: new Date('04/11/2001'),
    architect: 'Populous',
    location: 'San Francisco, California',
    images: [
      'https://spartancms-uploads.s3.amazonaws.com/sites/2/2014/04/att-pk.jpg',
      'http://m.mlb.com/assets/images/1/0/0/163793100/cuts/ATTPark1280_97urpzfq_dh9rf0fi.jpg',
      'https://www.meetingsbooker.com/images/venues/ATT-Park-0.jpg',
      'http://1hfw4e4enivg252rudvmavr1.wpengine.netdna-cdn.com/wp-content/uploads/stadiums/mlb_giants_2002/334.jpg',
      'https://c1.staticflickr.com/4/3163/2296687417_092d3f996c_b.jpg',
      'http://www.upout.com/blog/wp-content/uploads/5049171158_bacc2465c5_b-1024x500.jpg?cdb29b',
      'http://www.si.com/sites/default/files/images/att%20park.jpg',
      'https://s3.amazonaws.com/eb-blog-rally/wp-content/uploads/2015/06/15197341297_0ec5ebcb75_k-1.jpg'
    ]
  }
}
Seeder(ATTPark);
