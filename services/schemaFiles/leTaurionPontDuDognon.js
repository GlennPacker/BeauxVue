import Link from 'next/link';

module.exports = {
  cover: {
    src: '',
    textClass: 'le-taurion-pont-du-dognon',
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
    breadCrumb: [
      { text: `Beaux Vue, Chambres d'Hotes`, link: '/' },
      { text: 'Lakes and Rivers', link: '/lakes-and-rivers' },
      { text: 'Le Taurion, Châtelus le Marcheix' },
    ],
    beach: true,
    cycling: true,
    fishing: true,
    inflatables: true,
    kayaking: true,
    swimming: true,
    trekking: true,
    windsurfing: true,
    wingSurfAndFoil: true,
    gallery: [
    ],
  },

  para:
    <>
      <p>
      </p>
    </>
};