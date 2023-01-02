import LakePage from "../components/lakePage";

const schema = {
  cover: {
    alt: `Etang De Jonas, Lakes and rivers around Bersac Sur Rivalier, Haute Vienne`,
    src: '/lakes-and-rivers-france.jpg',
    title: 'Etang De Jonas',
    para: 'Haute Vienne and Nouvelle Aquitaine',
    textClass: 'lakes-and-rivers',
  },
  pageTitle: `Etang De Jonas - Beaux Vue Chambres d'Hotes`,
  description: `Beaux Vue Chambres d'Hotes Bersac Sur Rivalier, Bessines sur Gartempe, Limoges, Haute Vienne`,
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
    breadCrumb: [
      { text: `Beaux Vue, Chambres d'Hotes`, link: '/'},
      { text: 'Lakes and Rivers', link: '/lakes-and-rivers'},
      { text: 'Etang De Jonas'},
    ],
    beach: false,
    cycling: false,
    fishing: true,
    inflatables: false,
    kayaking: false,
    swimming: false,
    trekking: false,
    windsurfing: false,
    wingSurfAndFoil: false,
    gallery: [],
    para: 
      <>
        <p>
        </p>
      </>
  }
}

export default function EtangDeJonas() {
  return (
    <LakePage schema={schema} />
  );
}
