import Link from 'next/link';

module.exports = {
  cta: {
    items: ['accomodation', 'local', 'lakesAndRivers', 'watersports', 'kayaking', 'moreActivities'],
    minHeight: 135
  },
  header: {
    breadCrumb: [{
      link: '/',
      text: `Beaux Vue, Chambres d'Hotes`
    }, {
      link: '/watersports',
      text: 'Water Sports'
    }, {
      text: 'SUP'
    }],
    src: '/bersac chambres dhotes.jpg',
    textClass: 'home'
  }
};
