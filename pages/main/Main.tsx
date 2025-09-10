import React from 'react'
import Preview from '../../ui/Preview/Preview'
import Header from '../../ui/header/Header'
import styles from "./Main.module.scss"
import Sort from '../../ui/SortPanel/Sort'
import Catalog from '../../ui/Catalog/Catalog'
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