import React from 'react'
import styles from "./News.module.scss"
import NewsSlide from './NewNewsSlide'
const News = () => {
  return (
    <div className={styles.news}>
        <img src="/images/news/AbstractBack.jpg"/>
        <div className={styles.title}>
            НОВОСТИ
            <div className={styles.line}></div>
        </div>
        <div className={styles.slider}>
            <NewsSlide
            imgBackground="/images/news/Background1.jpg"
            name='БОЛЬШЕ УДОБСТВА'
            desc="МЫ МОДЕРНИЗИРОВАЛИ КРЕСЛА В ЗАЛЕ, ВАС ЖДЕТ НАКЛОН НА 60 ГРАДУСОВ И УДОБНЫЕ  ПОДУШКИ. "
            img="/images/news/Chairs.png" 
            />
        </div>
    </div>
  )
}

export default News