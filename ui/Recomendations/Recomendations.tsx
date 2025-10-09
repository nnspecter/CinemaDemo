import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
// Импорты CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import PreviewSlide from '../Preview/PreviewSlide';
import { useStore } from '../../store/useStore';
import FilmCard from '../Catalog/Card/Card';
import styles from "./Recomendations.module.scss"
import { useFilmStore } from '../../store/useFilmStore';

const Recomendations = () => {

    interface Movie {
        id: number | string;
        name: string;
        genre: string;
        posterUrlPreview: string | null;
        posterUrl: string;
        duration: number;
        year: number;
        sessions: any
        description: string;
    }

    const {object} = useStore(); 
    const {film} = useFilmStore();
    const[recomendations, setRecomendations] = useState<null | Movie[]>(null);

    useEffect (()=> {
        if(film && object ){setRecomendations(object.data.filter(item => item.genre.toLowerCase().includes(film.genre.toLowerCase())))}
    }, [film])
    console.log(` После фильтра ${recomendations}`)  
    console.log(` До фильтра  ${object?.data}`)

    return (
    <div className={styles.recomendations}>
        <Swiper spaceBetween={20}
            slidesPerView={"auto"}
            loop={true}
            modules={[Autoplay]}
            autoplay={{
                delay: 6000, // каждые 3 секунды
                disableOnInteraction: false, // не останавливать при ручном свайпе
            }}
            style={{ paddingTop: "10px" }}
            >
        {recomendations ? (recomendations.map((el)=>(
                <SwiperSlide style={{ width: "200px" }}>
                    <div key={`баннер - ${el.id}` }>
                        <FilmCard id={el.id} name={el.name} posterUrlPreview={el.posterUrlPreview} posterUrl={el.posterUrl} duration={el.duration} sessions={el.sessions} description={el.description}/>
                    </div>
                </SwiperSlide>
            ))):(<></>)}
            
        </Swiper>
    </div>
    
  )
}

export default Recomendations