import React, { use, useEffect, useState } from 'react'
import styles from "./FilmSessions.module.scss"
import {ToggleButtonGroup} from '@mui/material';
import { WhiteToggleButton } from '../button/WhiteToggleButton';
import Seans from './seans/Seans';
import { useSessionQuery } from '../../api/queries';
import { useIdStore } from '../../store/useIdStore';

const FilmSessions = ({sessions}) => {
    const {setSessionid, sessionId} = useIdStore();
    const {data: seansData, isLoading} = useSessionQuery(sessionId ?? 0);
    
    useEffect(()=>{
        if(sessions?.[0]?.id) setSessionid(sessions?.[0]?.id);
    },[sessions])

    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newSessionId: number,
    ) => {
        if (newSessionId !== null) {
        setSessionid(newSessionId);
        console.log(newSessionId);
        }
    }

    
  return (
    <div className={styles.sessions}>
        <ToggleButtonGroup
            value={sessionId}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment">
            {sessions?.map((el)=>(
            <WhiteToggleButton key={el.id} value={el.id}>
                {el.time}
            </WhiteToggleButton>
            ))}
            
         </ToggleButtonGroup>
         
         <div className={styles.buttons}>
          <Seans sits={seansData?.data.sits} loading={isLoading}/>
         </div>
         
      
    </div>
  )
}

export default FilmSessions