import React from 'react'
import styles from "./Header.module.scss"

const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.headerLogo}>
            <img src={"images/header/logo.png"}></img>
        </div>
        <div className={styles.headerCategory}>
            <p>ГЛАВНАЯ</p>
            <p>НОВОСТИ</p>
            <p>КОНТАКТЫ</p>
        </div>
    </div>
  )
}

export default Header