import LakePage from "../components/lakePage";
import Link from 'next/link';
import { useTranslations } from 'use-intl';
import pageService from '../services/pageService';

const data = {
  cover: {
    src: '/Lac Du Pont.jpg',
    textClass: 'lac-du-pont',
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
      { text: 'Lac Du Pont' },
    ],
    beach: true,
    cycling: true,
    fishing: true,
    inflatables: true,
    kayaking: true,
    swimming: true,
    trekking: true,
    windsurfing: true,
    wingSurfAndFoil: true,
    gallery: [{
      src: '/Lac Du Pont - by kayak.jpg',
      alt: 'Lac Du Pont - by kayak'
    }, {
      alt: 'Lac Du Pont, Laurière, Haute Vienne',
      src: '/Lac Du Pont Laurière Haute Vienne.jpg',
    }, {
      src: '/Lac Du Pont - Near Beaux Vue.jpg',
      alt: 'Lac Du Pont - Near Beaux Vue',
    }, {
      src: '/Lac Du Pont - by flying water sports.jpg',
      alt: 'Lac Du Pont - by flying water sports'
    }, {
      src: '/Lac Du Pont haute vienne.jpg',
      alt: 'Lac Du Pont - on to the water'
    }, {
      src: '/Lac Du Pont near Bersac Sur Rivalier.jpg',
      alt: 'Lac Du Pont - near Bersac Sur Rivalier'
    }, {
      src: '/Lac Du Pont - water sports.jpg',
      alt: 'Lac Du Pont',
    },
    ],
    para:
      <>
        <p>
          The largest lake in the area (330 hectares) just 15 mins away from Beaux Vue Chambres d{"'"}Hotes. The lake was created in 1968 and inaugurated in 1977.
        </p>
        <p>
          It offers everything you could wish for in a lake from <Link href="/fishing">fishing</Link>, <Link href='/watersports'>watersports</Link>.
          Land based activitites there is a 25.4km
          <Link href="https://www.alltrails.com/trail/france/haute-vienne/tour-du-lac-de-saint-pardoux#:~:text=Check%20out%20this%2015.8%2Dmile,h%2014%20min%20to%20complete." > route </Link>
          great for <Link href="/trekking">trekking</Link> and <Link href="/cycling">cycling</Link>.
        </p>
        <p>
          There is a beach to take it easy in the sun and water slides to cool off.
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

export default function LacDuPont() {
  const schema = pageService.mapSchema(
    data,
    'lacDuPontàLÂge',
    useTranslations('pages')
  );

  return (<LakePage schema={schema} />);
}
