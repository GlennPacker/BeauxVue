import Link from 'next/link';

module.exports = {
  cta: {
    minHeight: 135,
    items: [
      'accomodation',
      'local',
      'lakesAndRivers',
      'fishing',
      'moreActivities',
      'trekking',
    ]
  },
  header: {
    breadCrumb: [{
      link: '/',
      text: `Beaux Vue, Chambres d'Hotes`
    }, {
      link: '/lakes-and-rivers',
      text: 'Lakes and Rivers'
    }, {
      text: 'Saint Sulpice Laurière'
    }],
    gallery: [{
      alt: 'Saint Sulpice Laurière - Fishing Lake',
      src: '/Saint Sulpice Laurière - fishing lake.jpg'
    }, {
      alt: 'Saint Sulpice Laurière, Laurière, Haute Vienne',
      src: '/Saint Sulpice Laurière Laurière Haute Vienne.jpg'
    }, {
      alt: 'Saint Sulpice Laurière Lac, Beaux Vuex',
      src: '/Saint Sulpice Laurière - Beaux Vuex.jpg'
    }, {
      alt: 'Saint Sulpice Laurière - Near Beaux Vue',
      src: '/Saint Sulpice Laurière - Near Beaux Vue.jpg'
    }, {
      alt: 'Saint Sulpice Laurière - Pêche Lac',
      src: '/Saint Sulpice Laurière - pêche lac.jpg'
    }, {
      alt: 'Saint Sulpice Laurière',
      src: '/Saint-Sulpice-Laurière.jpg'
    }, {
      alt: 'Saint Sulpice Laurière - Fishing Bank.jpg',
      src: '/Saint Sulpice Laurière - fishing bank.jpg'
    }],
    src: '/Saint-Sulpice-Laurière-Lac.jpg',
    textClass: 'saint-sulpice-lauriere'
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
        <h6>Fishing on the pond La Papeterie</h6>
        <p>
          Permits for fishing are available at the town hall or in Laurière.
        </p>
      </>
  }
}