import React from 'react'
import styles from "./SubmitButton.module.scss"
import { useSeansStore } from '../../../store/useSeansStore'
const SubmitButton = () => {
  const {handleOrder} = useSeansStore();
  return (
    <div className={styles.SubmitButton}>
        <button onClick={handleOrder}>ПРИОБРЕСТИ ВЫБРАННОЕ</button>
    </div>
  )
}

export default SubmitButton