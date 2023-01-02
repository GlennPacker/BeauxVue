import LakePage from "../components/lakePage";

const schema = {
  cover: {
    alt: `Gartempe, Haute Vienne near Bersac Sur Rivalier`,
    src: '/Gartempe.jpg',
    title: 'Gartempe',
    para: 'Haute Vienne and Nouvelle Aquitaine',
    textClass: 'gartempe',
  },
  pageTitle: `Gartempe - Beaux Vue Chambres d'Hotes`,
  description: `Gartempe, Haute Vienne`,
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
    breadCrumb: [
      { text: `Beaux Vue, Chambres d'Hotes`, link: '/'},
      { text: 'Lakes and Rivers', link: '/lakes-and-rivers'},
      { text: 'Gartempe'},
    ],
    beach: false,
    cycling: true,
    fishing: true,
    inflatables: false,
    kayaking: true,
    swimming: false,
    trekking: true,
    windsurfing: false,
    wingSurfAndFoil: false,
    gallery: [{
      alt: 'Gartempe, Haute Vienne',
      src: '/Gartempe, Haute Vienne.jpg',
    },{
      src: '/Gartempe - Near Beaux Vue.jpg',
      alt: 'Gartempe - Near Beaux Vue',
    },{
      src: '/Gartempe - by flying water sports.jpg',
      alt: 'Gartempe - by flying water sports'
    },
    ],
    para: 
      <>
        <p>
        </p>
      </>
  }
}

export default function Gartempe() {
  return (
    <LakePage schema={schema} />
  );
}
