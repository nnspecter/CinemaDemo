import React from 'react'
import Preview from './Preview/Preview'
import Header from '../header/Header'
import styles from "./Main.module.scss"
import Sort from './SortPanel/Sort'
import Catalog from './Catalog/Catalog'
import News from './News/News'
import { Provider } from 'react-redux'
import { store } from '../../app/store'
const Main = () => {
  return (
    <div className={styles.main}>
        <Header/>
        <Preview/>
        <Sort/>
        <Provider store={store}>
          <Catalog/>
        </Provider>
    </div>
  )
}

export default Main