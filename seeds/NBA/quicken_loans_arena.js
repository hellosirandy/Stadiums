var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Quicken Loans Arena',
  sport: ['Basketball'],
  league: ['NBA'],
  detail: {
    team: ['Cleveland Cavaliers'],
    capacity: 20562,
    opened: new Date('10/17/1994'),
    architect: 'Ellerbe Becket',
    location: 'Cleveland, Ohio',
    images: [
      'http://www.crainscleveland.com/apps/pbcsi.dll/storyimage/CC/20160126/BLOGS06/160129863/AR/0/AR-160129863.jpg&MaxW=1400&MaxH=1400',
      'https://upload.wikimedia.org/wikipedia/commons/5/53/Quicken_Loans_Arena.jpg',
      'https://www.theclio.com/web/ul/11464.18109.jpg',
      'http://bloguin.com/stepienrules/wp-content/uploads/sites/119/2014/04/photo-91.jpg',
      'http://4.bp.blogspot.com/__mvTh8brX88/TSS8GvVzLdI/AAAAAAAADRw/FhIroAHSFEs/s1600/P1220254.JPG',
      
    ]
  }
}
Seeder(stadium);
