import LakePage from "../components/lakePage";

const schema = {
  cover: {
    alt: `Lakes and rivers around Bersac Sur Rivalier, Etang de Sagnat Haute Vienne`,
    src: '/Etang de Sagnat.jpg',
    title: 'Etang de Sagnat',
    para: 'Etang de Sagnat,  Bessines Sur Gartempe, Haute Vienne',
    textClass: 'etang-de-sagnat',
  },
  pageTitle: `Etang de Sagnat Beaux Vue Chambres d'Hotes`,
  description: `Beaux Vue Chambres d'Hotes Bersac Sur Rivalier, Bessines sur Gartempe, Limoges, Haute Vienne`,
  cta: {
    items: [
      'accomodation',
      'local',
      'fishing',
      'cycling',
      'trekking',
      'moreActivities'
    ],
    minHeight: 135
  },
  lake: {
    breadCrumb: [
      { text: `Beaux Vue, Chambres d'Hotes`, link: '/'},
      { text: 'Lakes and Rivers', link: '/lakes-and-rivers'},
      { text: 'Etang de Sagnat'},
    ],
    beach: true,
    cycling: false,
    fishing: true,
    inflatables: false,
    kayaking: false,
    swimming: true,
    trekking: true,
    windsurfing: false,
    wingSurfAndFoil: false,
    gallery: [{
      src: '/Etang de Sagnat - fishing.jpg',
      alt: 'Etang de Sagnat - fishing'
    },{
      src: '/Etang de Sagnat - near Beaux Vue Chambres dHotes.jpg',
      alt: 'Etang de Sagnat'
    }, {
      src: '/Fishing Bessines Sur Gartempe.jpg',
      alt: 'Fishing - Bessines Sur Gartempe'
    },{
      src: '/Etang de Sagnat across bank.jpg',
      alt: 'Etang de Sagnat - shore line',
    },{
      src: '/Etang de Sagnat - beaux vuex.jpg',
      alt: 'Etang de Sagnat',
    },
    ],
    para: 
      <>
      </>
  }
}

export default function EtangDeSagnant() {
    return (
      <LakePage schema={schema} />
    );
}