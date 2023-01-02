import Head from 'next/head'
import styles from '../styles/Home.module.css'
import cycleStyles from '../styles/Cycle.module.css'
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
    minHeight: 150,
    items: [
      'accomodation',
      'local',
      'lakesAndRivers',
      'watersports',
      'trekking',
      'moreActivities',
    ]
  },
  cycleRoutes: [
    '257955911',
    '257963270',
    '257964824',
    '258012932'
  ],
  breadCrumb: [
    { text: `Beaux Vue, Chambres d'Hotes`, link: '/'},
    { text: 'Cycling'}
  ]
}

export default function Cycling() {
    return (
        <>
          <Head>
            <title>{ schema.pageTitle }</title>
            <meta name="description" content={ schema.description } />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Cover data={schema.cover} />

          <BreadCrumb  breadCrumb={ schema.breadCrumb } />

          <div className={ cycleStyles.routeContainer }>
            {
              schema.cycleRoutes.map(route => (
                <iframe 
                  key={ route }
                  src={ `https://www.outdooractive.com/en/embed/${ route }/iframe?mw=false` } 
                  className={ cycleStyles.cycleRoute }
                  scrolling="no"
                />
              ))
            }
          </div>

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