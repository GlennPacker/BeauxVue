import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CtaList from '../components/ctaList';
import Cover from '../components/cover';
import BreadCrumb from '../components/breadBrumb';

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
    minHeight: 135,
    items: [
      'accomodation',
      'local',
      'watersports',
      'lakesAndRivers',
      'kayaking',
      'moreActivities',  
    ]
  },
  breadCrumb: [
    { text: `Beaux Vue, Chambres d'Hotes`, link: '/'},
    { text: 'Water Sports', link: '/watersports'},
    { text: 'Water Sports Rental' },
  ]
}

export default function WaterSportsRental() {
    return (
        <>
          <Head>
            <title>{ schema.pageTitle }</title>
            <meta name="description" content={ schema.description } />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Cover data={schema.cover} />

          <BreadCrumb  breadCrumb={ schema.breadCrumb } />

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