import React, { useEffect, useState } from 'react'
import styles from "./filmPropertyes.module.scss"
import { useStore } from "../../../store/useStore";


const FilmPropertyes = ({id}) => {
    const { object, loading, error, film, loadData, filteredFilm } = useStore();
  
    const idNum = Number(id);

  useEffect(() => {
    if (!Number.isFinite(idNum)) return; // нет валидного id — ничего не делаем
    filteredFilm(idNum); // не нужно await — zustand сам дернёт set и вызовет ререндер
  }, [idNum, filteredFilm]);

  useEffect(() => {
    // этот лог сработает, когда film обновится
    if (film) console.log("Нашли фильм:", film);
  }, [film]);


  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

    
  return (
    <div className={styles.filmPropertyes}>
        <div className={styles.block1}>
            
        </div>
        <div className={styles.block2}>
            
        </div>
    </div>
  )
}

export default FilmPropertyes