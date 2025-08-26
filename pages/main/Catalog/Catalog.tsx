import React from 'react'
import styles from "./Catalog.module.scss"
import FilmCard from './Card/Card'

const Catalog = () => {
  return (
    <div className={styles.catalog}>
        <FilmCard/>
    </div>
  )
}

export default Catalog