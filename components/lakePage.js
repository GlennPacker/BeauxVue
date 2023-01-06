import styles from '../styles/Home.module.css';
import CtaList from '../components/ctaList';
import Lake from '../components/lake';
import Header from '../components/header';

export default function LakePage({ schema }) {
  return (
    <>
      <Header schema={schema.header} />

      <div>
        <Lake data={schema.lake} />
      </div>

      <main className={styles.main}>
        <CtaList ctaData={schema.cta}></CtaList>
      </main>
    </>
  );
}