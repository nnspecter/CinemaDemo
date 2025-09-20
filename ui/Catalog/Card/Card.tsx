import React from 'react'
import styles from "./FilmCard.module.scss"
import Link from 'next/link';
import { useStore } from '../../../store/useStore';
import { Button } from '@mui/material';
import Image from 'next/image';


const FilmCard = ({id, name, posterUrlPreview, duration, sessions, description, posterUrl}) => {
  const {handleTime} = useStore()
  const now = new Date().toLocaleTimeString();
  
  
  return (
    <div className={styles.card}>
        <div className={styles.cardPoster}>
            <Image src={posterUrlPreview ?? posterUrl} width={200} height={300}alt=""/>
            <div className={styles.cardOverlay}>
                <div className={styles.description}>
                  {description}
                </div>
                <div className={styles.duration}>
                  {Math.round(duration / 60)} часа { duration % 60 > 5 &&`${duration % 60} минут`}
                </div>
                <Link href={`/film/${id}`} passHref>
                <Button variant="contained">Купить билеты</Button>
                </Link>
            </div>
        </div>

        <div className={styles.name}>
          {name}
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