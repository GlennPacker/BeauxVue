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
      text: 'Étang de la Brousse'
    }],
    src: '/Étang de la Brousse Haute Vienne.jpg',
    textClass: 'etang-de-la-brousse'
  },
  cta: {
    items: [
      'fishing',
      'sup',
      'kayaking',
      'wingSurfing',
      'windsurfing',
      'trekking',
    ],
    minHeight: 135
  },
  gallery: [],
  lake: {
    beach: false,
    cycling: false,
    fishing: true,
    inflatables: false,
    kayaking: false,
    swimming: false,
    trekking: false,
    windsurfing: false,
    wingSurfAndFoil: false,
    para:
      <>
      </>
  }
};
