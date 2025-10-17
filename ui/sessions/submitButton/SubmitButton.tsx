import React, { useState } from 'react'
import styles from "./SubmitButton.module.scss"
import { Button } from '@mui/material';
import { useOrder } from '../../../api/mutations';
interface SubmitButton{
  handleLoading: (loading: boolean) => void
}
const SubmitButton = ({handleLoading}) => {
  const [loading, setLoading] = useState(false);
  const orderMutation = useOrder();

  const handleClick = async () => {
    try{
      handleLoading(true);
      await orderMutation.mutateAsync();
    }
    catch(err){
      console.log("Кнопка сдохла", err.message);
    }
    finally{
      handleLoading(false);
    }
  }
  return (
    <div className={styles.SubmitButton}>
        <Button onClick={handleClick}>ПРИОБРЕСТИ ВЫБРАННОЕ</Button>
    </div>
  )
}

export default SubmitButton