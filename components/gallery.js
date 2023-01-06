import styles from '../styles/Gallery.module.css';
import GalleryItem from './galleryItem';

export default function Gallery({ items }) {
  if (!items || !items.length) return <></>;
  return (
    items && <div className={styles.galleryListContainer}>
      {
        items.map((galleryItem, index) => (
          <GalleryItem
            className={styles.img}
            key={index}
            data={galleryItem}
          />
        ))
      }
    </div>
  );
}