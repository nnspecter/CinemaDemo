import React from 'react'
import styles from "./SubmitButton.module.scss"
import { useSeansStore } from '../../../store/useSeansStore'
import { Button } from '@mui/material';
const SubmitButton = () => {
  const {handleOrder, getSeans, clearSeans, seansID} = useSeansStore();
  return (
    <div className={styles.SubmitButton}>
        <Button onClick={() => {handleOrder(); if(seansID){getSeans(seansID)}}}>ПРИОБРЕСТИ ВЫБРАННОЕ</Button>
    </div>
  )
}

export default SubmitButton