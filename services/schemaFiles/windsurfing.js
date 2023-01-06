import Link from 'next/link';

module.exports = {
  cover: {
    src: '/bersac chambres dhotes.jpg',
    textClass: 'home',
  },
  cta: {
    minHeight: 350,
    items: [
      'accomodation',
      'local',
      'lakesAndRivers',
      'wingSurfing',
      'kayaking',
      'sup',
    ]
  },
  breadCrumb: [
    { text: `Beaux Vue, Chambres d'Hotes`, link: '/' },
    { text: 'Water Sports', link: '/watersports' },
    { text: 'Windsurfing' },
  ]
};
