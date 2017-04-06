var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Yokohama Stadium',
  sport: ['Baseball'],
  league: ['NPB'],
  detail: {
    team: ['Yokohama DeNA BayStars'],
    capacity: 30039,
    opened: new Date('04/04/1978'),
    architect: '創和設計',
    location: 'Yokohama, Japan',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/a/a5/High_school_baseball_in_Yokohama_Stadium_Japan_2007-6.jpg',
      'https://c1.staticflickr.com/8/7388/10556501576_903d041bdc_b.jpg',
      'http://static.wbsc.org.s3.amazonaws.com/wp-content/uploads/Yokohama-Stadium-Confirmed-for-Olympic-Baseball-Tokyo-2020.jpg?x87500',
      'http://2.bp.blogspot.com/_rUGdluXjOEc/TM-wMVlRqMI/AAAAAAAABSs/1R2wzUzywds/s1600/Yokohama+(127).JPG',
      'http://3.bp.blogspot.com/-U9S5TH52AyQ/UIX0PL3nFWI/AAAAAAAAOHk/lSv2fL-fH_g/s1600/Yokohama+070.JPG',
      'https://farm9.static.flickr.com/8001/7177462504_22a3e68968_b.jpg',

    ]
  }
}
Seeder(stadium);
