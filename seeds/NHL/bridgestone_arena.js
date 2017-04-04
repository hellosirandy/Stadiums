var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Bridgestone Arena',
  sport: ['Hockey'],
  league: ['NHL'],
  detail: {
    team: ['Nashville Predators'],
    capacity: 17113,
    opened: new Date('12/08/1996'),
    architect: 'HOK Sport',
    location: 'Nashville, Tennessee',
    images: [
      'http://www.nowplayingnashville.com/wp-content/uploads/sites/www.nowplayingnashville.com/images/2016/04/Bridgestone-Arena-675x450.jpg',
      'https://static.rukkus.com/venue/images/Bridgestone_Arena-1359.jpg',
      'https://c2.staticflickr.com/4/3273/2434434458_228ab03def_b.jpg',
      'https://www.gannett-cdn.com/-mm-/7c2c883def0285b8b22cc4813cdc5b884cd23d1a/c=0-159-4140-2498&r=x1683&c=3200x1680/local/-/media/2015/07/26/Nashville/Nashville/635735391340620186-bridgestone-arena-rgb.jpg',
      'http://www.wochurch.org/givethanks/wp-content/uploads/2014/10/1.jpg',
      'https://cdn0.vox-cdn.com/thumbor/EPlSMlQXkX4efqyjMnYq_0GrcHU=/10x0:4150x2760/1310x873/cdn0.vox-cdn.com/uploads/chorus_image/image/46955490/usa-today-8411069.0.jpg',
      
    ]
  }
}
Seeder(stadium);
