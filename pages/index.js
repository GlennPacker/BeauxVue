import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CtaList from '../components/ctaList';
import Cover from '../components/cover';

const schema = {
  cover: {
    alt: `Beaux Vue Chambres d'Hotes Bersac Sur Rivalier`,
    src: '/bersac chambres dhotes.jpg',
    title: 'Beaux Vue',
    para: 'Luxury B&B Accomodation',
    textClass: 'home',
  },
  pageTitle: `Beaux Vue Chambres d'Hotes`,
  description: `Beaux Vue Chambres d'Hotes Bersac Sur Rivalier, Bessines sur Gartempe, Limoges, Haute Vienne`,
  cta: {
    minHeight: 150,
    items: [
      'accomodation',
      'local',
      'watersports',
      'fishing',
      'cycling',
      'moreActivities',
    ]
  }
}

export default function Home() {
    return (
        <>
          <Head>
            <title>{ schema.pageTitle }</title>
            <meta name="description" content={ schema.description } />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Cover data={schema.cover} />
          <main className={styles.main }>
            <CtaList ctaData={schema.cta}></CtaList>
          </main>

          
          {/* <footer className={styles.footer}>
              contact
              <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
              >
              Powered by{' '}
              <span className={styles.logo}>
                  <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
              </span>
              </a>
          </footer> */}
        </>
    );
}