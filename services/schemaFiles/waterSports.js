import Link from 'next/link';

module.exports = {
  cover: {
    src: '/Watersports Haute Vienne and Nouvelle Aquitaine.jpg',
    textClass: 'watersports',
  },
  breadCrumb: [
    { text: `Beaux Vue, Chambres d'Hotes`, link: '/' },
    { text: 'Water Sports' }
  ],
  cta: {
    items: [
      'lakesAndRivers',
      'waterSportsRental',
      'sup',
      'kayaking',
      'wingSurfing',
      'windsurfing',
    ],
    minHeight: 135
  }
};
