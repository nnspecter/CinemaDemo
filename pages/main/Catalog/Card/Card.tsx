import React from 'react'
import styles from "./FilmCard.module.scss"

interface FilmCardProps {
  name: string;
  imageUrl: string;
}

const FilmCard = ({name, imageUrl, duration}) => {
  return (
    <div className={styles.card}>
        <img src={imageUrl}></img>
        <div className={styles.cardOverlay}>
            {name}
            <div className={styles.duration}>
              {Math.round(duration / 60)} часа {duration % 60} минут
            </div>
        </div>
    </div>
  )
}

export default FilmCard