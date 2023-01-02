import Cta from './cta';
import styles from '../styles/Cta.module.css'

export default function CtaList({ctaData: { items, minHeight }}) {
    return (
        <div className={ styles.ctaListContainer }>
            {
                items.map((cta, index) => (
                    <Cta
                        key={index}
                        data={cta}
                        minHeight={ minHeight }
                   />
                ))
            }
        </div>
    );
  }