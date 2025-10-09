import React, { useState } from 'react'
import { useSeansStore } from '../../../store/useSeansStore';
import Loading from '../../loading/Loading';
import styles from "./Seans.module.scss"
import SeansButton from './seansButton/SeansButton';


const Seans = () => {
  const {sits, loading, error} = useSeansStore();
  if(loading || !sits) return <div className='loadingSessions'><Loading/></div>
  return (
    <div className={styles.seans}>
      
  {sits.map((row, rowIndex) => (
    <div className={styles.row} key={`row-${rowIndex}`}>
      {row.map((sit) => (
        <div key={sit.id} className={styles.col}>
          <SeansButton state={sit.state} id={sit.id}/>
        </div>
      ))}
    </div>
  ))}
  ЭКРАН
  <div className={styles.screen}> </div>
</div>
  );

}

export default Seans