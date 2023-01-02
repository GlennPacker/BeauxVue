import LakePage from "../components/lakePage";
import Link from 'next/link';

const schema = {
  cover: {
    alt: `Lakes and rivers around Bersac Sur Rivalier, Lac De Vassivière`,
    src: '/Lac De Vassivière Creuse.jpg',
    title: 'Lac De Vassivière',
    para: 'Creuse',
    textClass: 'vassiviere',
  },
  pageTitle: `Lac De Vassivière - Beaux Vue Chambres d'Hotes`,
  description: `Lac De Vassivière, Creuse`,
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
      { text: 'Lac De Vassivière'},
    ],
    beach: false,
    cycling: true,
    fishing: true,
    inflatables: false,
    kayaking: true,
    swimming: false,
    trekking: true,
    windsurfing: true,
    wingSurfAndFoil: true,
    gallery: [{
      src: '/View from a bridge showing Lac De Vassivière and another bridge.jpg',
      alt: 'View from a bridge showing Lac De Vassivière and another bridge'
    },{
      src: '/View through tunnel onto.jpg',
      alt: 'View through a tunnel onto the Viene'
    }, {
      src: '/Lac De Vassivière slipway.jpg',
      alt: 'Lac De Vassivière slipway in Confolens'
    },{
      src: '/Viene Water.jpg',
      alt: 'Viene Waterfall - Beaux Vue',
    },{
      src: '/bridge over the Lac De Vassivière.jpg',
      alt: 'Bridge over the Lac De Vassivière',
    }, {
      src: '/View of the Lac De Vassivière from park.jpg',
      alt: 'View of the Lac De Vassivière from park'
    }, {
      src: '/Confolens across the Lac De Vassivière.jpg',
      alt: 'Confolens across the Lac De Vassivière'
    }, 
    ],
    para: 
      <>
        <p>
        </p>
      </>
  }
}

export default function LacDeVassiviere() {
  return (
    <LakePage schema={schema} />
  );
}
