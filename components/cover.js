import Image from 'next/image';
import styles from '../styles/cover.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Cover({ data: { src, title, alt, link, textClass = '', para = '' } }) {
  const router = useRouter();

  return (
    <>
      <div className={styles.flagContainer} >
        {router.locale !== 'en' &&
          <Link href={router.route} locale="en">
            <Image
              className={styles.flag}
              src="/unionjack.jpg"
              height={39}
              width={75}
              alt="French"
            />
          </Link>
        }
        {router.locale !== 'fr' &&
          <Link href={router.route} locale="fr">
            <Image
              className={styles.flag}
              src="/tricolore.jpg"
              height={39}
              width={75}
              alt="English"
            />
          </Link>
        }
      </div>
      <Link href='/'>
        <div className={styles.imageContainer} >
          <Image
            className={styles.image}
            src={src}
            height={400}
            width={1300}
            alt={alt}
            priority
          />
          <div className={`${styles.centered} ${textClass ? styles[textClass] : ''}`}>
            <h1 className={styles.title}>{title}</h1>
            <div>{para}</div>
          </div>
        </div>
      </Link>
    </>
  )
}