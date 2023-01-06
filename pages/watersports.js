import styles from '../styles/Home.module.css';
import CtaList from '../components/ctaList';
import { useTranslations } from 'use-intl';
import pageService from '../services/pageService';
import data from '../services/dataService';
import Header from '../components/header';

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
      <Header schema={schema.header} />

      <main className={styles.main}>
        <CtaList ctaData={schema.cta}></CtaList>
      </main>
    </>
  );
}