import { Checkbox } from '@mui/material'
import React from 'react'
import styles from "./SeansButton.module.scss"
import Image from 'next/image'
import { useBasePath } from '../../../../hooks/useBasePath'
import { useSeansStore } from '../../../../store/useSeansStore'
interface SeansButtonProps {
  state: "FREE" | "NONE" | string,
  id: string

}
const SeansButton = ({state, id}: SeansButtonProps) => {
  const prefix = useBasePath();
  const {handleReserve, handleUnReserve} = useSeansStore();
  return (
    <div className={styles.button}>
        { state === "FREE" && <Checkbox 
          icon={<Image src={`${prefix}/images/sessions/active.png`} width={80} height={80} alt=""/> as React.ReactNode}
          checkedIcon={<Image src={`${prefix}/images/sessions/pressedB.png`} width={80} height={80} alt=""/> as React.ReactNode}
          color="success"
          sx={{ p: 0, m: 0 }}
          onChange={(e) => {
            if (e.target.checked) {
            handleReserve(id); // при установке галочки
            } else {
            handleUnReserve(id); // при снятии галочки
            }}
          }
        />}
        
        { state !== "FREE" && <Checkbox 
          icon={<Image src={`${prefix}/images/sessions/unactive.png`} width={80} height={80} alt=""/> as React.ReactNode}
          disabled
          sx={{ p: 0, m: 0 }}
        />}
    </div>
  );
}

export default SeansButton