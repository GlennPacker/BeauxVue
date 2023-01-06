import LakePage from "../components/lakePage";
import { useTranslations } from 'use-intl';
import pageService from '../services/pageService';

const data = {
  cover: {
    src: '/Gartempe.jpg',
    textClass: 'gartempe',
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
    breadCrumb: [
      { text: `Beaux Vue, Chambres d'Hotes`, link: '/' },
      { text: 'Lakes and Rivers', link: '/lakes-and-rivers' },
      { text: 'Gartempe' },
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
    }, {
      src: '/Gartempe - Near Beaux Vue.jpg',
      alt: 'Gartempe - Near Beaux Vue',
    }, {
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

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default
    }
  };
}

export default function Gartempe() {
  const schema = pageService.mapSchema(
    data,
    'gartempe',
    useTranslations('pages')
  );

  return (<LakePage schema={schema} />);
}
