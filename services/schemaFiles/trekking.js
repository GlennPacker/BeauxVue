import Link from 'next/link';

module.exports = {
  cover: {
    src: '/bersac chambres dhotes.jpg',
    textClass: 'home',
  },
  cta: {
    minHeight: 150,
    items: [
      'accomodation',
      'local',
      'lakesAndRivers',
      'watersports',
      'fishing',
      'moreActivities',
    ]
  },
  breadCrumb: [
    { text: `Beaux Vue, Chambres d'Hotes`, link: '/' },
    { text: 'Trekking' }
  ]
}