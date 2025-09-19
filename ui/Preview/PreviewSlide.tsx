import React from 'react'
import Image from 'next/image'
import styles from "./PreviewSlide.module.scss"
import { useBasePath } from '../../hooks/useBasePath';

interface PreviewSlideProps {
  imgBackground: string; // путь к фону
  year: number | string; // год
  name: string;          // название
  desc: string;          // описание
  poster: string;        // постер / логотип
}


const PreviewSlide: React.FC<PreviewSlideProps> = ({imgBackground, year, name, desc, poster}) => {
  const prefix = useBasePath();
  return (
    <div className={styles.previewSlide}>
    
        <div className={styles.prewiewImage}>
            <Image
            src={`${prefix}${imgBackground}`}
            alt='Back'
            fill
            priority
            className={styles.img}
            />
        </div>
        <div className={styles.onImageBlock}>
            <div className={styles.text}>
                <p>{year}</p>
                <h1>{name}</h1>
                <p>{desc}</p>
            </div>
            <img src={`${prefix}${poster}`} alt="KAPTINKA"></img>
        </div>
    </div>
  )
}

export default PreviewSlide