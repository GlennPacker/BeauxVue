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
    gallery: [],
    src: '',
    textClass: 'le-taurion-pont-du-dognon'
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
    cycling: true,
    fishing: true,
    inflatables: true,
    kayaking: true,
    swimming: true,
    trekking: true,
    windsurfing: true,
    wingSurfAndFoil: true,
    para:
      <>
        <p>
        </p>
      </>
  },

};