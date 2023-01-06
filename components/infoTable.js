import styles from '../styles/infoTable.module.css';
import Clickable from './clickable';

export default function InfoTable({ data }) {
  const row = ({ title, link, data, disabled }) =>
    !disabled ? <>
      <div className={styles.titleCell} >
        <Clickable
          content={title}
          link={link}
          show
        />
      </div>
      <div className={styles.dataCell}>{data || '✓'}</div>
    </> :
      <></>;

  return (
    <div className={styles.infoTable}>
      {
        data.map(item => (
          <div
            key={item.title}
            className={styles.row}
          >
            {row(item)}
          </div>
        ))
      }
    </div>
  )
};