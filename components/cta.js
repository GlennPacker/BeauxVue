import Image from 'next/image';
import Button from './button';
import styles from '../styles/Cta.module.css'
import Clickable from './clickable';
import { useTranslations } from 'use-intl';

export default function Cta({ data, minHeight }) {
  const t = useTranslations('cta');

  if (!data) return <></>

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

  const lookupData = [{
    node: 'accomodation',
    img: '/Beax Vue Chambres dHotes Bersac Sur Rivalier.jpg',
  }, {
    node: 'crafts',
    img: '/Crafts.jpg',
  }, {
    node: 'cycling',
    img: '/cycling-limoges.jpg',
  }, {
    node: 'etangDeLaBrousse',
    img: '/Étang de la Brousse.jpg',
    link: 'marsac',
    buttonText: true,
  }, {
    node: 'etangDeJonas',
    img: '/Etang de Jonas.jpg',
    link: 'etang-de-jonas',
  }, {
    node: 'etangDeSagnat',
    img: '/Etang de Sagnat Bessines Sur Gartempe.jpg',
    link: 'etang-de-sagnat',
  }, {
    node: 'fishing',
    img: '/Saint Sulpice Lauriere Haute Vienne Fishing Lake.jpg',
    buttonText: true,
  }, {
    node: 'gartempe',
    img: '/Gartempe Bersac Limoges.jpg',
  }, {
    node: 'kayaking',
    img: '/kayaking with flying water sports Haute Viene.jpg',
  }, {
    node: 'lakesAndRivers',
    img: '/le Marcheix le Taurion river.jpg',
    link: 'lakes-and-rivers',
  }, {
    node: 'fishing',
    img: '/Saint Sulpice Lauriere Haute Vienne Fishing Lake.jpg',
    buttonText: true,
  }, {
    node: 'laJonchèreSaintMaurice',
    img: '/La Jonchère-Saint-Maurice.jpg',
    link: 'la-jonchere-saint-maurice',
    buttonText: true,
  }, {
    node: 'leTaurionChatelusLeMarcheix',
    img: '/Le Taurion Chatelus le Marcheix.jpg',
    link: 'le-taurion-chatelus-le-marcheix',
    buttonText: true,
  }, {
    node: 'leTaurionPontDuDognon',
    img: '/Le Taurion Pont du Dognon.jpg',
    link: 'le-taurion-pont-du-dognon',
    buttonText: true,
  }, {
    node: 'lacDeSaintPardoux',
    img: '/Lac de Saint Pardoux Haute Vienne.jpg',
    link: 'lac-de-saint-pardoux',
  }, {
    node: 'lacDeVassivière',
    img: '/Lac de Vassivière.jpg',
    link: 'lac-de-vassiviere',
  }, {
    node: 'local',
    img: '/Folles-Viaduc de Rocherolles - near Bersac.jpg',
  }, {
    node: 'moreActivities',
    img: '/More activities while staying at Beaux Vuex, Haute Vienne.jpg',
    link: 'more-activities',
  }, {
    node: 'paragliding',
    img: '/Paragliding Haute Vienne and Limousin.jpg',
  }, {
    node: 'sup',
    img: '/water sports sup limoges.jpg',
    link: 'sup-stand-up-paddle',
    buttonText: true,
  }, {
    node: 'trekking',
    img: '/Trekking Haute Vienne.jpg',
  }, {
    node: 'vienne',
    img: '/Vienne.jpg',
  }, {
    node: 'watersports',
    img: '/flying watersports Bersac Limoges.jpg',
  }, {
    node: 'waterSportsRental',
    img: '/water sports equipment rental.jpg',
    link: 'water-sports-rental',
    buttonText: true,
  }, {
    node: 'windsurfing',
    img: '/watersports windsurfing lake saint pardoux.jpg',
  }, {
    node: 'wingSurfing',
    img: '/wingsurfing and foiling lake saint pardoux.jpg',
    link: 'wing-surfing',
  }, {
    node: 'xmass',
    buttonText: true,
    img: '/Christmass Markets Haute Vienne and Limousin.jpg',
    link: 'christmass-markets',
  }, {
    node: 'saintSulpiceLauriereLake',
    img: '/Saint Sulpice Lauriere Haute Vienne Fishing Lake.jpg',
    link: 'saint-sulpice-lauriere-lake',
  }, {
    node: 'lacDuPont',
    img: `/Lac du Pont à l'Âge.jpg`,
    link: 'lac-du-pont',
  },].map(i => {
    const data = {
      alt: t(`${i.node}.alt`),
      img: i.img,
      link: `/${i.link || i.node.replace(' ', '-').toLocaleLowerCase()}`,
      para: t(`${i.node}.para`),
      title: t(`${i.node}.title`),
    }

    if (i.buttonText) data.buttonText = t(`${i.node}.buttonText`);

    return { [i.node]: data };
  })

  const ctaData = Object.assign(...lookupData);

  const itemData = typeof data === 'string' ? ctaData[data] : data;
  const { title, para, img, alt, buttonText, link } = itemData || {};

  return (
    <Clickable
      link={link}
      content={
        <div>
          <Image
            className={styles.ctaImage}
            src={img}
            alt={alt}
            width={100}
            height={100}
          />

          <div style={{ minHeight: minHeight }} >
            <div className={styles.ctaTitle}>
              <h4>{title}</h4>
            </div>

            <p>{para}</p>
          </div>

          <div className={styles.ctaButtonContainer}>
            {link && <Button text={buttonText || title} />}
          </div>
        </div>
      }
    />
  );
}