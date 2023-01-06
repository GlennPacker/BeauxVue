import Link from 'next/link';

module.exports = {
  cover: {
    src: '/bersac chambres dhotes.jpg',
    textClass: 'home',
  },
  cta: {
    minHeight: 150,
    items: [
      'local',
      'watersports',
      'trekking',
      'crafts',
      'paragliding',
      'xmass',
      'cycling',
      'fishing',
      'kayaking',
      'sup',
      'windsurfing',
      'wingSurfing'
    ]
  },
  breadCrumb: [
    { text: `Beaux Vue, Chambres d'Hotes`, link: '/' },
    { text: 'More Activities' }
  ]
};
