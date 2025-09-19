import React, { useEffect, useState } from 'react'
import styles from "./filmPropertyes.module.scss"
import { useFilmStore } from "../../store/useFilmStore";
import Image from 'next/image';


const FilmPropertyes = () => {
    const {film} = useFilmStore();
    if (film === null) return(<></>)


    
  return (
    <div className={styles.filmPropertyes}>
      <div className={styles.imgBackground}>
          <img src={film.posterUrl}/>
        </div>
      <div className={styles.filmPropertyesContent}>
          <div className={styles.block1}>
              <img src={`${film.posterUrlPreview}`} alt=''/>
          </div>
          <div className={styles.block2}>
            <div className={styles.name}>{film.name}</div>
            <div className={styles.year}><h3>Год выпуска: </h3> {film.year}</div>
            <div className={styles.genre}><h3>Жанры: </h3> {film.genre}</div> 
            <div className={styles.duration}>
              <h3>Продолжительность: </h3> {Math.round(film.duration / 60)} часа { film.duration % 60 > 5 && `${film.duration % 60} минут`}
            </div>
            <div className={styles.description}>
              <h3>Описание: </h3> {film.description}
            </div>
          </div>
      </div>
    </div>  
  )
}

export default FilmPropertyes