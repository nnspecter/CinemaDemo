import React, { use, useEffect, useState } from 'react'
import styles from "./SubmitButton.module.scss"
import { Button } from '@mui/material';
import { useOrder } from '../../../api/mutations';

const SubmitButton = ({handleLoading, sits}) => {
  const [active, setActive] = useState(false);
  const orderMutation = useOrder();

  useEffect(()=>{
    handleCheck(sits);
  }, [sits]);

  const handleCheck = (sits) => {
    for(let i = 0; i < sits.length; i++){
      for(let j = 0; j < sits[i].length; j++){
        if(sits[i][j].state === "IN_CART"){
          setActive(true);
          return
        }
      }
    };
    setActive(false);
  }

  const handleClick = async () => {

    if(!active) return;

    try{
      handleLoading(true);
      await orderMutation.mutateAsync();
    }
    catch(err){
      console.log("Кнопка испустила дух", err.message);
    }
    finally{
      handleLoading(false);
    }
  }
  return (
    <div className={styles.SubmitButton}>
      {!active ?
       <p style = {{paddingTop: 10, }}>ВЫБЕРИТЕ МЕСТА ДЛЯ АРЕНДЫ</p> 
       : 
       <Button 
          onClick={handleClick}
          disabled={!active}
          >ПРИОБРЕСТИ ВЫБРАННОЕ
        </Button>
      }  
    </div>
  )
}

export default SubmitButton