import React from 'react'
import styles from "./Sort.module.scss"
import TextSwitchData from './Switch/TextSwitchData'
import { useBasePath } from '../../hooks/useBasePath'
const Sort = () => {
  const prefix = useBasePath();
  return (
    <div className={styles.sort}>
      <img src={`g${prefix}images/Sort/AbstractBack.jpg`}></img>
      <div className={styles.sortPanel}>
          <div className={styles.sortLeft}>
            КАТАЛОГ ФИЛЬМОВ
          </div>
          <div className={styles.sortRight}>
            <TextSwitchData/>
          </div>
      </div>
    </div>
  )
}

export default Sort