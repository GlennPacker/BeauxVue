import Link from 'next/link';

module.exports = {
  cover: {
    src: '/Lac Du Pont.jpg',
    textClass: 'lac-du-pont',
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
      { text: 'Lac Du Pont' },
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
    gallery: [{
      src: '/Lac Du Pont - by kayak.jpg',
      alt: 'Lac Du Pont - by kayak'
    }, {
      alt: 'Lac Du Pont, Laurière, Haute Vienne',
      src: '/Lac Du Pont Laurière Haute Vienne.jpg',
    }, {
      src: '/Lac Du Pont - Near Beaux Vue.jpg',
      alt: 'Lac Du Pont - Near Beaux Vue',
    }, {
      src: '/Lac Du Pont - by flying water sports.jpg',
      alt: 'Lac Du Pont - by flying water sports'
    }, {
      src: '/Lac Du Pont haute vienne.jpg',
      alt: 'Lac Du Pont - on to the water'
    }, {
      src: '/Lac Du Pont near Bersac Sur Rivalier.jpg',
      alt: 'Lac Du Pont - near Bersac Sur Rivalier'
    }, {
      src: '/Lac Du Pont - water sports.jpg',
      alt: 'Lac Du Pont',
    },
    ],
    para:
      <>
      </>
  }
};