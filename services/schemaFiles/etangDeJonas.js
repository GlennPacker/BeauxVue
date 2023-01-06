module.exports = {
  header: {
    src: '/lakes-and-rivers-france.jpg',
    textClass: 'lakes-and-rivers',
    breadCrumb: [
      { text: `Beaux Vue, Chambres d'Hotes`, link: '/' },
      { text: 'Lakes and Rivers', link: '/lakes-and-rivers' },
      { text: 'Etang De Jonas' },
    ],
    gallery: [],
  },
  cta: {
    minHeight: 135,
    items: [
      'accomodation',
      'fishing',
      'watersports',
      'cycling',
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