
import styles from '../styles/breadCrumb.module.css'
import Link from 'next/link';

export default function BreadCrumb({ breadCrumb }) {
  if (!breadCrumb) return <></>

  return (
    <div className="pageContainer">
      <div className='page'>
        <div className={styles.breadcrumbContainer}>
          {
            breadCrumb.map(({ link, text }) => (
              <div key={text}>
                {
                  link ?
                    <Link className={styles.hyper} href={link}> {text} &gt; </Link> :
                    <span>{text}</span>
                }
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}