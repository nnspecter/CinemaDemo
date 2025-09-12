import React from 'react'
import Image from 'next/image'
import styles from "./NewNewsSlide.module.scss"

interface PreviewSlideProps {
  imgBackground: string; // путь к фону
  name: string;          // название
  desc: string;          // описание
  img: string;        // картинка
}


const NewsSlide: React.FC<PreviewSlideProps> = ({imgBackground, name, desc, img}) => {
  return (
    <div className={styles.newsSlide}>
    
        <div className={styles.prewiewImage}>
            <Image
            src={imgBackground}
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