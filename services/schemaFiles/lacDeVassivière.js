import Link from 'next/link';

module.exports = {
  cover: {
    src: '/Lac De Vassivière Creuse.jpg',
    textClass: 'vassiviere',
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
      { text: 'Lac De Vassivière' },
    ],
    beach: false,
    cycling: true,
    fishing: true,
    inflatables: false,
    kayaking: true,
    swimming: false,
    trekking: true,
    windsurfing: true,
    wingSurfAndFoil: true,
    gallery: [],
    para:
      <>
        <p>
        </p>
      </>
  }
};
