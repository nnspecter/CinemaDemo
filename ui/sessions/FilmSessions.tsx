import React, { useEffect, useState } from 'react'
import styles from "./FilmSessions.module.scss"
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { WhiteToggleButton } from '../button/WhiteToggleButton';
import { useFilmStore } from '../../store/useFilmStore';
import { useSeansStore } from '../../store/useSeansStore';
import Loading from '../loading/Loading';
import Seans from './seans/Seans';
import SeansButton from './seans/seansButton/SeansButton';
import SubmitButton from './submitButton/SubmitButton';
const FilmSessions = () => {
    const [sessionId, setSessionId] = useState<number | null>(null);
    const {film} = useFilmStore();
    const {loading, getSeans} = useSeansStore();
    if (film === null) return(<></>)

      useEffect(()=>{
        if(film.sessions){
          console.log(1)
          setSessionId(film.sessions[0].id);
          getSeans(film.sessions[0].id);
        }
        
        
      }, [film]);

    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newSessionId: number,
    ) => {
        if (newSessionId !== null) {
        setSessionId(newSessionId);
        console.log(newSessionId);
        getSeans(newSessionId);
        }
    }

    
  return (
    <div className={styles.sessions}>
        <ToggleButtonGroup
            value={sessionId}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment">
            {film.sessions.map((el)=>(
            <WhiteToggleButton key={el.id} value={el.id}>
                {el.time}
            </WhiteToggleButton>
            ))}
            
         </ToggleButtonGroup>
         
         <div className={styles.buttons}>
          <Seans/>
         </div>
         <SubmitButton/>
      
    </div>
  )
}

export default FilmSessions