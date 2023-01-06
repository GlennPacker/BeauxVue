import styles from '../styles/infoPanel.module.css';
import InfoTable from './infoTable';
import Image from 'next/image';
import Clickable from './clickable';

export default function InfoPanel({ data: { text, title, image, map, infoTable } }) {
  return (
    <div className="pageContainer">
      <div className="page">
        <div className={styles.infoPanel}>
          <h4 className={styles.title}>{title}</h4>

          <div className={styles.panelContent}>
            <div className={styles.panel1}>
              <div className={styles.text}>
                {text}
              </div>
              <div className={styles.infoTable}>
                <InfoTable data={infoTable} />
              </div>
            </div>

            <Image
              src={image}
              className={styles.image}
              alt={title}
              height="100"
              width="100"
            />

            <div className={styles.map}>
              {map.iframe}
              <div className={styles.mapLink}>
                <Clickable
                  link={map.link}
                  content="Large Directions"
                  show
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
