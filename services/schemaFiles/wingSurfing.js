import Link from 'next/link';

module.exports = {
  cta: {
    items: ['accomodation', 'local', 'lakesAndRivers', 'windsurfing', 'sup', 'moreActivities'],
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
      text: 'Wing Surf and Foiling'
    }],
    src: '/bersac chambres dhotes.jpg',
    textClass: 'home'
  }
};