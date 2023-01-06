import Link from 'next/link';

module.exports = {
  cover: {
    src: '/bersac chambres dhotes.jpg',
    textClass: 'home',
  },
  cta: {
    minHeight: 135,
    items: [
      'accomodation',
      'local',
      'lakesAndRivers',
      'watersports',
      'kayaking',
      'moreActivities',
    ]
  },
  breadCrumb: [
    { text: `Beaux Vue, Chambres d'Hotes`, link: '/' },
    { text: 'Water Sports', link: '/watersports' },
    { text: 'SUP' }
  ]
};
