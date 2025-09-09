import React, { useEffect, useState } from 'react'
import styles from "./FilmSessions.module.scss"
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { WhiteToggleButton } from './button/WhiteToggleButton';
import { useFilmStore } from '../../../store/useFilmStore';
import { useSeansStore } from '../../../store/useSeansStore';
import Loading from '../../loading/Loading';
import Seans from './seans/Seans';
const FilmSessions = () => {
    const [sessionId, setSessionId] = useState(1);
    const {film} = useFilmStore();
    const {loading, getSeans} = useSeansStore();
    if (film === null) return(<></>)

      useEffect(()=>{
        getSeans(film.sessions[0].id);
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
    <div>
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
         
         <Seans/>
         
    </div>
  )
}

export default FilmSessions