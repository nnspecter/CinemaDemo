import React from 'react'
import styles from "./RecPanel.module.scss"
import { useBasePath } from '../../hooks/useBasePath';
const RecPanel = () => {
  const prefix = useBasePath();
  return (
    <div className={styles.sort}>
      <img src={`${prefix}/images/Sort/AbstractBack.jpg`}></img>
      <div className={styles.RecPanel}>
          ТАК ЖЕ ПОСМОТРИТЕ
      </div>
    </div>
  )
}

export default RecPanel