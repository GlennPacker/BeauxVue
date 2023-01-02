/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Gallery.module.css';
import Image from 'next/image';
import { useState } from 'react';

export default function CtaList({ data: { src, alt } }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Image 
                className={styles.img}
                src={ src } 
                alt={alt}
                width='300'
                height='225'
                onClick={ () => setIsOpen(true) }
            />
        { isOpen && 
            <div 
                className={ styles.modalBackground }  
                onClick={ () => setIsOpen(false) }
            >
                <div style={{
                    width: 'calc(100vw - 4rem)', 
                    position: 'absolute', 
                    top: 0, 
                    backgroundColor: 'white', 
                    padding: '2rem 2rem 2rem 2rem', 
                    border: '1px solid black', 
                    margin: '2rem', 
                    zIndex: '1000',
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'end',
                }}>
                    <div className={ styles.modal }>
                        <img 
                            className={styles.largeImg}
                            src={ src } 
                            alt={alt}
                            onClick={ () => setIsOpen(false) }
                        />
                        <div 
                            className={ styles.close }
                            onClick={ () => setIsOpen(false) }
                        >
                            X
                        </div>                    
                        
                    </div>
                </div>
            </div>
        }
        </>
    );
  }