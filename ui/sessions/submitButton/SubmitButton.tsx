import React, { useState } from 'react'
import styles from "./SubmitButton.module.scss"
import { useSeansStore } from '../../../store/useSeansStore'
import { Button } from '@mui/material';
const SubmitButton = () => {
  const [loading, setLoading] = useState(false);
  const {handleOrder, getSeans, clearSeans, seansID} = useSeansStore();
  const handleClick = async () => {
    try{
      setLoading(true);
      await handleOrder();
      if(seansID) await getSeans(seansID)
      setLoading(false)
    }
    catch(err){
      console.log("Кнопка сдохла", err.message)
    }
  }
  return (
    <div className={styles.SubmitButton}>
        <Button onClick={handleClick}>ПРИОБРЕСТИ ВЫБРАННОЕ</Button>
    </div>
  )
}

export default SubmitButton