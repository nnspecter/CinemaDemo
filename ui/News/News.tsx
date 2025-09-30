import React from 'react'
import styles from "./News.module.scss"
import NewsSlide from './NewNewsSlide'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
const News = () => {
  return (
    <div className={styles.news}>
        
        
        <div className={styles.slider}>
          <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Autoplay]} 
        autoplay={{
          delay: 9000, // каждые 3 секунды
          disableOnInteraction: false, // не останавливать при ручном свайпе
        }}
        loop={true}
        
      >
          <SwiperSlide>
            <NewsSlide
            imgBackground="/images/news/Background2.jpg"
            name='НАСТОЯЩЕЕ ПОГРУЖЕНИЕ'
            desc="В ЗАЛЕ УСТАНОВЛЕНО ВЫСОКОКАЧЕСТВЕННОЕ ЗВУКОВОЕ ОБОРУДОВАНИЕ"
            img="/images/news/Chairs.png" 
            />  
          </SwiperSlide>
          <SwiperSlide>
            <NewsSlide
            imgBackground="/images/news/Background1.jpg"
            name='БОЛЬШЕ УДОБСТВА'
            desc="МЫ МОДЕРНИЗИРОВАЛИ КРЕСЛА В ЗАЛЕ, ВАС ЖДЕТ НАКЛОН НА 60 ГРАДУСОВ И УДОБНЫЕ  ПОДУШКИ. "
            img="/images/news/Chairs.png" 
            />
          </SwiperSlide>
          <SwiperSlide>
            <NewsSlide
            imgBackground="/images/news/Background3.jpg"
            name='ДЕШЕВО И ВКУСНО'
            desc="ТЕПЕРЬ ВЫ МОЖЕТЕ ЗАКУПИТЬСЯ ПОПКОРНОМ, НАПИТКАМИ, МНОЖЕСТВОМ СНЕКОВ ПРЯМО ПЕРЕД ФИЛЬМОМ"
            img="/images/news/Chairs.png" 
            />
          </SwiperSlide>
          </Swiper>
        </div>
    </div>
  )
}

export default News