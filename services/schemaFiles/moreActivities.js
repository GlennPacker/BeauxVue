import Link from 'next/link';

module.exports = {
  cta: {
    items: ['local', 'watersports', 'trekking', 'crafts', 'paragliding', 'xmass', 'cycling', 'fishing', 'kayaking', 'sup', 'windsurfing', 'wingSurfing'],
    minHeight: 150
  },
  header: {
    breadCrumb: [{
      link: '/',
      text: `Beaux Vue, Chambres d'Hotes`
    }, {
      text: 'More Activities'
    }],
    src: '/bersac chambres dhotes.jpg',
    textClass: 'home'
  }
};
