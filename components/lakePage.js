import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CtaList from '../components/ctaList';
import Cover from '../components/cover';
import Lake from '../components/lake';


export default function LakePage({ schema }) {
  return (
    <>
      <Head>
        <title>{schema.pageTitle}</title>
        <meta name="description" content={schema.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Cover data={schema.cover} />

      <div>
        <Lake data={schema.lake} />
      </div>

      <main className={styles.main}>
        <CtaList ctaData={schema.cta}></CtaList>
      </main>
    </>
  );
}