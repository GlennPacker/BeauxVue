import LakePage from "../components/lakePage";
import { useTranslations } from 'use-intl';
import pageService from '../services/pageService';

const data = {
  cover: {
    src: '/La Jonchere Saint Maurice Lac.jpg',
    textClass: 'la-jonchere-saint-maurice',
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
    breadCrumb: [
      { text: `Beaux Vue, Chambres d'Hotes`, link: '/' },
      { text: 'Lakes and Rivers', link: '/lakes-and-rivers' },
      { text: 'La Jonchere Saint Maurice' },
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
    }, {
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

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default
    }
  };
}

export default function LaJonchereSaintMaurice() {
  const schema = pageService.mapSchema(
    data,
    'laJonchèreSaintMaurice',
    useTranslations('pages')
  );

  return (<LakePage schema={schema} />);
}