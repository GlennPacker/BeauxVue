import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CtaList from '../components/ctaList';
import Cover from '../components/cover';
import BreadCrumb from '../components/breadBrumb';
import { useTranslations } from 'use-intl';
import pageService from '../services/pageService';

const data = {
  cover: {
    src: '/Watersports Haute Vienne and Nouvelle Aquitaine.jpg',
    textClass: 'watersports',
  },
  breadCrumb: [
    { text: `Beaux Vue, Chambres d'Hotes`, link: '/' },
    { text: 'Water Sports' }
  ],
  cta: {
    items: [
      'lakesAndRivers',
      'waterSportsRental',
      'sup',
      'kayaking',
      'wingSurfing',
      'windsurfing',
    ],
    minHeight: 135
  }
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default
    }
  };
}

export default function Watersports() {
  const schema = pageService.mapSchema(
    data,
    'waterSports',
    useTranslations('pages')
  );

  return (
    <>
      <Head>
        <title>{schema.pageTitle}</title>
        <meta name="description" content={schema.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Cover data={schema.cover} />
      <BreadCrumb breadCrumb={schema.breadCrumb} />

      <main className={styles.main}>
        <CtaList ctaData={schema.cta}></CtaList>
      </main>
    </>
  );
}