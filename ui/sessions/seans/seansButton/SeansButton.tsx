import { Checkbox } from '@mui/material'
import React from 'react'
import styles from "./SeansButton.module.scss"
import Image from 'next/image'
import { useBasePath } from '../../../../hooks/useBasePath'
import { useSeansStore } from '../../../../store/useSeansStore'

interface SeansButtonProps {
  state: "FREE" | "TAKEN" | "BOOKED" | "IN_CART",
  id: string
}

const SeansButton = ({ state, id }: SeansButtonProps) => {
  const prefix = useBasePath();
  const { handleReserve, handleUnReserve, getSeans, clearSeans, seansID } = useSeansStore();

  const [loading, setLoading] = React.useState(false);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!seansID) return;
    setLoading(true);

    try {
      if (e.target.checked) {
        await handleReserve(id);
      } else {
        await handleUnReserve(id);
      }

      clearSeans();
      await getSeans(seansID); // ждём пока сервер вернёт актуальное состояние
    } catch (err) {
      console.error("Ошибка при изменении места:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.button}>
      <Checkbox
        icon={
          (state === "TAKEN" || state === "BOOKED") ? (
            (state === "BOOKED" ) ? (
              <Image src={`${prefix}/images/sessions/unactive.png`} width={80} height={80} alt="" />
            ) : (
              <Image src={`${prefix}/images/sessions/yourPlace.png`} width={80} height={80} alt="" />
            )) : (
            <Image src={`${prefix}/images/sessions/active.png`} width={80} height={80} alt="" />
          )
        }
        checkedIcon={
          <Image src={`${prefix}/images/sessions/pressedB.png`} width={80} height={80} alt="" />
        }
        color="success"
        sx={{ p: 0, m: 0 }}
        disabled={state === "TAKEN" || loading} // блокируем если место занято или идёт запрос
        checked={state === "BOOKED" || state === "IN_CART"} // состояние зависит только от сервера
        onChange={handleChange}
      />
    </div>
  );
}

export default SeansButton;
