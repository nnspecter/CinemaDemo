"use client";
import React from 'react'
import styles from "./Preview.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Импорты CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import PreviewSlide from './PreviewSlide';

const Preview = () => {
  return (
    <div className={styles.preview}>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Autoplay]} 
        autoplay={{
          delay: 6000, // каждые 3 секунды
          disableOnInteraction: false, // не останавливать при ручном свайпе
        }}
        loop={true}
        
      >
        <SwiperSlide>
          <PreviewSlide 
          imgBackground="/images/preview/InterstellarGradient.png"
          year="2023"
          name="Интерстеллар возрождение"
          desc="Сюжет рассказывает о бывшем пилоте НАСА Купере, который вместе с группой исследователей отправляется через червоточину в космос, чтобы найти новый дом для человечества, стоящего на грани вымирания из-за экологической катастрофы на Земле."
          poster="/images/preview/InterstellarLogo.jpg"/>
        </SwiperSlide>
        <SwiperSlide>
          <PreviewSlide 
          imgBackground="/images/preview/AlienGradient.png"
          year="2024"
          name="Чужой Ромул"
          desc="Экипаж космического буксира «Ностромо» получает сигнал бедствия с неизвестной планеты. Прибыв на место, они находят гигантский инопланетный корабль и таинственные коконы. Один из членов команды подвергается нападению иноплантической формы жизни, которая позже вырывается наружу и начинает охоту на людей."
          poster="/images/preview/AlienLogo.jpg"/>
        </SwiperSlide>
        <SwiperSlide>
          <PreviewSlide 
          imgBackground="/images/preview/DeadpoolGradient.png"
          year="2024"
          name="Дедпул"
          desc="Бывший спецназовец Уэйд Уилсон узнаёт о смертельной болезни и соглашается на эксперимент, обещающий исцеление. Но вместо обычного излечения он получает невероятную способность к регенерации, изуродованную внешность и безумное чувство юмора."
          poster="/images/preview/DeadPoolLogo.jpg"/>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Preview
