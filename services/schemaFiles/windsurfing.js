import Link from 'next/link';

module.exports = {
  cta: {
    items: ['accomodation', 'local', 'lakesAndRivers', 'wingSurfing', 'kayaking', 'sup'],
    minHeight: 350
  },
  header: {
    breadCrumb: [{
      link: '/',
      text: `Beaux Vue, Chambres d'Hotes`
    }, {
      link: '/watersports',
      text: 'Water Sports'
    }, {
      text: 'Windsurfing'
    }],
    src: '/bersac chambres dhotes.jpg',
    textClass: 'home'
  }
};
