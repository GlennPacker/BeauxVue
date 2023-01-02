import Image from 'next/image'
import styles from '../styles/cover.module.css'
import Link from 'next/link';

export default function Cover({ data: { src, title, alt, link, textClass = '', para = ''} }) {
    return (
        <Link href='/'>
            <div className={ styles.imageContainer } >

                <Image 
                    className={ styles.image } 
                    src={ src }
                    height={400}
                    width={1300}
                    alt={ alt }
                />
                <div className={ `${styles.centered} ${ textClass ? styles[textClass] : ''}` }>
                    <h1 className={ styles.title }>{ title }</h1>
                    <div>{ para }</div>
                </div>
            </div>
        </Link>
    )
}