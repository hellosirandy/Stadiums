var Seeder = require('../../helpers/seeder');
var FenwayPark = {
  name: 'Fenway Park',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Boston Red Sox'],
    capacity: 37731,
    opened: new Date('04/20/1912'),
    architect: 'James McLaughlin',
    location: 'Boston, Massachusetts',
    images: [
      'http://files.greatermedia.com/uploads/sites/19/2016/04/Fenway_Park_2009-brilliant-sky.jpg',
      'http://cdn.wallpapersafari.com/63/92/4XTj1x.jpg',
      'http://www.ballparksofbaseball.com/wp-content/uploads/2016/03/fenway15955.jpg',
      'http://cdn.wallpapersafari.com/22/26/KByZqh.jpg',
      'http://emmausinc.org/wp-content/uploads/2016/03/green-monster-seat-pic.jpg',
      'http://cdn1.bostonmagazine.com/wp-content/uploads/2015/06/fenway.jpg',
      'http://www.omade.com.tw/program/editor_files/20131231145322.jpg',
      'http://i2.cdn.cnn.com/cnnnext/dam/assets/160211183159-fenway-park-ortiz-super-169.jpg',
      'http://bostoncommon-magazine.com/get/files/image/galleries/fenwaypark3.jpg',
      
    ]
  }
};
Seeder(FenwayPark);
