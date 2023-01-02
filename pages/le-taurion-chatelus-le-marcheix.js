import LakePage from "../components/lakePage";

const schema = {
  cover: {
    alt: `Le Taurion Châtelus le Marcheix Lakes and rivers around Bersac Sur Rivalier, Haute Vienne`,
    src: '/Le Taurion Châtelus le Marcheix.jpg',
    title: 'Le Taurion',
    para: 'Châtelus le Marcheix',
    textClass: 'marcheix',
  },
  pageTitle: `Le Taurion, Châtelus le Marcheix - Beaux Vue Chambres d'Hotes`,
  description: `Beaux Vue Chambres d'Hotes Bersac Sur Rivalier, Bessines sur Gartempe, Limoges, Haute Vienne`,
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
    breadCrumb: [
      { text: `Beaux Vue, Chambres d'Hotes`, link: '/'},
      { text: 'Lakes and Rivers', link: '/lakes-and-rivers'},
      { text: 'Le Taurion, Châtelus le Marcheix'},
    ],
    beach: true,
    cycling: false,
    fishing: true,
    inflatables: false,
    kayaking: true,
    swimming: true,
    trekking: false,
    windsurfing: true,
    wingSurfAndFoil: true,
    gallery: [{
      src: '/Le Taurion Chatelus le Marcheix.jpg',
      alt: 'Le Taurion, Châtelus le Marcheix - Bridge over the river',
    }, {
      alt: 'Water Sports with Flying Water Sports on Le Taurion, Châtelus le Marcheix',
      src: '/Water Sports on Le Taurion Chatelus le Marcheix.jpg'
    },{
      src: '/Le Taurion Châtelus le Marcheix - river bank.jpg',
      alt: 'Le Taurion, Châtelus le Marcheix',
    },  {
      alt: 'Kayaking on Le Taurion, Châtelus le Marcheix',
      src: '/Le Taurion Chatelus le Marcheix - flying water sports.jpg',
    },{
      src: '/Le Taurion Châtelus le Marcheix - Near Beaux Vue.jpg',
      alt: 'Le Taurion, Châtelus le Marcheix - Near Beaux Vue',
    }, {
      src: '/Le Taurion Châtelus le Marcheix - near beach.jpg',
      alt: 'Le Taurion, Châtelus le Marcheix - near beach',
    }, {
      src: '/Le Taurion, Châtelus le Marcheix - from kayak.jpg',
      alt: 'Le Taurion, Châtelus le Marcheix - from kayak',
    },
    ],
  },
  
  para: 
    <>
      <p>
      </p>
    </>
}

export default function LeTaurionChatelusLeMarcheix() {
  return (
    <LakePage schema={schema} />
  );
}
