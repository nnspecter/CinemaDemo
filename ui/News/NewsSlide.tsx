import React from 'react'
import styles from "./NewsSlide.module.scss"
import { useBasePath } from '../../hooks/useBasePath';
interface NewsSlideProps{
    img: string;
    imgBackground: string;
    title: string;
    desc: string;
}

const NewsSlide : React.FC <NewsSlideProps> = ({img, title, desc, imgBackground}) => {
  const prefix = useBasePath();
  return (
    <div className={styles.NewsSlide}>
        <img src={`${prefix}${imgBackground}`}/>
        <div className={styles.title}>
            {title}
        </div>
        <div className={styles.description}>
            {desc}
        </div>
    </div>
  )
}

export default NewsSlide