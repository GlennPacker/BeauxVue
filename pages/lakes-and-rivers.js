import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CtaList from '../components/ctaList';
import Cover from '../components/cover';
import BreadCrumb from '../components/breadBrumb';

const schema = {
  cover: {
    alt: `Lakes and rivers around Bersac Sur Rivalier, Haute Vienne`,
    src: '/lakes-and-rivers-france.jpg',
    title: 'Lakes and Rivers',
    para: 'Haute Vienne and Nouvelle Aquitaine',
    textClass: 'lakes-and-rivers',
  },
  pageTitle: `Beaux Vue Chambres d'Hotes`,
  description: `Beaux Vue Chambres d'Hotes Bersac Sur Rivalier, Bessines sur Gartempe, Limoges, Haute Vienne`,
  breadCrumb: [
    { text: `Beaux Vue, Chambres d'Hotes`, link: '/'},
    { text: 'Lakes and Rivers'}
  ],
  cta: {
    minHeight: 65,
    items: [
      {
        alt: 'Saint Sulpice Lauriere Haute Vienne Fishing Lake',
        img: '/Saint Sulpice Lauriere Haute Vienne Fishing Lake.jpg',
        link: '/saint-sulpice-lauriere-lake',
        para: '',
        title: 'Saint Sulpice'
      },
      {
        alt: `Lac du Pont à l'Âge, Ardour, Haute Vienne`,
        img: `/Lac du Pont à l'Âge.jpg`,
        link: '/lac-du-pont',
        para: '',
        title: `Laurière`
      },
      {
        alt: 'Gartempe',
        img: '/Gartempe Bersac Limoges.jpg',
        link: '/gartempe',
        para: '',
        title: 'Gartempe'
      },
      {
        alt: 'Etang de Sagnat, Bessines Sur Gartempe',
        img: '/Etang de Sagnat Bessines Sur Gartempe.jpg',
        link: '/etang-de-sagnat',
        para: '',
        title: 'Etang de Sagnat'
      },
      {
        alt: 'Lac de Saint Pardoux Haute Vienne',
        img: '/Lac de Saint Pardoux Haute Vienne.jpg',
        link: '/lac-de-saint-pardoux',
        para: '',
        title: 'Saint Pardoux'
      },
      {
        alt: 'Le Taurion Chatelus le Marcheix',
        img: '/Le Taurion Chatelus le Marcheix.jpg',
        link: '/le-taurion-chatelus-le-marcheix',
        para: '',
        title: 'Chatelus le Marcheix',
        buttonText: 'Le Taurion'
      },    
      {
        alt: 'Le Taurion Pont du Dognon',
        img: '/Le Taurion Pont du Dognon.jpg',
        link: '/le-taurion-chatelus-le-marcheix',
        para: '',
        title: 'Le Taurion'
      },    
      {
        alt: 'La Jonchère Saint Maurice Fishing Lake',
        img: '/La Jonchère-Saint-Maurice.jpg',
        link: '/la-jonchere-saint-maurice',
        para: '',
        title: 'La Jonchère Saint Maurice',
        buttonText: 'Fishing Lake'
      },    
      {
        alt: 'Etang de Jonas',
        img: '/Etang de Jonas.jpg',
        link: '/etang-de-jonas',
        para: '',
        title: 'Etang de Jonas'
      },    
      {
        alt: 'Étang de la Brousse, Marsac',
        img: '/Étang de la Brousse.jpg',
        link: '/marsac',
        para: '',
        title: 'Marsac'
      },    
      {
        alt: 'Vienne',
        img: '/Vienne.jpg',
        link: '/vienne',
        para: '',
        title: 'Vienne'
      },
      {
        alt: 'Lac de Vassivière',
        img: '/Lac de Vassivière.jpg',
        link: '/lac-de-vassiviere',
        para: '',
        title: 'Lac de Vassivière'
      },    
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