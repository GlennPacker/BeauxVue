import LakePage from "../components/lakePage";
import Link from 'next/link';

const schema = {
  cover: {
    alt: `Lakes and rivers around Bersac Sur Rivalier, Vienne`,
    src: '/Vienne Haute Vienne.jpg',
    title: 'Vienne',
    para: 'Haute Vienne',
    textClass: 'vienne',
  },
  pageTitle: `Vienne - Beaux Vue Chambres d'Hotes`,
  description: `Vienne, Haute Vienne`,
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
      { text: 'Vienne'},
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
      src: '/View from a bridge showing Vienne and another bridge.jpg',
      alt: 'View from a bridge showing Vienne and another bridge'
    },{
      src: '/View through tunnel onto the Viene.jpg',
      alt: 'View through a tunnel onto the Viene'
    }, {
      src: '/Vienne slipway.jpg',
      alt: 'Vienne slipway in Confolens'
    },{
      src: '/Viene Waterfall.jpg',
      alt: 'Viene Waterfall - Beaux Vue',
    },{
      src: '/bridge over the Vienne.jpg',
      alt: 'Bridge over the Vienne',
    }, {
      src: '/View of the Vienne from park.jpg',
      alt: 'View of the Vienne from park'
    }, {
      src: '/Confolens across the Vienne.jpg',
      alt: 'Confolens across the Vienne'
    }, 
    ],
    para: 
      <>
        <p>
        </p>
      </>
  }
}

export default function Vienne() {
  return (
    <LakePage schema={schema} />
  );
}
