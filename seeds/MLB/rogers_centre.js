var Seeder = require('../../helpers/seeder');
var RogersCentre = {
  name: 'Rogers Centre',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Toronto Blue Jays'],
    capacity: 49282,
    opened: new Date('06/03/1989'),
    architect: 'Rod Robbie',
    location: 'Toronto, Ontario',
    images: [
      'http://stadiumparkingguides.com/wp-content/uploads/2014/12/Toronto_-_ON_-_Rogers_Centre_Nacht.jpg',
      'http://m.mlb.com/assets/images/8/2/0/108763820/cuts/Rogers_Centre_1280_unrlzfzj_4f480v2v.jpg',
      'http://engineeringharmonics.com/wp-content/uploads/rogers-2.jpg',
      'http://assets2.sportsnet.ca/wp-content/uploads/2015/04/jayshomeopener1280.jpg',
      'http://www.baseballstadiumreviews.com/Big%20Pictures/Rogers%20Centre/Rogers4BIG.JPG',
      'https://c1.staticflickr.com/8/7088/7288159256_4b8cd73d10_b.jpg',
      'http://www.570news.com/wp-content/blogs.dir/sites/3/2016/02/12/Ca2zegSUUAACGqI.jpg-large.jpg',
      'http://urbantoronto.ca/sites/default/files/imagecache/display-default/images/articles/2011/11/4119/urbantoronto-4119-12270.jpg',
      
    ]
  }
};
Seeder(RogersCentre);
