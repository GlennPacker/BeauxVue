import Link from 'next/link';

module.exports = {
  header: {
    src: '/Lac De Vassivière Creuse.jpg',
    textClass: 'vassiviere',
    breadCrumb: [
      { text: `Beaux Vue, Chambres d'Hotes`, link: '/' },
      { text: 'Lakes and Rivers', link: '/lakes-and-rivers' },
      { text: 'Lac De Vassivière' },
    ],
    gallery: [],
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
    beach: false,
    cycling: true,
    fishing: true,
    inflatables: false,
    kayaking: true,
    swimming: false,
    trekking: true,
    windsurfing: true,
    wingSurfAndFoil: true,
    para:
      <>
        <p>
        </p>
      </>
  }
};
