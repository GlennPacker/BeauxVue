import Link from 'next/link';

module.exports = {
  cover: {
    src: '/Étang de la Brousse Haute Vienne.jpg',
    textClass: 'etang-de-la-brousse',
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
  lake: {
    breadCrumb: [
      { text: `Beaux Vue, Chambres d'Hotes`, link: '/' },
      { text: 'Lakes and Rivers', link: '/lakes-and-rivers' },
      { text: 'Étang de la Brousse' },
    ],
    beach: false,
    cycling: false,
    fishing: true,
    inflatables: false,
    kayaking: false,
    swimming: false,
    trekking: false,
    windsurfing: false,
    wingSurfAndFoil: false,
    gallery: [],
    para:
      <>
      </>
  }
};
