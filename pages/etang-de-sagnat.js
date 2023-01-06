import LakePage from "../components/lakePage";
import { useTranslations } from 'use-intl';
import pageService from '../services/pageService';

const data = {
  cover: {
    src: '/Etang de Sagnat.jpg',
    textClass: 'etang-de-sagnat',
  },
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
      { text: `Beaux Vue, Chambres d'Hotes`, link: '/' },
      { text: 'Lakes and Rivers', link: '/lakes-and-rivers' },
      { text: 'Etang de Sagnat' },
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
    }, {
      src: '/Etang de Sagnat - near Beaux Vue Chambres dHotes.jpg',
      alt: 'Etang de Sagnat'
    }, {
      src: '/Fishing Bessines Sur Gartempe.jpg',
      alt: 'Fishing - Bessines Sur Gartempe'
    }, {
      src: '/Etang de Sagnat across bank.jpg',
      alt: 'Etang de Sagnat - shore line',
    }, {
      src: '/Etang de Sagnat - beaux vuex.jpg',
      alt: 'Etang de Sagnat',
    },
    ],
    para:
      <>
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

export default function EtangDeSagnant() {
  const schema = pageService.mapSchema(
    data,
    'etangDeSagnat',
    useTranslations('pages')
  );

  return (<LakePage schema={schema} />);
}