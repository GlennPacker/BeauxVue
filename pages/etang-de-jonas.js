import LakePage from "../components/lakePage";
import { useTranslations } from 'use-intl';
import pageService from '../services/pageService';

const data = {
  cover: {
    src: '/lakes-and-rivers-france.jpg',
    textClass: 'lakes-and-rivers',
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
    breadCrumb: [
      { text: `Beaux Vue, Chambres d'Hotes`, link: '/' },
      { text: 'Lakes and Rivers', link: '/lakes-and-rivers' },
      { text: 'Etang De Jonas' },
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

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default
    }
  };
}

export default function EtangDeJonas() {
  const schema = pageService.mapSchema(
    data,
    'etangDeJonas',
    useTranslations('pages')
  );

  return (<LakePage schema={schema} />);
}
