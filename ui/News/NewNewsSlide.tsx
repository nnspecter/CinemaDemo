import React from 'react'
import Image from 'next/image'
import styles from "./NewNewsSlide.module.scss"
import { useBasePath } from '../../hooks/useBasePath';

interface PreviewSlideProps {
  imgBackground: string; // путь к фону
  name: string;          // название
  desc: string;          // описание
  img: string;        // картинка
}


const NewsSlide: React.FC<PreviewSlideProps> = ({imgBackground, name, desc, img}) => {
  const prefix = useBasePath();
  
  return (
    <div className={styles.newsSlide}>
    
        <div className={styles.prewiewImage}>
            <Image
            src={`${prefix} ${imgBackground}`}
            alt='Back'
            fill
            priority
            className={styles.img}
            />
        </div>
        <div className={styles.onImageBlock}>
            <div className={styles.text}>
                <h1>{name}</h1>
                <p>{desc}</p>
            </div>
        </div>
    </div>
  )
}

export default NewsSlide