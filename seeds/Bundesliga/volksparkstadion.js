var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Volksparkstadion',
  sport: ['Football'],
  league: ['Bundesliga'],
  detail: {
    team: ['Hamburger SV'],
    capacity: 57000,
    opened: new Date('07/12/1953'),
    architect: 'MOS Architekten',
    location: 'Hamburg, Germany',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/d/de/RK_1009_9831_Volksparkstadion.jpg',
      'http://bilder.augsburger-allgemeine.de/img/sport/crop32728852/7454781489-ctopTeaser-w1200/Volksparkstadion-Imtech-Arena-HSH-Norbank-Arena-AOL-Arena.jpg',
      'http://www.hamburg.de/contentblob/4793216/1bdf368eff4289a49df13929bf68ce57/data/pa-volksparkstadion.jpg',
      'http://www.hamburg-web.de/fotos/original/10432-Westtribuene-Volksparkstadion.jpg',
      'http://hendriksvisitedstadiums.com/images/DSC07541---Kopie.jpg',
      'http://static.panoramio.com/photos/large/49330728.jpg'
    ]
  }
}
Seeder(stadium);
