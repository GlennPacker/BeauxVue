import Link from 'next/link';

module.exports = {
  header: {
    breadCrumb: [{
      link: '/',
      text: `Beaux Vue, Chambres d'Hotes`
    }, {
      link: '/lakes-and-rivers',
      text: 'Lakes and Rivers'
    }, {
      text: 'Le Taurion, Châtelus le Marcheix'
    }],
    gallery: [{
      alt: 'Le Taurion, Châtelus le Marcheix - Bridge over the river',
      src: '/Le Taurion Chatelus le Marcheix.jpg'
    }, {
      alt: 'Water Sports with Flying Water Sports on Le Taurion, Châtelus le Marcheix',
      src: '/Water Sports on Le Taurion Chatelus le Marcheix.jpg'
    }, {
      alt: 'Le Taurion, Châtelus le Marcheix',
      src: '/Le Taurion Châtelus le Marcheix - river bank.jpg'
    }, {
      alt: 'Kayaking on Le Taurion, Châtelus le Marcheix',
      src: '/Le Taurion Chatelus le Marcheix - flying water sports.jpg'
    }, {
      alt: 'Le Taurion, Châtelus le Marcheix - Near Beaux Vue',
      src: '/Le Taurion Châtelus le Marcheix - Near Beaux Vue.jpg'
    }, {
      alt: 'Le Taurion, Châtelus le Marcheix - near beach',
      src: '/Le Taurion Châtelus le Marcheix - near beach.jpg'
    }, {
      alt: 'Le Taurion, Châtelus le Marcheix - from kayak',
      src: '/Le Taurion, Châtelus le Marcheix - from kayak.jpg'
    }],
    src: '/Le Taurion Châtelus le Marcheix.jpg',
    textClass: 'marcheix'
  },
  cta: {
    minHeight: 135,
    items: [
      'accomodation',
      'fishing',
      'sup',
      'kayaking',
      'wingSurfing',
      'windsurfing',
    ]
  },
  lake: {
    beach: true,
    cycling: false,
    fishing: true,
    inflatables: false,
    kayaking: true,
    swimming: true,
    trekking: false,
    windsurfing: true,
    wingSurfAndFoil: true,
    para:
      <>
        <p>
        </p>
      </>
  },

};
