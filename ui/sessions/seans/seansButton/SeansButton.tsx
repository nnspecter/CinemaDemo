import { Checkbox } from '@mui/material'
import React from 'react'
import styles from "./SeansButton.module.scss"
interface SeansButtonProps {
  state: "FREE" | "NONE" | string
}
const SeansButton = ({ state}: SeansButtonProps) => {
  return (
    <div className={styles.button}>
        { state === "FREE" && <Checkbox 
          icon={<img src="/images/sessions/active.png"/> as React.ReactNode}
          checkedIcon={<img src="/images/sessions/pressedB.png"/> as React.ReactNode}
          color="success"
          sx={{ p: 0, m: 0 }}
        />}
        
        { state !== "FREE" && <Checkbox 
          icon={<img src="/images/sessions/unactive.png"/> as React.ReactNode}
          disabled
          sx={{ p: 0, m: 0 }}
        />}
    </div>
  );
}

export default SeansButton