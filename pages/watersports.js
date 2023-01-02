import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CtaList from '../components/ctaList';
import Cover from '../components/cover';
import BreadCrumb from '../components/breadBrumb';

const schema = {
  cover: {
    alt: `Watersports Haute Vienne and Nouvelle Aquitaine`,
    src: '/Watersports Haute Vienne and Nouvelle Aquitaine.jpg',
    title: 'Flying Water Sports',
    textClass: 'watersports',
    para: 'Beaux Vue Water Sports In Bersac Sur Rivalier'
  },
  pageTitle: `Beaux Vue Chambres d'Hotes - Flying Water Sports`,
  description: `Beaux Vue Chambres d'Hotes Bersac Sur Rivalier Watersports Activity Centre`,
  breadCrumb: [
    { text: `Beaux Vue, Chambres d'Hotes`, link: '/'},
    { text: 'Water Sports'}
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

export default function Watersports() {
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
        </>
    );
}