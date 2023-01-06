import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CtaList from '../components/ctaList';
import Cover from '../components/cover';
import BreadCrumb from '../components/breadBrumb';
import { useTranslations } from 'use-intl';
import pageService from '../services/pageService';

const data = {
  cover: {
    src: '/lakes-and-rivers-france.jpg',
    textClass: 'lakes-and-rivers',
  },
  breadCrumb: [
    { text: `Beaux Vue, Chambres d'Hotes`, link: '/' },
    { text: 'Lakes and Rivers' }
  ],
  cta: {
    minHeight: 65,
    items: [
      'saintSulpiceLauriereLake',
      'lacDuPont',
      'gartempe',
      'etangDeSagnat',
      'lacDeSaintPardoux',
      'leTaurionChatelusLeMarcheix',
      'leTaurionPontDuDognon',
      'laJonchèreSaintMaurice',
      'etangDeJonas',
      'etangDeLaBrousse',
      'vienne',
      'lacDeVassivière'
    ]
  }
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default
    }
  };
}

export default function LakesAndRivers() {
  const schema = pageService.mapSchema(
    data,
    'lakesAndRivers',
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