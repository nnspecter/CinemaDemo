import React, { useState } from 'react'
import Loading from '../../loading/Loading';
import styles from "./Seans.module.scss"
import SeansButton from './seansButton/SeansButton';
import SubmitButton from '../submitButton/SubmitButton';


const Seans = ({sits, loading}) => {
  const[isPending, setIsPending] = useState(false);

  const handleLoading = (pending: boolean) => {
    setIsPending(pending);
  }
  if(loading || !sits || isPending) return <div className='loadingSessions'><Loading/></div>
  
  return (
    <div className={styles.seans}>
      {sits.map((row, rowIndex) => (
        <div className={styles.row} key={`row-${rowIndex}`}>
          {row.map((sit) => (
            <div key={sit.id} className={styles.col}>
              <SeansButton state={sit.state} id={sit.id} handleLoading={handleLoading} />
            </div>
          ))}
        </div>
      ))}
  ЭКРАН
  <div className={styles.screen}> </div>
  <SubmitButton handleLoading={handleLoading}/>
</div>
  );

}

export default Seans