import Link from 'next/link';

module.exports = {
  header: {
    src: '/La Jonchere Saint Maurice Lac.jpg',
    textClass: 'la-jonchere-saint-maurice',
    breadCrumb: [
      { text: `Beaux Vue, Chambres d'Hotes`, link: '/' },
      { text: 'Lakes and Rivers', link: '/lakes-and-rivers' },
      { text: 'La Jonchere Saint Maurice' },
    ],
    gallery: [{
      src: '/La Jonchere Saint Maurice - pêche lac.jpg',
      alt: 'La Jonchere Saint Maurice - Pêche Lac',
    }, {
      src: '/La Jonchere Saint Maurice - Near Beaux Vue.jpg',
      alt: 'La Jonchere Saint Maurice - Near Beaux Vue',
    }, {
      src: '/La Jonchere Saint Maurice - fishing lake.jpg',
      alt: 'La Jonchere Saint Maurice - Fishing Lake',
    }],
  },
  cta: {
    minHeight: 135,
    items: [
      'accomodation',
      'local',
      'lakesAndRivers',
      'fishing',
      'trekking',
      'moreActivities',
    ]
  },
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
        <p>
        </p>
      </>
  }
};