import LakePage from "../components/lakePage";
import Link from 'next/link';
import { useTranslations } from 'use-intl';
import pageService from '../services/pageService';

const data = {
  cover: {
    src: '/Étang de la Brousse Haute Vienne.jpg',
    textClass: 'etang-de-la-brousse',
  },
  cta: {
    items: [
      'fishing',
      'sup',
      'kayaking',
      'wingSurfing',
      'windsurfing',
      'trekking',
    ],
    minHeight: 135
  },
  lake: {
    breadCrumb: [
      { text: `Beaux Vue, Chambres d'Hotes`, link: '/' },
      { text: 'Lakes and Rivers', link: '/lakes-and-rivers' },
      { text: 'Étang de la Brousse' },
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

export default function ÉtangDeLaBrousse() {
  const schema = pageService.mapSchema(
    data,
    'marsac',
    useTranslations('pages')
  );

  return (<LakePage schema={schema} />);
}
