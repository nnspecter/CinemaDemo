import React from 'react'
import Preview from './Preview/Preview'
import Header from '../header/Header'
import styles from "./Main.module.scss"
import Sort from './SortPanel/Sort'
const Main = () => {
  return (
    <div className={styles.main}>
        <Header/>
        <Preview/>
        <Sort/>
    </div>
  )
}

export default Main