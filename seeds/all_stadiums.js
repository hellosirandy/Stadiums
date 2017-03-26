module.exports = function(name) {
  return stadiums[name];
};
var stadiums = {
  ATTPark: {
    name: 'AT&T Park',
    sport: ['Baseball'],
    league: ['MLB'],
    detail: {
      team: ['San Francisco Giants'],
      capacity: 41915,
      opened: new Date(2000, 4, 11),
      architect: 'Populous',
      location: 'San Francisco, California'
    }
  },
  ATTStadium: {
    name: 'AT&T Stadium',
    sport: ['Football'],
    league: ['NFL'],
    detail: {
      team: ['Dallas Cowboys'],
      capacity: 100000,
      opened: new Date(2009, 5, 27),
      architect: 'HKS, Inc.',
      location: 'Arlington, Texas'
    }
  },
  BarclaysCenter: {
    name: 'Barclays Center',
    sport: ['Basketball', 'Hockey'],
    league: ['NBA', 'NHL'],
    detail: {
      team: ['Broolklyn Nets', 'New York Islanders'],
      capacity: 17732,
      opened: new Date(2012, 9, 21),
      architect: 'AECOM (Ellerbe Becket)',
      location: 'Brooklyn, New York'
    }
  },
  FenwayPark: {
    name: 'Fenway Park',
    sport: ['Baseball'],
    league: ['MLB'],
    detail: {
      team: ['Boston Red Sox'],
      capacity: 37731,
      opened: new Date(1912, 4, 20),
      architect: 'James McLaughlin',
      location: 'Boston, Massachusetts'
    }
  },
  MSG: {
    name: 'Madison Square Garden',
    sport: ['Basketball', 'Hockey'],
    league: ['NBA', 'NHL'],
    detail: {
      team: ['New York Knicks', 'New York Rangers'],
      capacity: 19812,
      opened: new Date(1968, 2, 11),
      architect: 'Charles Luckman Associates',
      location: 'New York City, New York'
    }
  },
  PNCPark: {
    name: 'PNC Park',
    sport: ['Baseball'],
    league: ['MLB'],
    detail: {
      team: ['Pittsburgh Pirates'],
      capacity: 38362,
      opened: new Date(2001, 3, 31),
      architect: 'Populous',
      location: 'Pittsburgh, Pennsylvania',
      images: [
        'https://www.mmvta.com/wp-content/uploads/2013/08/PNC-PARK.jpg',
        'https://www.mmvta.com/wp-content/uploads/2013/08/PNC-PARK.jpg',
        'https://www.mmvta.com/wp-content/uploads/2013/08/PNC-PARK.jpg',
        'https://www.mmvta.com/wp-content/uploads/2013/08/PNC-PARK.jpg',
        'https://www.mmvta.com/wp-content/uploads/2013/08/PNC-PARK.jpg',
        'http://www.fedjefamily.net/images/baseball/pnc_upper_view.jpg',
        'https://cannon-7pwiu5hqygigvu1w3lmtyxkscr5rqnxrk5c1hjll7ke.netdna-ssl.com/assets/PNCPark2.jpg',
        'http://media4.trover.com/T/516957e40845d2114d000319/fixedw_large_4x.jpg',
      ]
    }
  }
};
