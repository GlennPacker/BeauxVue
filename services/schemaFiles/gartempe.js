module.exports = {
  header: {
    src: '/Gartempe.jpg',
    textClass: 'gartempe',
    breadCrumb: [
      { text: `Beaux Vue, Chambres d'Hotes`, link: '/' },
      { text: 'Lakes and Rivers', link: '/lakes-and-rivers' },
      { text: 'Gartempe' },
    ],
    gallery: [{
      alt: 'Gartempe, Haute Vienne',
      src: '/Gartempe, Haute Vienne.jpg',
    }, {
      src: '/Gartempe - Near Beaux Vue.jpg',
      alt: 'Gartempe - Near Beaux Vue',
    }, {
      src: '/Gartempe - by flying water sports.jpg',
      alt: 'Gartempe - by flying water sports'
    }],
  },
  cta: {
    minHeight: 135,
    items: [
      'accomodation',
      'watersports',
      'fishing',
      'cycling',
      'trekking',
      'moreActivities',
    ]
  },
  lake: {
    beach: false,
    cycling: true,
    fishing: true,
    inflatables: false,
    kayaking: true,
    swimming: false,
    trekking: true,
    windsurfing: false,
    wingSurfAndFoil: false,

    para:
      <>
        <p>
        </p>
      </>
  }
};
