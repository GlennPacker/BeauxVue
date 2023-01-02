import LakePage from "../components/lakePage";

const schema = {
  cover: {
    alt: `La Jonchere Saint Maurice Lac, Haute Vienne near Bersac Sur Rivalier`,
    src: '/La Jonchere Saint Maurice Lac.jpg',
    title: 'Lac La Jonchere Saint Maurice',
    para: 'Haute Vienne',
    textClass: 'la-jonchere-saint-maurice',
  },
  pageTitle: `La Jonchere Saint Maurice Lac - Beaux Vue Chambres d'Hotes`,
  description: `La Jonchere Saint Maurice Lac, Haute Vienne`,
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
    breadCrumb: [
      { text: `Beaux Vue, Chambres d'Hotes`, link: '/'},
      { text: 'Lakes and Rivers', link: '/lakes-and-rivers'},
      { text: 'La Jonchere Saint Maurice'},
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
    gallery: [{
      src: '/La Jonchere Saint Maurice - pêche lac.jpg',
      alt: 'La Jonchere Saint Maurice - Pêche Lac',
    },  {
      src: '/La Jonchere Saint Maurice - Near Beaux Vue.jpg',
      alt: 'La Jonchere Saint Maurice - Near Beaux Vue',
    }, {
      src: '/La Jonchere Saint Maurice - fishing lake.jpg',
      alt: 'La Jonchere Saint Maurice - Fishing Lake',
    }, 
    ],
    para: 
      <>
        <p>
        </p>
      </>
  }
}

export default function LaJonchereSaintMaurice() {
  return (
    <LakePage schema={schema} />
  );
}