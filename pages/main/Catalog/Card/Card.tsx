import React from 'react'
import styles from "./FilmCard.module.scss"
import Link from 'next/link';

interface FilmCardProps {
  name: string;
  imageUrl: string;
}

const FilmCard = ({id, name, imageUrl, duration}) => {
  return (
    //<Link href={`/film/${id}`}>
      <div className={styles.card}>
          <img src={imageUrl}></img>
          <div className={styles.cardOverlay}>
              {name}
              <div className={styles.duration}>
                {Math.round(duration / 60)} часа {duration % 60} минут
              </div>
          </div>
      </div>
    //</Link>
  )
}

export default FilmCard