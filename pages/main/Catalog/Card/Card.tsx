import React from 'react'
import styles from "./FilmCard.module.scss"
import Link from 'next/link';
import { useStore } from '../../../../store/useStore';
import { Button } from '@mui/material';

interface FilmCardProps {
  name: string;
  imageUrl: string;
}

const FilmCard = ({id, name, imageUrl, duration, sessions}) => {
  const {handleTime} = useStore()
  const now = new Date().toLocaleTimeString();
  console.log(now)
  return (
    <div className={styles.card}>
        <div className={styles.cardPoster}>
            <img src={imageUrl}></img>
            <div className={styles.cardOverlay}>
                {name}
                <div className={styles.duration}>
                  {Math.round(duration / 60)} часа { duration % 60 > 5 &&`${duration % 60} минут`}
                </div>
                <Button variant="contained" href={`/film/${id}`}>Купить билеты</Button>
            </div>
        </div>
        <div className={styles.cardSessions}>
          {sessions?.map((el)=>(
            <div key={el.id} className={handleTime(el.time) ? styles.yesTime : styles.noTime} >
              {el.time}
            </div>
          ))}
        </div>
    </div>
  )
}

export default FilmCard