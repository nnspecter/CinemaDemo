import React from 'react'
import styles from "./Sort.module.scss"
import CustomizedHook from './Category/Demo'
import SwitchData from './Switch/SwitchData'
function Sort() {
  return (
    <div className={styles.sort}>
      <img src="images/Sort/AbstractBack.jpg"></img>
      <div className={styles.sortPanel}>
          <div className={styles.sortLeft}>
            <CustomizedHook/>
          </div>
          <div className={styles.sortRight}>
            <p>СЕГОДНЯ</p>
            <SwitchData/>
            <p>ЗАВТРА</p>
          </div>
      </div>
    </div>
  )
}

export default Sort