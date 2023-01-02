import LakePage from "../components/lakePage";
import Link from 'next/link';

const schema = {
  cover: {
    alt: `Lakes and rivers around Bersac Sur Rivalier, Lac De Saint Pardoux, Haute Vienne`,
    src: '/Lac De Saint Pardoux.jpg',
    title: 'Lac De Saint Pardoux',
    para: 'Lac De Saint Pardoux, Haute Vienne',
    textClass: 'lac-de-saint-pardoux',
  },
  pageTitle: `Lac De Saint Pardoux - Beaux Vue Chambres d'Hotes`,
  description: `Lac De Saint Pardoux, Haute Vienne`,
  cta: {
    items: [
      'fishing',
      'sup',
      'kayaking',
      'wingSurfing',
      'windsurfing',
      'trekking',
    ],
    minHeight: 135
  },
  lake: {
    breadCrumb: [
      { text: `Beaux Vue, Chambres d'Hotes`, link: '/'},
      { text: 'Lakes and Rivers', link: '/lakes-and-rivers'},
      { text: 'Lac De Saint Pardoux'},
    ],
    beach: true,
    cycling: true,
    fishing: true,
    inflatables: true,
    kayaking: true,
    swimming: true,
    trekking: true,
    windsurfing: true,
    wingSurfAndFoil: true,
    gallery: [{
      src: '/Lac De Saint Pardoux - by fishing car park.jpg',
      alt: 'Lac De Saint Pardoux - by fishing car park'
    },{
      src: '/Lac De Saint Pardoux - sky line.jpg',
      alt: 'Lac De Saint Pardoux - sky line in november 22'
    }, {
      src: '/Lac De Saint Pardoux - by flying water sports.jpg',
      alt: 'Lac De Saint Pardoux - by flying water sports'
    },{
      src: '/lac saint pardoux across shore.jpg',
      alt: 'Lac De Saint Pardoux - shore line',
    },{
      src: '/lac saint pardoux - beaux vue.jpg',
      alt: 'Lac De Saint Pardoux',
    }, {
      src: '/lac saint pardoux haute vienne.jpg',
      alt: 'Lac De Saint Pardoux - on to the water'
    }, {
      src: '/lac saint pardoux.jpg',
      alt: 'Lac De Saint Pardoux - through trees'
    }, 
    ],
    para: 
      <>
        <p>
          The largest lake in the area (330 hectares) just 15 mins away from Beaux Vue Chambres d{"'"}Hotes. The lake was created in 1968 and inaugurated in 1977.
        </p>
        <p>
          It offers everything you could wish for in a lake from <Link href="/fishing">fishing</Link>, <Link href='/watersports'>watersports</Link>. 
          Land based activitites there is a 25.4km 
          <Link href="https://www.alltrails.com/trail/france/haute-vienne/tour-du-lac-de-saint-pardoux#:~:text=Check%20out%20this%2015.8%2Dmile,h%2014%20min%20to%20complete." > route </Link> 
          great for <Link href="/trekking">trekking</Link> and <Link href="/cycling">cycling</Link>.
        </p>
        <p>
          There is a beach to take it easy in the sun and water slides to cool off.
        </p>
      </>
  }
}

export default function LacDeSaintPardoux() {
  return (
    <LakePage schema={schema} />
  );
}
