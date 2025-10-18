import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
// Импорты CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useStore } from '../../store/oldZustand/useStore';
import FilmCard from '../Catalog/Card/Card';
import styles from "./Recomendations.module.scss"
import { useFilmStore } from '../../store/oldZustand/useFilmStore';
import { useCatalogQuery } from '../../api/queries';
interface RecomendationsProps {
    genre: string;
    filmId: number;
}
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
const Recomendations = ({genre, filmId} : RecomendationsProps) => {

    
    
    const {data: object} = useCatalogQuery();


    const[recomendations, setRecomendations] = useState<null | any>(null);

    useEffect (()=> {
        //if( object?.data ){setRecomendations((object.data.filter(item => item.genre.split(",").includes(genre.split(","))).filter(item => item.id !== filmId)))}
        if( object?.data ){
            setRecomendations((object.data.filter(item => {
                const itemGenres = item.genre.split(",").map(g => g.trim());
                const currentGenres = genre.split(",").map(g => g.trim());
                return itemGenres.some(g =>currentGenres.includes(g));
            }
            ).filter(item => item.id !== filmId)))}
    }, [object])

     console.log(genre)
    console.log("До фильтра", object?.data)
    console.log("После фильтра", recomendations) 

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