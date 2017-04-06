var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Vivint Smart Home Arena',
  sport: ['Basketball'],
  league: ['NBA'],
  detail: {
    team: ['Utah Jazz'],
    capacity: 19911,
    opened: new Date('10/04/1991'),
    architect: 'FFKR Architecture',
    location: 'Salt Lake City, Utah',
    images: [
      'http://www.travel-pal.com/images/slcdowntown/Entertainment/vivintarena.jpg',
      'http://mms.businesswire.com/media/20151026005788/en/492864/5/Utah_Jazz_court.jpg',
      'http://aviewfrommyseat.com/photos/anonymous-20141203135023.jpg',
      'https://cdn0.vox-cdn.com/uploads/chorus_asset/file/7144045/1%20-%20AERIAL%20VIEW%20FROM%20300%20WEST.jpg',
      'https://localtvkstu.files.wordpress.com/2015/10/uvg5-1yjbw7mshgj2cpiuldsxy83u2m7pi8orn9fbd0njvbr7rrfyerv1fgmqx0_aifa3xaf5tlk-8qaux-5hccuoomqnl-bkkhebhpuequxclklxmsjnfeevqoiqazdablsd9xmeruaw0wxx0soaqudsvpqllu3aay8p5qh89r8pmz8df1l0l.jpg?quality=85&strip=all&w=1024',
      
    ]
  }
}
Seeder(stadium);
