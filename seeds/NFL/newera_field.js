var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'New Era Field',
  sport: ['Football'],
  league: ['NFL'],
  detail: {
    team: ['Buffalo Bills'],
    capacity: 71608,
    opened: new Date('08/17/1973'),
    architect: 'HNTB',
    location: 'Orchard Park, New York',
    images: [
      'http://assets2.sportsnet.ca/wp-content/uploads/2016/08/bills_stadium-1040x572.jpg',
      'https://d13csqd2kn0ewr.cloudfront.net/uploads/image/file/41456/cropped_USPW_911959.jpg?ts=1442486572',
      'http://footballstadiumdigest.com/wp-content/uploads/2016/03/ralph-wilson-stadium.jpg',
      'http://www.capitalcitytickets.com/content/uploaded/Ralph%20Wilson%20Stadium.jpg',
      'http://s3.amazonaws.com/bncore/wp-content/uploads/2016/11/539479-stadium-aerial-67-Ca-1100x733.jpg',
      'http://footballstadiumdigest.com/wp-content/uploads/2016/03/ralph-wilson-stadium.jpg',
      'http://media.bizj.us/view/img/2124761/ralph-wilson-stadium-pan*1200xx2859-1608-0-149.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/e/e6/Ralph_Wilson_Stadium.jpg'
    ]
  }
}
Seeder(stadium);
