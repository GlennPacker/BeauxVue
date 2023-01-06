import Link from 'next/link';

module.exports = {
  header: {
    src: '/lakes-and-rivers-france.jpg',
    textClass: 'lakes-and-rivers',
    breadCrumb: [
      { text: `Beaux Vue, Chambres d'Hotes`, link: '/' },
      { text: 'Lakes and Rivers' }
    ],
  },
  cta: {
    minHeight: 65,
    items: [
      'saintSulpiceLauriereLake',
      'lacDuPont',
      'gartempe',
      'etangDeSagnat',
      'lacDeSaintPardoux',
      'leTaurionChatelusLeMarcheix',
      'leTaurionPontDuDognon',
      'laJonchèreSaintMaurice',
      'etangDeJonas',
      'etangDeLaBrousse',
      'vienne',
      'lacDeVassivière'
    ]
  }
};