var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Old Trafford',
  sport: ['Football'],
  league: ['Premier League'],
  detail: {
    team: ['Manchester United'],
    capacity: 75643,
    opened: new Date('02/19/1910'),
    architect: 'Archibald Leitch',
    location: 'Manchester, Greater Manchester',
    images: [
      'https://pnimg.net/w/articles/0/569/53906f2f36.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/4/43/Old_Trafford_inside_20060726_1.jpg',
      'http://uk.wikifun.com/upload/location/27245/27887.JPG',
      'https://metrouk2.files.wordpress.com/2017/01/gettyimages-943836.jpg?quality=80&strip=all&strip=all',
      'https://s-media-cache-ak0.pinimg.com/originals/56/74/93/567493f7a73d42f86e562670bd5dbf94.jpg',
      'http://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2014/08/Manchester-United.jpg',
      'http://static.thousandwonders.net/Old.Trafford.original.26456.jpg',
      'http://www.manutd.com/sitecore/shell/~/media/D6AA34FF81164720BED1DCCEE3FE7229.ashx?w=1280&h=720&rgn=0,129,1440,938',

    ]
  }
}
Seeder(stadium);
