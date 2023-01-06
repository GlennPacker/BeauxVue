import Head from 'next/head'
import styles from '../styles/Home.module.css'
import cycleStyles from '../styles/Cycle.module.css'
import CtaList from '../components/ctaList';
import Cover from '../components/cover';
import BreadCrumb from '../components/breadBrumb';
import { useTranslations } from 'use-intl';
import pageService from '../services/pageService';
import data from '../services/dataService';

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default
    }
  };
}

export default function Cycling() {
  const schema = pageService.mapSchema(
    data,
    'cycling',
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

      <div className={cycleStyles.routeContainer}>
        {
          schema.cycleRoutes.map(route => (
            <iframe
              key={route}
              src={`https://www.outdooractive.com/en/embed/${route}/iframe?mw=false`}
              className={cycleStyles.cycleRoute}
              scrolling="no"
            />
          ))
        }
      </div>

      <main className={styles.main}>
        <CtaList ctaData={schema.cta}></CtaList>
      </main>
    </>
  );
}