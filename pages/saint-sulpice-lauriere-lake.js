import LakePage from "../components/lakePage";
import { useTranslations } from 'use-intl';
import pageService from '../services/pageService';

const data = {
  cover: {
    src: '/Saint-Sulpice-Laurière-Lac.jpg',
    textClass: 'saint-sulpice-lauriere',
  },
  cta: {
    minHeight: 135,
    items: [
      'accomodation',
      'local',
      'lakesAndRivers',
      'fishing',
      'moreActivities',
      'trekking',
    ]
  },
  lake: {
    breadCrumb: [
      { text: `Beaux Vue, Chambres d'Hotes`, link: '/' },
      { text: 'Lakes and Rivers', link: '/lakes-and-rivers' },
      { text: 'Saint Sulpice Laurière' },
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
      src: '/Saint Sulpice Laurière - fishing lake.jpg',
      alt: 'Saint Sulpice Laurière - Fishing Lake',
    }, {
      alt: 'Saint Sulpice Laurière, Laurière, Haute Vienne',
      src: '/Saint Sulpice Laurière Laurière Haute Vienne.jpg',
    }, {
      alt: 'Saint Sulpice Laurière Lac, Beaux Vuex',
      src: '/Saint Sulpice Laurière - Beaux Vuex.jpg',
    }, {
      src: '/Saint Sulpice Laurière - Near Beaux Vue.jpg',
      alt: 'Saint Sulpice Laurière - Near Beaux Vue',
    }, {
      src: '/Saint Sulpice Laurière - pêche lac.jpg',
      alt: 'Saint Sulpice Laurière - Pêche Lac',
    }, {
      src: '/Saint-Sulpice-Laurière.jpg',
      alt: 'Saint Sulpice Laurière',
    }, {
      src: '/Saint Sulpice Laurière - fishing bank.jpg',
      alt: 'Saint Sulpice Laurière - Fishing Bank.jpg',
    }
    ],
    para:
      <>
        <h6>Fishing on the pond La Papeterie</h6>
        <p>
          Permits for fishing are available at the town hall or in Laurière.
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

export default function SaintSulpiceLauriere() {
  const schema = pageService.mapSchema(
    data,
    'saintSulpiceLauriereLake',
    useTranslations('pages')
  );

  return (<LakePage schema={schema} />);
}