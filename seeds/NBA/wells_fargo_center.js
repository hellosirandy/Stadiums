var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Wells Fargo Center',
  sport: ['Basketball', 'Hockey'],
  league: ['NBA', 'NHL'],
  detail: {
    team: ['Philadelphia 76ers', 'Philadelphia Flyers'],
    capacity: 21600,
    opened: new Date('08/13/1996'),
    architect: 'Ellerbe Becket',
    location: 'Philadelphia, Pennsylvania',
    images: [
      'http://www.lfdriscoll.com/web/wp-content/uploads/2015/03/Wells-Fargo-Center-4_sm.jpg',
      'http://corporate.comcast.com/images/wells-fargo-center-thumbnail.jpg',
      'http://www.lfdriscoll.com/web/wp-content/uploads/2015/03/LFD-Wells-Fargo-120210-154836-1500x812.jpg',
      'http://donpearsephotographers.com/wp-content/uploads/2016/06/WellsFargoCenter-1600x1200.jpg',
      'http://philadelphiaflyers.cz/WFC.jpg',
      'https://www.wellsfargocenterphilly.com/assets/img/premium_club_branding2-24456bcd01.jpg',
      'http://aviewfrommyseat.com/photos/anonymous-20120502212622.jpg',
      
    ]
  }
}
Seeder(stadium);
