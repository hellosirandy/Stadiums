var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Amalie Arena',
  sport: ['Hockey'],
  league: ['NHL'],
  detail: {
    team: ['Tampa Bay Lightning'],
    capacity: 19092,
    opened: new Date('10/20/1996'),
    architect: 'Ellerbe Becket',
    location: 'Tampa, Florida',
    images: [
      'http://www.tbo.com/storyimage/TB/20140903/ARTICLE/140909795/EP/1/1/EP-140909795.jpg',
      'http://arenadigest.com/wp-content/uploads/2016/03/Amalie-Arena-Vology-Loge-Occupied-GS.jpg',
      'http://www.pinkfloydz.com/wp-content/uploads/2017/01/Amalie-Arena-Day.jpg',
      'https://c.o0bg.com/rf/image_1920w/Boston/2011-2020/2014/10/17/BostonGlobe.com/Sports/Images/IMG_1153.JPG',
      'https://farm4.staticflickr.com/3833/13560523095_cb5b34123c_b.jpg',
      'https://i.ytimg.com/vi/TVeo0IQdVtw/maxresdefault.jpg',
      'http://www.tbo.com/storyimage/TB/20150227/ARTICLE/150229253/AR/0/AR-150229253.jpg',

    ]
  }
}
Seeder(stadium);
