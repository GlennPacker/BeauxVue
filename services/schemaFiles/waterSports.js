import Link from 'next/link';

module.exports = {
  header: {
    breadCrumb: [{
      link: '/',
      text: `Beaux Vue, Chambres d'Hotes`
    }, {
      text: 'Water Sports'
    }],
    src: '/Watersports Haute Vienne and Nouvelle Aquitaine.jpg',
    textClass: 'watersports'
  },
  cta: {
    items: ['lakesAndRivers', 'waterSportsRental', 'sup', 'kayaking', 'wingSurfing', 'windsurfing'],
    minHeight: 135
  }
};
