import React, { useState } from 'react'
import styles from "./TextSwitchData.module.scss"
const TextSwitchData = () => {
    const[selectedData, setSelectedData] = useState("today");
  return (
    <div className={styles.TextSwitchData}>
        <div className={`${styles.text} ${selectedData ==="today" && styles.active}`} onClick={()=> setSelectedData("today")}>
            СЕГОДНЯ
        </div>

        <div className={`${styles.text} ${selectedData ==="tommorow" && styles.active}`} onClick={()=> setSelectedData("tommorow")}>
             ЗАВТРА
        </div>
    </div>
  )
}

export default TextSwitchData