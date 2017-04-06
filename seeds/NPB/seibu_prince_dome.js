var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Seibu Prince Dome',
  sport: ['Baseball'],
  league: ['NPB'],
  detail: {
    team: ['Saitama Seibu Lions'],
    capacity: 33556,
    opened: new Date('03/31/1979'),
    architect: 'Yoshiro Ikehara',
    location: 'Tokorozawa City, Saitama, Japan',
    images: [
      'https://gaijinpot.scdn3.secure.raxcdn.com/wp-content/uploads/sites/4/2015/04/baseball-seibu.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/2/21/Seibu_Dome_baseball_stadium_-_01.jpg',
      'https://c2.staticflickr.com/8/7580/27004706481_e1e4fcbffe_b.jpg',
      'http://3.bp.blogspot.com/-ADAX9IhnjYk/TePasMhR6pI/AAAAAAAAAq0/xj7HbTTgNX0/s1600/Misc+-+Seibu+DOme.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/c/c1/Seibu_prince_dome.jpeg',
      'https://images1-tb-opensocial.googleusercontent.com/gadgets/proxy?url=http%3A%2F%2Fpic.pimg.tw%2Fjimhou93%2F1391701356-3921078265_l.jpg&container=tb&gadget=a&rewriteMime=image%2F*&resize_h=1600&resize_w=1600&no_expand=1',
      
    ]
  }
}
Seeder(stadium);
