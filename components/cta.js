import Image from 'next/image';
import Button from './button';
import styles from '../styles/Cta.module.css'
import Clickable from './clickable';

/*
    'accomodation',
    'crafts',
    'cycling',
    'fishing',
    'kayaking',
    'lakesAndRivers',
    'local',
    'moreActivities',
    'paragliding',
    'sup',
    'trekking',
    'watersports',
    'waterSportsRental',
    'windsurfing',
    'wingSurfing',
    'xmass',
*/

const ctaData = {
    accomodation: {
        alt: 'Beax Vue Chambres dHotes Bersac Sur Rivalier',
        img: '/Beax Vue Chambres dHotes Bersac Sur Rivalier.jpg',
        link: '/accomodation',
        para: 'Luxury B&B accomodation doubles, twins and family rooms.',
        title: 'Accomodation'
    },
    crafts: {
        alt: 'Crafts - Bersac Sur Rivalier',
        img: '/Crafts.jpg',
        link: '/crafts',
        para: '',
        title: 'Crafts'
    },
    cycling: {
        alt: 'Cycling Limoges, Haute Vienne and Limousin',
        img: '/cycling-limoges.jpg',
        link: '/cycling',
        para: '',
        title: 'Cycling'
    },
    fishing: {
        alt: 'Fishing Limoges, Haute Vienne',
        img: '/Saint Sulpice Lauriere Haute Vienne Fishing Lake.jpg',
        link: '/fishing',
        para: '',
        title: 'Fishing'
    },
    kayaking: {
        alt: 'Kayaking with flying water sports',
        img: '/kayaking with flying water sports Haute Viene.jpg',
        link: '/kayaking',
        para: 'Kayaking holidays training and day trips',
        title: 'Kayaking'
    },
    lakesAndRivers: {
        alt: 'Watersports Lakes and rivers limoges',
        img: '/le Marcheix le Taurion river.jpg',
        link: '/lakes-and-rivers',
        para: 'The local lakes including Lac de Saint Pardoux.',
        title: 'Lakes and Rivers'
      },
    local: {
        alt: 'Bersac Sur Rivalier, Folles Viaduct, Haute Vienne',
        img: '/Folles-Viaduc de Rocherolles - near Bersac.jpg',
        link: '/local',
        para: 'Situated in the heart of Bersac Sur Rivalier, France, just off the A20.',
        title: 'Local'
    },
    moreActivities: {
        alt: 'More activities while staying at Beaux Vuex, Haute Vienne and Limousin',
        img: '/More activities while staying at Beaux Vuex, Haute Vienne.jpg',
        link: '/more-activities',
        para: 'Trekking, Crafts, Paragliding, markets and more',
        title: 'More Activities'
    },
    paragliding: {
        alt: 'Paragliding - Bersac Sur Rivalier and Haute Vienne and ',
        img: '/Paragliding Haute Vienne and Limousin.jpg',
        link: '/paragliding',
        para: '',
        title: 'Paragliding'
    },
    sup: {
        alt: 'Flying Water Sports SUP Bersac Sur Rivalier, Haute Vienne',
        img: '/water sports sup limoges.jpg',
        link: '/sup-stand-up-paddle',
        para: 'Stand Up Paddle board training and day trips',
        title: 'SUP'
    },
    trekking: {
        alt: 'Trekking Bersac Sur Rivalier and Bessines sur Gartempe, Haute Vienne',
        img: '/Trekking Haute Vienne.jpg',
        link: '/trekking',
        para: '',
        title: 'Trekking'
    },
    watersports: {
        alt: 'Flying Water sports Bersac Sur Rivalier, Haute Vienne, Limousin',
        img: '/flying watersports Bersac Limoges.jpg',
        link: '/watersports',
        para: 'SUP, Kayaks, Windsurfing, Wing Surfing and Foiling rentals and training.',
        title: 'Watersports'
    },
    waterSportsRental: {
        alt: 'Flying water sports equipment rental',
        img: '/water sports equipment rental.jpg',
        link: '/water-sports-rental',
        para: 'Water sports equipment rental.',
        title: 'Equipment Rental'
    },
    windsurfing: {
        alt: 'Windsurfing with flying water sports',
        img: '/watersports windsurfing lake saint pardoux.jpg',
        link: '/windsurfing',
        para: 'Windsurfing holidays training and day trips',
        title: 'Windsurfing'
    },
    wingSurfing: {
        alt: 'Wing Surfing and Foiling at Lac Saint Pardoux with Flying Water Sports',
        img: '/wingsurfing and foiling lake saint pardoux.jpg',
        link: '/wing-surfing',
        para: 'Wing Surfing and Foiling training and day trips',
        title: 'Wing and Foil'
    },
    xmass: {
        alt: 'Christmass Market in Bersac Sur Rivalier, Haute Vienne',
        buttonText: 'Markets',
        img: '/Christmass Markets Haute Vienne and Limousin.jpg',
        link: '/christmass-markets',
        para: '',
        title: 'Christmass Markets'
    }, 
}

export default function Cta({ data, minHeight }) {
    if (!data) return <></>

    const itemData = typeof data === 'string' ? ctaData[data] : data;

    const { title, para, img, alt, buttonText, link } = itemData;

    return (
        <Clickable 
            link={link}
            content={
                <div>
                    <Image
                        className={ styles.ctaImage }
                        src={img}
                        alt={alt} 
                        width={100}
                        height={100}
                    />

                    <div  style={{ minHeight: minHeight }} >
                        <div className={ styles.ctaTitle }>
                            <h4>{title}</h4>
                        </div>
                                
                        <p>{para}</p>
                    </div>

                    <div className={ styles.ctaButtonContainer }>
                        { link && <Button text={ buttonText || title } /> }
                    </div>
                </div>
            }
        />
    );
}