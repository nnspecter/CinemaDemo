import { Checkbox } from '@mui/material'
import React, { useState } from 'react'
import styles from "./SeansButton.module.scss"
import Image from 'next/image'
import { useBasePath } from '../../../../hooks/useBasePath'
import { useReserve, useUnReserve } from '../../../../api/mutations'
import { useIdStore } from '../../../../store/useIdStore'


interface SeansButtonProps {
  state: "FREE" | "TAKEN" | "BOOKED" | "IN_CART",
  id: string,
  handleLoading: (pending: boolean) => void,
}

const SeansButton = ({ state, id, handleLoading}: SeansButtonProps) => {
  const prefix = useBasePath();
  // const { handleReserve, handleUnReserve, getSeans, clearSeans, seansID } = useSeansStore();
  
  const reserveMutation = useReserve();
  const unReserveMutation = useUnReserve();
  const{sessionId} = useIdStore();


  const handleChange2 = async(e: React.ChangeEvent<HTMLInputElement> ) => {
    if (!id) return;
    try {
      if (e.target.checked) {
        handleLoading(true);
        await reserveMutation.mutateAsync(id);
        
        
      } else {
        handleLoading(true);
        await unReserveMutation.mutateAsync(id);
        
      }
    }
    catch(err) {
      console.error("Ошибка при изменении места:", err);
    }
    finally{
      handleLoading(false);
    }
  }

  // const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (!seansID) return;
  //   setLoading(true);

  //   try {
  //     if (e.target.checked) {
  //       await handleReserve(id);
  //     } else {
  //       await handleUnReserve(id);
  //     }

  //     clearSeans();
  //     await getSeans(seansID); // ждём пока сервер вернёт актуальное состояние
  //   } catch (err) {
  //     console.error("Ошибка при изменении места:", err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  
  return (
    <div className={styles.button}>
      <Checkbox
        icon={
          (state === "TAKEN" || state === "BOOKED")
          ? <Image src={`${prefix}/images/sessions/unactive.png`} width={80} height={80} alt="" />
          : <Image src={`${prefix}/images/sessions/active.png`} width={80} height={80} alt="" />
}
        checkedIcon={
          <Image src={`${prefix}/images/sessions/pressedB.png`} width={80} height={80} alt="" />
        }
        color="success"
        sx={{ p: 0, m: 0 }}
        disabled={state === "TAKEN" || state === "BOOKED" }// блокируем если место занято или идёт запрос
        checked={state === "IN_CART"} // состояние зависит только от сервера
        onChange={handleChange2}
      />
    </div>
  );
}

export default SeansButton;
