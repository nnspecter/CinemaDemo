import React from 'react'
import Preview from './Preview/Preview'
import Header from '../header/Header'
import styles from "./Main.module.scss"
import Sort from './SortPanel/Sort'
import Catalog from './Catalog/Catalog'
import { Provider } from 'react-redux'
const Main = () => {
  return (
    <div className={styles.main}>
        <Header/>
        <Preview/>
        <Sort/>
        <Catalog/>
    </div>
  )
}

export default Main