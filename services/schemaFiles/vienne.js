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
      text: 'Vienne'
    }],
    gallery: [{
      alt: 'View from a bridge showing Vienne and another bridge',
      src: '/View from a bridge showing Vienne and another bridge.jpg'
    }, {
      alt: 'View through a tunnel onto the Viene',
      src: '/View through tunnel onto the Viene.jpg'
    }, {
      alt: 'Vienne slipway in Confolens',
      src: '/Vienne slipway.jpg'
    }, {
      alt: 'Viene Waterfall - Beaux Vue',
      src: '/Viene Waterfall.jpg'
    }, {
      alt: 'Bridge over the Vienne',
      src: '/bridge over the Vienne.jpg'
    }, {
      alt: 'View of the Vienne from park',
      src: '/View of the Vienne from park.jpg'
    }, {
      alt: 'Confolens across the Vienne',
      src: '/Confolens across the Vienne.jpg'
    }],
    src: '/Vienne Haute Vienne.jpg',
    textClass: 'vienne'
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
}