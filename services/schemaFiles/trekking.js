import Link from 'next/link';

module.exports = {
  cta: {
    items: ['accomodation', 'local', 'lakesAndRivers', 'watersports', 'fishing', 'moreActivities'],
    minHeight: 150
  },
  header: {
    breadCrumb: [{
      link: '/',
      text: `Beaux Vue, Chambres d'Hotes`
    }, {
      text: 'Trekking'
    }],
    src: '/bersac chambres dhotes.jpg',
    textClass: 'home'
  }
};